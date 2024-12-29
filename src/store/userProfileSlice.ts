import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import user from "../assets/user.svg";

const initialState = {
  userData: {
    name: "Charlene Reed",
    userName: "Charlene Reed",
    email: "charlenereed@gmail.com",
    password: "123456789",
    dob: "25 January 1990",
    presentAddress: "San Jose, California, USA",
    permanentAddress: "San Jose, California, USA",
    city: "San Jose",
    postalCode: 45962,
    country: "USA",
    img: user,
  },
};

type UserProfileState = typeof initialState;

const userProfileSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    updateState: (state, action: PayloadAction<UserProfileState>) => {
      return { ...action.payload };
    },
    updateImage: (state, action: PayloadAction<string>) => {
      state.userData.img = action.payload;
    },
  },
});

export const { updateState, updateImage } = userProfileSlice.actions;

export default userProfileSlice.reducer;
