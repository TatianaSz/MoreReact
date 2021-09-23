import {createStore, applyMiddleware} from "redux";
import {cartCount} from "./cartReducer"
import thunk from "redux-thunk"

let init = [{
    id:0,
    description:""
  }];
export const store = createStore(cartCount,init, applyMiddleware(thunk))