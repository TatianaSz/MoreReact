import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from "redux";
import * as actions from "./ActionTypes"

interface ACTIONS{
  type:string;
  payload:{
    id?:number;
    description:string;
  }
}


let idt =0;
//reducer
const cartCount =(state: Array<{id?:number;
  description:string;}> = [], action:ACTIONS) =>{
switch(action.type){
case actions.CART_ADDED:
  return [
    ...state,
    {
      id: idt++,
      description: action.payload.description,
    }
  ]
case actions.CART_DELETED:
  return state.filter((item) => item.id!==action.payload.id)
  default:
  return state
}

}


const store = createStore(cartCount)


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
