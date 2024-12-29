import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TransactionType } from "../types";

const initialState: TransactionType[] = [
  {
    id: "4568",
    badgeType: "deposit",
    title: "Deposit from my Card",
    date: "28 January 2021",
    amount: -850,
  },
  {
    id: "4569",
    badgeType: "paypal",
    title: "Deposit Paypal",
    date: "25 January 2021",
    amount: 2500,
  },
  {
    id: "4570",
    badgeType: "dollar",
    title: "Jemi Wilson",
    date: "21 January 2021",
    amount: 5400,
  },
];

const transactionsSlice = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    addTransaction: (state, action: PayloadAction<TransactionType>) => {
      state.push(action.payload);
    },
  },
});

export const { addTransaction } = transactionsSlice.actions;
export default transactionsSlice.reducer;
