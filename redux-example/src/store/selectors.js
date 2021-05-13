export const getAllProducts = (state) => state.products.list;

export const isProductsLoading = (state) => state.products.loading;

export const isFetchProductsError = (state) => state.products.getError;

export const getCart = (state) => state.cart;

const selectors = { getAllProducts };

export default selectors;
