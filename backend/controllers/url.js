import { nanoid } from "nanoid";
import URL from "../models/url.js";

async function generateShortUrl(req, res) {
  const shortId = nanoid(8);
  const body = req.body;

  if (!body.url) return res.status(400).json({ error: "URL is required" });
  
  await URL.create({
    NanoId: shortId,
    original_url: body.url,
    visit_History: [],
  });

  return res.status(200).json({ id: shortId });
}

async function handleAnalytics(req, res) {
  const id = req.params.id;

  const result = await URL.findOne({ NanoId: id });

  if (!result) return res.status(404).send("URL not found....");

  return res
    .status(200)
    .json({
      totalClicks: result.visit_History.length,
      analytics: result.visit_History,
    });
}


async function updateVisit(req, res) {
  try {
    const id = req.params.id;
    const date_time = new Date()

    const entry = await URL.findOneAndUpdate(
      {
        NanoId: id,
      },
      {
        $push: {
          visit_History: {
            timestamp: date_time.toString(),
          },
        },
      }
    );

    if (!entry) {
      return res.status(404).send("URL not found");
    }

    return res.redirect(entry.original_url);

  } catch (error) {
    console.error("Error:", error.message.red.bold);
    return res.status(500).send("Internal Server Error");
  }
};


export { generateShortUrl, handleAnalytics, updateVisit };
