import express from "express";
import {
  deleteProductById,
  getAllProducts,
  getProductById,
} from "../controller/productController.js";
import {
  protectRoute,
  authorizationProtect,
} from "../middlewares/authMiddleware.js";
const router = express.Router();

router.route("/").get(getAllProducts);

router
  .route("/:id")
  .get(getProductById)
  .delete(protectRoute, authorizationProtect, deleteProductById);

export default router;
