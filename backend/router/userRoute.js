import express from "express";
import {
  authenticateUser,
  getAllUsers,
  getUserProfile,
  registerUser,
  updateUserProfile,
} from "../controller/userController.js";
import { protectRoute } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/").post(registerUser).get(protectRoute, getAllUsers);

router
  .route("/profile")
  .get(protectRoute, getUserProfile)
  .put(protectRoute, updateUserProfile);

router.post("/login", authenticateUser);

export default router;
