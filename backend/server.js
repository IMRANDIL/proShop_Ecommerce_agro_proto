import dotenv from "dotenv";
import dbConnection from "./config/db.js";
import colors from "colors";
dotenv.config();

dbConnection();

import express from "express";

import cors from "cors";
import productRouter from "./router/productRoute.js";
const app = express();

//some middleware...

app.use(cors());

app.use("/api/products", productRouter);

app.get("/", (req, res) => {
  res.send("API is ready");
});

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
  console.log(
    `server runs in ${process.env.NODE_ENV} mode on port: ${PORT}😃`.yellow.bold
  );
});
