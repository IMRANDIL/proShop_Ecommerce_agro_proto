import express from "express";
import {
  createProduct,
  createReview,
  deleteProductById,
  getAllProducts,
  getProductById,
  topProducts,
  updateProductById,
} from "../controller/productController.js";
import {
  protectRoute,
  authorizationProtect,
} from "../middlewares/authMiddleware.js";
const router = express.Router();

router
  .route("/")
  .get(getAllProducts)
  .post(protectRoute, authorizationProtect, createProduct);

router.post("/:id/reviews", protectRoute, createReview);

router.get("/top", topProducts);

router
  .route("/:id")
  .get(getProductById)
  .delete(protectRoute, authorizationProtect, deleteProductById)
  .put(protectRoute, authorizationProtect, updateProductById);

export default router;
