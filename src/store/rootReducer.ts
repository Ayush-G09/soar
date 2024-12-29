import { combineReducers } from "@reduxjs/toolkit";
import transactionsReducer from "./transactionsSlice";
import usersReducer from "./usersSlice";
import notificationReducer from "./notificationsSlice";
import userProfileReducer from "./userProfileSlice";

const rootReducer = combineReducers({
  transactions: transactionsReducer,
  users: usersReducer,
  notifications: notificationReducer,
  userProfile: userProfileReducer,
});

export default rootReducer;
