import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../store/Slices/cartSlice";

export const store = configureStore({
  reducer: {
    cartSlice: cartReducer,
  },
});
