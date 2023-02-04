import * as actionTypes from "./actionTypes";
import axios from "axios";
export function getBrandsList(brands) {
  return {
    type: actionTypes.BRANDS_NAME,
    payload: brands,
  };
}
export function getBrands(name) {
  return async (dispatch) => {
    let url = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${name}`;

    return await axios
      .get(url)
      .then((result) => dispatch(getBrandsList(result.data)));
  };
}
