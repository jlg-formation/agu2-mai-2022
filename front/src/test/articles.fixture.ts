import { Article } from 'src/app/interfaces/article';

export const articles: Article[] = [
  {
    id: 'azerazer',
    name: 'Truelle',
    price: 2.99,
    qty: 100,
  },
  {
    id: 'rtrtrtrt',
    name: 'Faucille',
    price: 5.45,
    qty: 50,
  },
  {
    id: 'ghghgh',
    name: 'Perceuse',
    price: 25,
    qty: 15,
  },
];

export const a1: Article = {
  name: 'Cheville',
  price: 5.45,
  qty: 50,
};

export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));
