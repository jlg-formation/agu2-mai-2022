import { Router } from "express";
import { Article } from "./interfaces/article";

const articles: Article[] = [
  {
    name: "Pelle",
    price: 2.99,
    qty: 100,
  },
  {
    name: "Faucille",
    price: 5.45,
    qty: 50,
  },
  {
    name: "Perceuse",
    price: 25,
    qty: 15,
  },
];

const app = Router();

app.get("/date", (req, res) => {
  res.json({ date: new Date() });
});

app.get("/articles", (req, res) => {
  res.json(articles);
});

export const api = app;
