const express = require('express');
const { signUp, signIn} = require('../controller/authController');
const authRouter = express.Router();

authRouter.post('/sign', signUp);
authRouter.post('/sign', signIn);

module.exports = authRouter;
