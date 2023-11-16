const express = require("express");
const authRouter = express.Router();
const jwtAuth = require("../middleware/jwtAuth.js");

const {
  signUp,
  signIn,
  forgotPassword,
  getUser,
  resetPassword,
  logout
} = require("../controller/authController.js");

authRouter.post("/signup", signUp);
authRouter.post("/signin", signIn);
authRouter.get("/user",jwtAuth, getUser);
authRouter.post("/forgotpassword", forgotPassword);
authRouter.post("/resetpassword/:token", resetPassword);
authRouter.get("/logout", jwtAuth, logout);


module.exports = authRouter;
