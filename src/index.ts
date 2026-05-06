import "dotenv/config";
import express from "express";
import type { Request, Response } from "express";
// import { prisma } from "./lib/prisma.js";
import cors from "cors";

const app = express();
const port = Number(process.env["PORT"]) || 3000;

// parse json request body
app.use(express.json());

// enable cors
app.use(cors());
app.options("*", cors());

// send back a 404 error for any unknown api request
app.use((_req: Request, res: Response) => {
  res.status(404).json({ error: "Not found" });
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
