import { Listing } from "../models/listing.model.js";

export const createListingController = async (req, res, next) => {
  try {
    // Use the static create method directly
    const listing = await Listing.create(req.body);

    return res.status(200).send({
      success: true,
      message: "Listing created successfully",
      listing,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Error creating listing",
      error: error.message, // Send error message for debugging
    });
  }
};
