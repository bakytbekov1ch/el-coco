import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { cart: [] },
  reducers: {
    addtocart: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.cart[itemIndex].quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    increaseQuantity: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload
      );
      if (itemIndex >= 0) {
        state.cart[itemIndex].quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const itemIndex = state.cart.findIndex(
        (item) => item.id === action.payload
      );
      if (itemIndex >= 0 && state.cart[itemIndex].quantity > 1) {
        state.cart[itemIndex].quantity -= 1;
      }
    },
  },
});

export const { addtocart, removeFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
