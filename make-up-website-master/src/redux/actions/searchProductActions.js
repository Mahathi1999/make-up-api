import * as actionTypes from "./actionTypes";

export function searchValue(val) {
  return { type: actionTypes.SEARCH_VALUE, payload: val.target.value };
}
