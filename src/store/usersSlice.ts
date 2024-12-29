import { createSlice } from "@reduxjs/toolkit";
import { UserType } from "../types";
import user1 from '../assets/user1.svg';
import user2 from '../assets/user2.svg';
import user3 from '../assets/user3.png';

const initialState: UserType[] = [
  { id: "7894", name: "Livia Bator", role: "CEO", img: user1 },
  { id: "7895", name: "Randy Press", role: "Director", img: user3 },
  { id: "7896", name: "Workman", role: "Designer", img: user2 },
  { id: "7897", name: "Alex Voo", role: "Workman", img: user1 },
  { id: "7898", name: "John Cena", role: "Workman", img: user3 },
];

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export default usersSlice.reducer;
