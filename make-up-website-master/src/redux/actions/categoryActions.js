import * as actionTypes from "./actionTypes";
import axios from "axios";
export function getCategoriesSuccess(categories) {
  return {
    type: actionTypes.GET_CATEGORIES,
    payload: categories,
  };
}

export function getCategories(name) {
  return async (dispatch) => {
    // let url = `https://makeup-api.herokuapp.com/api/v1/products.json`;
    let url2 = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=${name}`;
    return await axios
      .get(url2)
      .then((result) => dispatch(getCategoriesSuccess(result.data)));
  };
}
