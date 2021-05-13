import { ADD_TO_CART, REMOVE_FROM_CART } from "./constants";

export const addToCart = (newProduct) => {
  return {
    type: ADD_TO_CART,
    payload: newProduct,
  };
};

export const removeFromCart = (idx) => {
  return {
    type: REMOVE_FROM_CART,
    payload: idx,
  };
};
