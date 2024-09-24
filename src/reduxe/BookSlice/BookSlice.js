import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basketItem: localStorage.getItem("basketItem")
    ? JSON.parse(localStorage.getItem("basketItem"))
    : [],
};

const BookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    AddToBook: (state, action) => {
      const findindexBook = state.basketItem.find(
        (item) => item.id === action.payload.id
      );

      if (findindexBook) {
        alert("This product alerady in your wishlist");
      } else {
        const buildSlice = { ...action.payload };

        state.basketItem.push(buildSlice);

        localStorage.setItem("bookItems", JSON.stringify(state.basketItem));
      }
    },

    RemoveBook: (state, action) => {
      const filterBook = state.basketItem.filter(
        (x) => x.id !== action.payload.id
      );

      state.basketItem = filterBook;
      localStorage.setItem("basketItem", JSON.stringify(state.basketItem));
    },
  },
});

export const { AddToBook, RemoveBook } = BookSlice.actions;
export default BookSlice.reducer;
