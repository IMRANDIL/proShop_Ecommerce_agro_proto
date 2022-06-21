import express from "express";
import { addOrderItems, orderItemById } from "../controller/orderController.js";
import { protectRoute } from "../middlewares/authMiddleware.js";
const router = express.Router();

router.route("/").post(protectRoute, addOrderItems);
router.route("/:id").get(protectRoute, orderItemById);

export default router;
