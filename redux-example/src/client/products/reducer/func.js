import { FETCH_REQUEST, FETCH_SUCCESS, FETCH_ERROR } from "./constansts";

export const fetchStart = () => ({ type: FETCH_REQUEST });

export const fetchSuccess = (payload) => ({
  type: FETCH_SUCCESS,
  payload,
});

export const fetchError = (payload) => ({
  type: FETCH_ERROR,
  payload,
});
