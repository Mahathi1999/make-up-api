import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function brandsNameReducer(state = initialState.brands, action) {
  switch (action.type) {
    case actionTypes.BRANDS_NAME:
      return action.payload;
    default:
      return state;
  }
}
