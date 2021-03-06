import dotenv from "dotenv";
import path from "path";
import dbConnection from "./config/db.js";
import morgan from "morgan";
import colors from "colors";
import { customError, error404 } from "./middlewares/customError.js";
dotenv.config();

dbConnection();

import express from "express";

import cors from "cors";
import productRouter from "./router/productRoute.js";
import userRouter from "./router/userRoute.js";
import orderRouter from "./router/orderRoute.js";
import uploadRouter from "./router/uploadsRoute.js";
const app = express();

//some middleware...

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/products", productRouter);
app.use("/api/users", userRouter);
app.use("/api/orders", orderRouter);
app.use("/api/orders", orderRouter);
app.use("/api/upload", uploadRouter);

// const __dirname = path.resolve();

// app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

app.get("/api/config/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID);
});

app.use(error404);

app.use(customError);

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
  console.log(
    `server runs in ${process.env.NODE_ENV} mode on port: ${PORT}😃`.yellow.bold
  );
});
