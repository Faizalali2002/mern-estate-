import express from "express";
import { signUpcontroller } from "../controllers/auth.controller.js";

const router = express.Router();

//Sign Up
router.post("/sign-up", signUpcontroller);

export default router;
