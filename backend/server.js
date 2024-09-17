import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import testRouter from "./routes/test.route.js";
import authRouter from "./routes/auth.route.js";
dotenv.config();

connectDB();

const app = express();

app.use(express.json());

// test
app.use("/api/v1/test", testRouter);

//auth
app.use("/api/v1/auth", authRouter);
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(
    `⚙️  Server is running in ${process.env.DEV_MODE} mode at port : ${process.env.PORT}`
  );
});
