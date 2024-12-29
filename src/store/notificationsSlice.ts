import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Card } from "../types";

type NotificationState = {
  notificationCards: Card[];
};

const initialState: NotificationState = {
  notificationCards: [],
};

const notificationSlice = createSlice({
  name: "notifications",
  initialState,
  reducers: {
    addCard: (state, action: PayloadAction<Card>) => {
      state.notificationCards.push(action.payload);
    },
    deleteCard: (state, action: PayloadAction<number>) => {
      state.notificationCards = state.notificationCards.filter(
        (card) => card.id !== action.payload
      );
    },
  },
});

export const { addCard, deleteCard } = notificationSlice.actions;
export default notificationSlice.reducer;
