import React from 'react';
import {useState} from "react";
import {useSelector} from "react-redux";
import { useDispatch } from 'react-redux';
import {bindActionCreators} from "redux";
import {ActionCreators} from "./state";
import {State} from "./state/cartReducer";
import Menu from "./components/Menu";
import Background from './components/Background';
import Shoe from './components/Shoe';
import ShoeContainer from './components/ShoeContainer';
import Cart from "./components/Cart";
import StoreData from "./storeData";

function App() {
const [menu, setMenu] = useState(0);

  const state = useSelector((state: State)=>state);
  const dispatch = useDispatch();
const {addToCard, deleteFromCart } = bindActionCreators(ActionCreators, dispatch);


function pageView(e:any){
//console.log(e.target.getAttribute('class'))
if(e.target.getAttribute('class').includes("option")){
  setMenu(1)
}
}


  return (
    <div className="App">
      <Menu />
      <Background menu={menu}/>
      <ShoeContainer>
        <Shoe onClick={pageView} image={StoreData.blue.image} price={StoreData.blue.price} currency={"$"} description={StoreData.blue.description} />
        <Shoe image={StoreData.green.image} price={StoreData.green.price} currency={"$"} description={StoreData.green.description}/>
        <Shoe image={StoreData.purple.image} price={StoreData.purple.price} currency={"$"} description={StoreData.purple.description}/>
        <Shoe image={StoreData.red.image} price={StoreData.red.price} currency={"$"} description={StoreData.red.description}/>
        <Shoe image={StoreData.blue.image} price={StoreData.blue.price} currency={"$"} description={StoreData.blue.description}/>
        <Shoe image={StoreData.green.image} price={StoreData.green.price} currency={"$"} description={StoreData.green.description}/>
        <Shoe image={StoreData.purple.image} price={StoreData.purple.price} currency={"$"} description={StoreData.purple.description}/>
        <Shoe image={StoreData.red.image} price={StoreData.red.price} currency={"$"} description={StoreData.red.description}/>
        <Shoe image={StoreData.blue.image} price={StoreData.blue.price} currency={"$"} description={StoreData.blue.description}/>
      </ShoeContainer>
      <Cart />
    </div>
  );
}

export default App;
