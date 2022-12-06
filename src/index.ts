import express, { Request, Response, NextFunction } from "express";
import * as dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.status(200).json({ msg: "OK", item: "Hello world" });
});

app.listen(PORT, () => {
  console.log("Server runing on port", PORT);
});
