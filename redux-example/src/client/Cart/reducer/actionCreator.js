import { createAction } from "@reduxjs/toolkit";

// import { ADD_TO_CART, REMOVE_FROM_CART } from "./constants";

export const addToCart = createAction("ADD_TO_CART");
export const removeFromCart = createAction("REMOVE_FROM_CART");

// export const addToCart = (newProduct) => {
//   return {
//     type: ADD_TO_CART,
//     payload: newProduct,
//   };
// };

// export const removeFromCart = (idx) => {
//   return {
//     type: REMOVE_FROM_CART,
//     payload: idx,
//   };
// };
