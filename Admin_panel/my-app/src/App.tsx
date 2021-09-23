import React from 'react';
import {useSelector} from "react-redux"
import { useDispatch } from 'react-redux'
import {bindActionCreators} from "redux";
import {ActionCreators} from "./state"
import {State} from "./state/cartReducer"

function App() {
  const state = useSelector((state: State)=>state);
  const dispatch = useDispatch();
const {addToCard, deleteFromCart } = bindActionCreators(ActionCreators, dispatch)
console.log(state)

  return (
    <div className="App">
     <h3></h3>
     <button onClick={()=>addToCard("Hi",1)}>Add</button>
     <button onClick={()=>deleteFromCart("")}>Delete</button>
    </div>
  );
}

export default App;
