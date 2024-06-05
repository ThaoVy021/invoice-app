export interface ICreateNew {
  key: number;
  details: string;
  quantity: number;
  rate: string;
  price: number;
  amount: number;
}

export const createNew: ICreateNew[] = [
  {
    key: 1,
    details: "Quetiapine Fumarate",
    quantity: 1,
    rate: "Pieces",
    price: 1,
    amount: 1,
  },
  {
    key: 2,
    details: "ACETYLCYSTEINE",
    quantity: 2,
    rate: "Pieces",
    price: 2,
    amount: 2,
  },
  {
    key: 3,
    details: "Zolpidem tartrate",
    quantity: 3,
    rate: "Pieces",
    price: 3,
    amount: 3,
  },
  {
    key: 4,
    details: "Acetaminophen",
    quantity: 4,
    rate: "Pieces",
    price: 4,
    amount: 4,
  },
  {
    key: 5,
    details: "Salicylic Acid",
    quantity: 5,
    rate: "Pieces",
    price: 5,
    amount: 5,
  },
];
