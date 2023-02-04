import { combineReducers } from "redux";
import categoryListReducer from "./categoryListReducer";
import productListReducer from "./productListReducer";
import searchProductReducer from "./searchProductReducer";
import brandsNameReducer from "./brandsNameReducer";
import cartReducer from "./cartReducer";
const rootReducer = combineReducers({
  categoryListReducer,
  productListReducer,
  searchProductReducer,
  brandsNameReducer,
  cartReducer,
});
export default rootReducer;
