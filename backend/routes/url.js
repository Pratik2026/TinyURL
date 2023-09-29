import express from "express";
import { generateShortUrl } from "../controllers/url.js";
import { handleAnalytics } from "../controllers/url.js";
import { updateVisit } from "../controllers/url.js";

const router = express.Router();

router.get("/analytics/:id", handleAnalytics);
router.post("/", generateShortUrl);
router.get("/:id", updateVisit);


export default router;