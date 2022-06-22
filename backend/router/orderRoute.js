import express from "express";
import {
  addOrderItems,
  getUserOrder,
  orderItemById,
  updateOrderToPaid,
} from "../controller/orderController.js";
import { protectRoute } from "../middlewares/authMiddleware.js";
const router = express.Router();

router.route("/").post(protectRoute, addOrderItems);
router.route("/myorders").get(protectRoute, getUserOrder);
router.route("/:id").get(protectRoute, orderItemById);
router.route("/:id/pay").put(protectRoute, updateOrderToPaid);

export default router;
