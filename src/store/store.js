import { configureStore } from "@reduxjs/toolkit";
import termSlice from "./term/termSlice";

export const store = configureStore({
  reducer: {
    term: termSlice,
  },
});
