import express from "express";
import {
  authenticateUser,
  getUserProfile,
} from "../controller/userController.js";
import { protectRoute } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/profile").get(protectRoute, getUserProfile);

router.post("/login", authenticateUser);

export default router;
