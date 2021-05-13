import { configureStore } from "@reduxjs/toolkit";

import productsReducer from "../client/products/reducer/productsSlice";
// import cartReducer from "../client/Cart/reducer/cartSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    // cart: cartReducer,
  },
});

export default store;

// import { createStore, combineReducers, applyMiddleware } from "redux";
// import thunk from "redux-thunk";

// import productsReducer from "../client/products/reducer";

// const rootReducer = combineReducers({
//   products: productsReducer,
// });

// const store = createStore(rootReducer, applyMiddleware(thunk));

// export default store;

// import { configureStore } from "@reduxjs/toolkit";

// // import cartReducer from "../client/Cart/reducer/cartReducer";
// import cartReducer from "../client/Cart/reducer/cartSlice";

// // import rootReducer from "./reducer";

// const store = configureStore({
//   reducer: {
//     cart: cartReducer,
//   },
// });
