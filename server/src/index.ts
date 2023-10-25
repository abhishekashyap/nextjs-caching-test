import express, { Request, Response } from "express";

const app = express();
const PORT = process.env.PORT || 3009;

app.get("/", (req: Request, res: Response) => {
  res.send({ message: "Typescript express server backend" });
});

app.get("/:id", (req: Request, res: Response) => {
  res.send(String(Math.floor(Math.random() * 100)));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
