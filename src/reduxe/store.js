import { configureStore } from "@reduxjs/toolkit";
import cartReduce from "./CreateSlice/CreateSlice";
import bookReduce from "./BookSlice/BookSlice";

export const store = configureStore({
  reducer: {
    basket: cartReduce,
    book: bookReduce,
  },
});
