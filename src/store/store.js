import { configureStore } from "@reduxjs/toolkit";
import { GiphySlice } from "./";

export const store = configureStore({
  reducer: {
    giphy: GiphySlice.reducer,
  },
})
