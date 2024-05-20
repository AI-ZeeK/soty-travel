import { configureStore } from "@reduxjs/toolkit";
import AppSlice from "./features/AppSlice";

export const store = configureStore({
  reducer: {
    AppSlice,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
