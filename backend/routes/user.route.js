import express from "express";
import { updateUser } from "../controllers/user.controller.js";
import { verifytoken } from "../utils/verifyToken.js";

const router = express.Router();

//Update user
router.post("/update/:id", verifytoken, updateUser);

export default router;
