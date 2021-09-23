import React from 'react';
import {useSelector} from "react-redux"
import { useDispatch } from 'react-redux'
import {bindActionCreators} from "redux";
import {ActionCreators} from "./state"
import {State} from "./state/cartReducer"
import Menu from "./components/Menu"
import Background from './components/Background';
import Shoe from './components/Shoe';
import ShoeContainer from './components/ShoeContainer';
import Cart from "./components/Cart";

function App() {
  const state = useSelector((state: State)=>state);
  const dispatch = useDispatch();
const {addToCard, deleteFromCart } = bindActionCreators(ActionCreators, dispatch);


  return (
    <div className="App">
      <Menu />
      <Background/>
      <ShoeContainer>
        <Shoe/>
        <Shoe/>
        <Shoe/>
        <Shoe/>
        <Shoe/>
        <Shoe/>
        <Shoe/>
        <Shoe/>
        <Shoe/>
      </ShoeContainer>
      <Cart />
    </div>
  );
}

export default App;
