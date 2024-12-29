export type CreditCardType = {
  id: string;
  type: "black" | "white";
  balance: number;
  holder: string;
  valid: string;
  cardNo: string;
};

export type TransactionType = {
  id: string;
  badgeType: "deposit" | "paypal" | "dollar";
  title: string;
  date: string;
  amount: number;
};

export type UserType = {
  id: string;
  name: string;
  role: string;
  img: string;
};

export type SidebarItemType = {
  id: string;
  nImg: string;
  sImg: string;
  title: string;
  path: string;
};

export type Card = {
  msg: string;
  type: "error" | "success";
  id: number;
};
