import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basketItem: localStorage.getItem("basketItem")
    ? JSON.parse(localStorage.getItem("basketItem"))
    : [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addtocart: (state, action) => {
      const itemIndex = state.basketItem.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.basketItem[itemIndex].quantity += 1;
      } else {
        const builBasket = { ...action.payload, quantity: 1 };

        state.basketItem.push(builBasket);

        localStorage.setItem("basketItem", JSON.stringify(state.basketItem));
      }
    },

    RemoveFromProduct: (state, action) => {
      const filterProduct = state.basketItem.filter(
        (x) => x.id !== action.payload
      );

      state.basketItem = filterProduct;
      localStorage.setItem("basketItem", JSON.stringify(state.basketItem));
    },

    increaseQuantity: (state, action) => {
      const itemIndex = state.basketItem.findIndex(
        (item) => item.id === action.payload
      );
      if (itemIndex >= 0) {
        state.basketItem[itemIndex].quantity += 1;
      }
    },

    decreaseQuantity: (state, action) => {
      const itemIndex = state.basketItem.findIndex(
        (item) => item.id === action.payload
      );
      if (itemIndex >= 0 && state.basketItem[itemIndex].quantity > 1) {
        state.basketItem[itemIndex].quantity -= 1;
      }
    },
  },
});

export const {
  addtocart,
  RemoveFromProduct,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
