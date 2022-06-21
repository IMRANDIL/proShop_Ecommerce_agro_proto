import express from "express";
import {
  addOrderItems,
  orderItemById,
  updateOrderToPaid,
} from "../controller/orderController.js";
import { protectRoute } from "../middlewares/authMiddleware.js";
const router = express.Router();

router.route("/").post(protectRoute, addOrderItems);
router.route("/:id").get(protectRoute, orderItemById);
router.route("/:id/pay").get(protectRoute, updateOrderToPaid);

export default router;
