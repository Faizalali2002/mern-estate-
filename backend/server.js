import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import connectDB from "./db/index.js";
import testRouter from "./routes/test.route.js";
import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js";
import listingRouter from "./routes/listing.route.js";

// Load environment variables
dotenv.config();

// Connect to the database
connectDB();

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(cookieParser());

// Route for testing
app.use("/api/v1/test", testRouter);

// Authentication routes
app.use("/api/v1/auth", authRouter);

//User routes
app.use("/api/v1/user", userRouter);

//Listing routes
app.use("/api/v1/listing", listingRouter);

// Port configuration
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(
    `⚙️  Server is running in ${
      process.env.DEV_MODE || "development"
    } mode at port: ${PORT}`
  );
});

// Global error handler
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
