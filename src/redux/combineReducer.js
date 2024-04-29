import {combineReducers} from "redux";
import cart from "./reducer";
import product from "./Product/productReducer";

export default combineReducers({cart,product})