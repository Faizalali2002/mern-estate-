import { User } from "../models/user.model.js";
import { Listing } from "../models/listing.model.js";
import bcrypt from "bcryptjs";

export const updateUser = async (req, res, next) => {
  try {
    const userId = req.params.id; // Extract user ID from request parameters
    const { username, email, password, avatar } = req.body; // Destructure fields from request body

    // Find the user by ID
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not found",
      });
    }

    // Update user fields if they are provided in the request body
    if (username) user.username = username;
    if (email) user.email = email;
    if (avatar) user.avatar = avatar;

    // If password is being updated, hash the new password before saving
    if (password) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      user.password = hashedPassword;
    }

    // Save the updated user
    const updatedUser = await user.save();

    // Exclude the password from the response
    const { password: pass, ...rest } = updatedUser._doc;

    return res.status(200).send({
      success: true,
      message: "User updated successfully",
      user: rest, // Send updated user details without password
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error updating user",
      error,
    });
  }
};

export const deleteUserController = async (req, res, next) => {
  try {
    const userId = req.params.id;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User not Found",
      });
    }

    await User.findByIdAndDelete(userId);
    res.clearCookie("access_token");

    return res.status(200).send({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error deleting user",
      error: error.message,
    });
  }
};

export const getUserListing = async (req, res) => {
  try {
    if (req.user.id !== req.params.id) {
      return res.status(403).send({
        success: false,
        message: "You are not authorized to view these listings",
      });
    }

    const listings = await Listing.find({ userRef: req.params.id });
    if (!listings || listings.length === 0) {
      return res.status(404).send({
        success: false,
        message: "No listings found for this user",
      });
    }
    return res.status(200).send({
      success: true,
      message: "User listings retrieved successfully",
      listings,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error retrieving user listings",
      error: error.message,
    });
  }
};
