import express from "express";
import { createListingController } from "../controllers/listing.controller.js";
import { verifytoken } from "../utils/verifyToken.js";

const router = express.Router();

//Create Listing
router.post("/create", verifytoken, createListingController);

export default router;
