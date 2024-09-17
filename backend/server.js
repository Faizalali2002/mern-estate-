import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config();

connectDB();

const app = express();
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(
    `⚙️  Server is running in ${process.env.DEV_MODE} mode at port : ${process.env.PORT}`
  );
});
