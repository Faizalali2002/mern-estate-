import express from "express";
import {
  google,
  signIncontroller,
  signUpcontroller,
} from "../controllers/auth.controller.js";

const router = express.Router();

//Sign Up
router.post("/sign-up", signUpcontroller);

//sign In
router.post("/sign-in", signIncontroller);
//google
router.post("/google", google);

export default router;
