import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 24,
};

const termSlice = createSlice({
  name: "term",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = termSlice.actions;

export default termSlice.reducer;
