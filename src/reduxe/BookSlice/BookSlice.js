import { createSlice } from "@reduxjs/toolkit";

const BookSlice = createSlice({
  name: "book",
  initialState: { book: [] },
  reducers: {
    AddToBook: (state, action) => {
      state.book.push({ ...action.payload });
    },
  },
});

export const { AddToBook } = BookSlice.actions;
export default BookSlice.reducer;
