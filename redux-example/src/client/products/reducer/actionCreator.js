import axios from "axios";

import { fetchStart, fetchSuccess, fetchError } from "./func";

export const getProducts = () => {
  const fetchProducts = (dispatch) => {
    dispatch(fetchStart());

    axios
      .get("http://localhost:3000/products")
      .then(({ data }) => dispatch(fetchSuccess(data)))
      .catch((error) => dispatch(fetchError(error)));
  };

  return fetchProducts;
};
