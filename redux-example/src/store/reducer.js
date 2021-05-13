import { combineReducers } from "redux";

import cartReducer from "../client/Cart/reducer/cartReducer";

// export const reducer = (prevState = initialState, action) => {
//   switch (action.type) {
//     case ADD_TO_CART:
//       const { cart } = prevState;
//       const { products } = cart;
//       const newProducts = [...products, action.payload];
//       const newCart = { ...cart, products: newProducts };
//       return { ...prevState, cart: newCart };
//     case REMOVE_FROM_CART:
//       const { cart } = prevState;
//       const { products } = cart;
//       // const newProducts = [...products];
//       // newProducts.splice(action.payload, 1);
//       const newProducts = products.filter(
//         (_, index) => index !== action.payload
//       );
//       const newCart = { ...cart, products: newProducts };
//       return { ...prevState, cart: newCart };
//     default:
//       return prevState;
//   }
// };

const rootReducer = combineReducers({
  cart: cartReducer,
});

export default rootReducer;
