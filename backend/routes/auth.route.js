import express from "express";
import {
  signIncontroller,
  signUpcontroller,
} from "../controllers/auth.controller.js";

const router = express.Router();

//Sign Up
router.post("/sign-up", signUpcontroller);

router.post("/sign-in", signIncontroller);

export default router;
