import express from "express";
import {
  createListingController,
  deleteListingController,
} from "../controllers/listing.controller.js";
import { verifytoken } from "../utils/verifyToken.js";

const router = express.Router();

//Create Listing
router.post("/create", verifytoken, createListingController);

//delete Listiing
router.delete("/delete/:id", verifytoken, deleteListingController);

export default router;
