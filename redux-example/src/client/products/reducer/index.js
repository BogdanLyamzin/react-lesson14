import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_ERROR } from "./constansts";

const initialState = {
  list: [],
  loading: false,
  error: null,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return { ...state, loading: true };
    case FETCH_SUCCESS:
      return { ...state, list: action.payload, loading: false, error: null };
    case FETCH_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default productsReducer;
