import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function searchProductReducer(
  state = initialState.value,
  action
) {
  switch (action.type) {
    case actionTypes.SEARCH_VALUE:
      return action.payload;
    default:
      return state;
  }
}
