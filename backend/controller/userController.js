import User from "../models/userModel.js";
import asyncHandler from "express-async-handler";

export const authenticateUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      email,
      password,
    });
  } else {
    res.status(401);
    throw new Error("Invalid Credentials");
  }
});
