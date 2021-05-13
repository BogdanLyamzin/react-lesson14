import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const productsSlice = createSlice({
  name: "productsReducer",
  initialState: {
    list: [],
    loading: false,
    getError: null,
    addError: null,
  },
  reducers: {
    productsLoading(state) {
      state.loading = true;
    },
    productsReceived(state, action) {
      state.loading = false;
      state.error = null;
      state.list = action.payload;
      state = { loading: false, getError: null, list: action.payload };
    },
    productsFailed(state, action) {
      state.loading = false;
      state.getError = action.payload;
    },
    addProduct(state, action) {
      state.list.push(action.payload);
    },
    addProductFailed(state, action) {
      state.addError = action.payload;
    },
  },
});

const { actions, reducer } = productsSlice;

const {
  productsLoading,
  productsReceived,
  productsFailed,
  addProduct,
  addProductFailed,
} = actions;

export const fetchAddProduct = (newProduct) => async (dispatch) => {
  try {
    const { data } = await axios.post(
      "http://localhost:3000/products",
      newProduct
    );
    dispatch(addProduct(data));
  } catch (error) {
    dispatch(addProductFailed(error));
  }
};

export const fetchProducts = () => async (dispatch) => {
  dispatch(productsLoading());
  try {
    const { data } = await axios.get("http://localhost:3000/products");
    dispatch(productsReceived(data));
  } catch (error) {
    dispatch(productsFailed(error));
  }
};

export default reducer;
