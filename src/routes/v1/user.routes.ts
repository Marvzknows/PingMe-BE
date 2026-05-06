import express, { Router } from "express";
import { getUser, userList } from "../../controllers/user.controller.js";

const userRouter: Router = express.Router();

userRouter.get("/", userList);
userRouter.get("/:id", getUser);

export default userRouter;
