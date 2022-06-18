import express from "express";
import { authenticateUser } from "../controller/userController.js";

const router = express.Router();

router.post("/login", authenticateUser);

export default router;
