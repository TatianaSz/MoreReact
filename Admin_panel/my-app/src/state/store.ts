import {createStore} from "redux";
import {cartCount} from "./cartReducer"



export const store = createStore(cartCount,[])