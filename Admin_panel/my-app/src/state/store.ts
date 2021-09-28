import {createStore, applyMiddleware} from "redux";
import {cartCount} from "./cartReducer"
import thunk from "redux-thunk"
import StoreData from "./../storeData";

let init = {
  prod:[
    {...StoreData.blue},
    {...StoreData.green},
    {...StoreData.purple},
    {...StoreData.red}
  ],
  cart:[],
}

export const store = createStore(cartCount,init, applyMiddleware(thunk))