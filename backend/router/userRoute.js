import express from "express";
import {
  authenticateUser,
  deleteUser,
  getAllUsers,
  getUserById,
  getUserProfile,
  registerUser,
  updateUserById,
  updateUserProfile,
} from "../controller/userController.js";
import {
  authorizationProtect,
  protectRoute,
} from "../middlewares/authMiddleware.js";

const router = express.Router();

router
  .route("/")
  .post(registerUser)
  .get(protectRoute, authorizationProtect, getAllUsers);

router
  .route("/:id")
  .delete(protectRoute, authorizationProtect, deleteUser)
  .get(protectRoute, authorizationProtect, getUserById)
  .put(protectRoute, authorizationProtect, updateUserById);

router
  .route("/profile")
  .get(protectRoute, getUserProfile)
  .put(protectRoute, updateUserProfile);

router.post("/login", authenticateUser);

export default router;
