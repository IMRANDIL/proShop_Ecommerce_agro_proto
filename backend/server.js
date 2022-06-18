import dotenv from "dotenv";
import dbConnection from "./config/db.js";
import colors from "colors";
import { customError, error404 } from "./middlewares/customError.js";
dotenv.config();

dbConnection();

import express from "express";

import cors from "cors";
import productRouter from "./router/productRoute.js";
import userRouter from "./router/userRoute.js";
const app = express();

//some middleware...

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/products", productRouter);
app.use("/api/users", userRouter);

app.get("/", (req, res) => {
  res.send("API is ready");
});

app.use(error404);

app.use(customError);

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
  console.log(
    `server runs in ${process.env.NODE_ENV} mode on port: ${PORT}😃`.yellow.bold
  );
});
