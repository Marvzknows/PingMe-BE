import type { Request, Response } from "express";

export const userList = (_req: Request, res: Response) => {
  res.status(200).json({ success: true, message: "User list route" });
};

export const getUser = (req: Request, res: Response) => {
  const { id } = req.params;
  res.status(200).json({
    success: true,
    message: "The user id is: " + id,
  });
};
