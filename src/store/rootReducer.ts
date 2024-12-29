import { combineReducers } from "@reduxjs/toolkit";
import transactionsReducer from "./transactionsSlice";
import usersReducer from "./usersSlice";
import notificationReducer from "./notificationsSlice";

const rootReducer = combineReducers({
  transactions: transactionsReducer,
  users: usersReducer,
  notifications: notificationReducer,
});

export default rootReducer;
