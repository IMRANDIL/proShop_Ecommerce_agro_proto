import express from "express";
import { addOrderItems } from "../controller/orderController.js";
import { protectRoute } from "../middlewares/authMiddleware.js";
const router = express.Router();

router.route("/").post(protectRoute, addOrderItems);

export default router;
