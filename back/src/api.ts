import { Router, json } from "express";
import { Article } from "./interfaces/article";
import { v4 as uuidv4 } from "uuid";

let articles: Article[] = [
  {
    id: "azerazer",
    name: "Pelle",
    price: 2.99,
    qty: 100,
  },
  {
    id: "rtrtrtrt",
    name: "Faucille",
    price: 5.45,
    qty: 50,
  },
  {
    id: "ghghgh",
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

app.use(json());

app.post("/articles", (req, res) => {
  try {
    const article = req.body as Article;
    article.id = uuidv4();
    articles.push(article);
    res.status(201).end();
  } catch (err) {
    console.log("err: ", err);
    res.status(500).end();
  }
});

app.delete("/articles", (req, res) => {
  try {
    const ids = req.body as string[];
    console.log("ids: ", ids);
    articles = articles.filter((a) => !ids.includes(a.id));
    res.status(204).end();
  } catch (err) {
    console.log("err: ", err);
    res.status(500).end();
  }
});

export const api = app;
