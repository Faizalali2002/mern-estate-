import express from "express";
import {
  google,
  signIncontroller,
  signoutUserController,
  signUpcontroller,
} from "../controllers/auth.controller.js";

const router = express.Router();

//Sign Up
router.post("/sign-up", signUpcontroller);

//sign In
router.post("/sign-in", signIncontroller);
//google
router.post("/google", google);

//sign Out
router.get("/sign-out", signoutUserController);

export default router;
