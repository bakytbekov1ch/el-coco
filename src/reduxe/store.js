import { configureStore } from "@reduxjs/toolkit";
import cartReduce from "./CreateSlice/CreateSlice";

export const store = configureStore({
  reducer: {
    basket: cartReduce,
  },
});
