import "dotenv/config";
import express from "express";
import cors from "cors";
import routerV1 from "./routes/v1/index.js";
import { errorHandler, notFound } from "./middlewares/error.js";

const app = express();
const port = Number(process.env["PORT"]) || 3000;

// parse json request body
app.use(express.json());

// enable cors
app.use(cors());

// Api Routes
app.use("/api/v1", routerV1);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
