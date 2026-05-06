import type { NextFunction, Request, Response } from "express";
import { ApiError } from "../utils/ApiError.js";

export const notFound = (_req: Request, _res: Response, next: NextFunction) => {
  next(ApiError.notFound());
};

export const errorHandler = (
  err: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  if (err instanceof ApiError) {
    res.status(err.statusCode).json({
      success: false,
      message: err.message,
      ...(err.details !== undefined ? { details: err.details } : {}),
    });
    return;
  }

  console.error(err);
  res.status(500).json({
    success: false,
    message: "Internal server error",
  });
};
