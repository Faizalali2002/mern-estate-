import express from "express";
import {
  deleteUserController,
  updateUser,
} from "../controllers/user.controller.js";
import { verifytoken } from "../utils/verifyToken.js";

const router = express.Router();

//Update user
router.post("/update/:id", verifytoken, updateUser);

//Delete User
router.delete("/delete/:id", verifytoken, deleteUserController);

export default router;
