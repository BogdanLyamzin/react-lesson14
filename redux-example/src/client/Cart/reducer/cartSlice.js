import { createSlice } from "@reduxjs/toolkit";

import { initialState } from "./initialState";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    list: initialState,
  },
  reducers: {
    addToCart: (state, action) => {},
    removeFromCart: (state, action) => {
      const { products } = state.value;
      state.value.products = products.filter(
        (_, idx) => idx !== action.payload
      );
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
