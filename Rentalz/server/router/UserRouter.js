
import express from "express";

import {
  loginUser
} from "../controller/UserController.js"

const userRouter = express.Router();

userRouter.post("/api/users/login", loginUser);

export {userRouter};