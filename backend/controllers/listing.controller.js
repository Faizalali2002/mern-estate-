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
      error: error.message,
    });
  }
};

export const deleteListingController = async (req, res, next) => {
  try {
    const { id } = req.params;

    const listing = await Listing.findByIdAndDelete(id);

    if (!listing) {
      return res.status(404).send({
        success: false,
        message: "Listing not found",
      });
    }

    return res.status(200).send({
      success: true,
      message: "Listing deleted successfully",
      listing,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error deleting listing",
      error: error.message,
    });
  }
};

export const updateListingController = async (req, res, next) => {
  try {
    const { id } = req.params;

    const updatedListing = await Listing.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!updatedListing) {
      return res.status(404).send({
        success: false,
        message: "Listing not found",
      });
    }

    return res.status(200).send({
      success: true,
      message: "Listing updated successfully",
      listing: updatedListing,
    });
  } catch (error) {
    console.log("error : ", error);
    return res.status(500).send({
      success: false,
      message: "Error updating listing",
      error: error.message,
    });
  }
};
