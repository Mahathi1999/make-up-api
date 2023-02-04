import * as actionTypes from "./actionTypes";

export function getInfo(products) {
  return {
    type: actionTypes.GET_PRODUCTS,
    payload: products,
  };
}
export function handleChange(event) {
  return {
    type: actionTypes.SEARCH_VALUE,
    payload: event,
  };
}
