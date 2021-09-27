import {createStore, applyMiddleware} from "redux";
import {cartCount} from "./cartReducer"
import thunk from "redux-thunk"
import StoreData from "./../storeData";

let init = [{blue: {...StoreData.blue.sizes}, green:{...StoreData.green.sizes}, red:{...StoreData.red.sizes}, purple:{...StoreData.purple.sizes}}]

export const store = createStore(cartCount,init, applyMiddleware(thunk))