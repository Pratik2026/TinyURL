import express from "express";
import colors from "colors";
import { connectToMongoDB } from "./config/connect_db.js";
import urlRoute from "./routes/url.js";
import URL from "./models/url.js";
import { config } from "dotenv";

const app = express();
const PORT = 3000;

//load env variables
config({path: "./config/config.env"});

connectToMongoDB();

app.set("view engine", "ejs");
app.use(express.json()); // to parse the body of the request as JSON
app.use("/url", urlRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`.green.bold);
});
