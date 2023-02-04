import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function cartReducer(state = initialState.cart, action) {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      let addedItem = state.find((c) => c.id === action.payload.id);
      if (addedItem) {
        let newState = state.map((cartItem) => {
          if (cartItem.id === action.payload.id) {
            return Object.assign({}, addedItem);
          }
          return cartItem;
        });
        return newState;
      } else {
        return [...state, { ...action.payload }];
      }
    case actionTypes.REMOVE_FROM_CART:
      let newState1 = state.filter(
        (cartItem) => cartItem.list.id !== action.payload.id
      );
      return newState1;
    default:
      return state;
  }
}
