import { createReducer } from "@reduxjs/toolkit";

import { initialState } from "./initialState";

// import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART } from "./constants";

import { addToCart, removeFromCart } from "./actionCreator";

const cartReducer = createReducer(initialState, {
  [addToCart]: (state, action) => {
    const newProducts = [...state.products, action.payload];
    return { ...state, products: newProducts };
  },
  [removeFromCart]: (state, action) => {
    const newProducts = state.products.filter(
      (_, index) => index !== action.payload
    );
    return { ...state, products: newProducts };
  },
});

// const cartReducer = (prevState = initialState, action) => {
//   const { products } = prevState;
//   let newProducts = [];
//   switch (action.type) {
//     case addToCart.type:
//       newProducts = [...products, action.payload];
//       return { ...prevState, products: newProducts };
//     case removeFromCart.type:
//       newProducts = products.filter((_, index) => index !== action.payload);
//       return { ...prevState, products: newProducts };
//     default:
//       return prevState;
//   }
// };

export default cartReducer;
