import express, { Router } from "express";
import type { Request, Response } from "express";
import userRouter from "./user.routes.js";

const routerV1: Router = express.Router();

routerV1.get("/test", (_req: Request, res: Response) => {
  res.json({
    success: true,
    message: "hello world",
  });
});

routerV1.use("/user", userRouter);

export default routerV1;
