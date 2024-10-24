import express from "express";
import {
  createListingController,
  deleteListingController,
  getListing,
  updateListingController,
} from "../controllers/listing.controller.js";
import { verifytoken } from "../utils/verifyToken.js";

const router = express.Router();

//Create Listing
router.post("/create", verifytoken, createListingController);

//delete Listiing
router.delete("/delete/:id", verifytoken, deleteListingController);

//update Listing
router.post("/update/:id", verifytoken, updateListingController);

//get listing
router.get("/get/:id", getListing);

export default router;
