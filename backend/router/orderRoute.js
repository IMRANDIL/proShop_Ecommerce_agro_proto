import express from "express";
import {
  addOrderItems,
  getAllOrder,
  getUserOrder,
  orderItemById,
  updateOrderToPaid,
  updateToDelivered,
} from "../controller/orderController.js";
import {
  authorizationProtect,
  protectRoute,
} from "../middlewares/authMiddleware.js";
const router = express.Router();

router
  .route("/")
  .post(protectRoute, addOrderItems)
  .get(protectRoute, authorizationProtect, getAllOrder);
router.route("/myorders").get(protectRoute, getUserOrder);
router.route("/:id").get(protectRoute, orderItemById);
router.route("/:id/pay").put(protectRoute, updateOrderToPaid);
router
  .route("/:id/deliver")
  .put(protectRoute, authorizationProtect, updateToDelivered);

export default router;
