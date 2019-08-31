import { combineReducers } from "redux";
import productosReducer from "./productosReducer";
//import ventasReducer from "./ventasReducer";

import errorReducer from './errorReducer';
import authReducer from './authReducer';

export default combineReducers({
  productos: productosReducer,
  errors: errorReducer,
    auth: authReducer
});
