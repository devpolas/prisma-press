import express, { type Application } from "express";

const app: Application = express();

app.get("/", (req, res) => {
  res.status(200).json({
    message: "hello from prisma press",
  });
});

export default app;
