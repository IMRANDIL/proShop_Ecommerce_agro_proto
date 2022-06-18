import express from "express";
import {
  authenticateUser,
  getUserProfile,
} from "../controller/userController.js";

const router = express.Router();

router.route("/profile").get(getUserProfile);

router.post("/login", authenticateUser);

export default router;
