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
let clickOption = e.target.getAttribute('class')
if(clickOption.includes("option")){
  setMenu(e.target.dataset.id)
}
else if(e.target.getAttribute('id')){
  setMenu(parseInt(e.target.getAttribute('id')))
}
console.log(e.target.dataset.id)

}


  return (
    <div className="App">
      <Menu onClick={pageView}/>
      <Background menu={menu}/>
      <ShoeContainer menu={menu}>
        <Shoe menu={menu} onClick={pageView} id={10} image={StoreData.blue.image} price={StoreData.blue.price} currency={"$"} description={StoreData.blue.description} />
        <Shoe menu={menu} onClick={pageView} id={11} image={StoreData.green.image} price={StoreData.green.price} currency={"$"} description={StoreData.green.description}/>
        <Shoe menu={menu} onClick={pageView} id={12} image={StoreData.purple.image} price={StoreData.purple.price} currency={"$"} description={StoreData.purple.description}/>
        <Shoe menu={menu} onClick={pageView} id={13} image={StoreData.red.image} price={StoreData.red.price} currency={"$"} description={StoreData.red.description}/>
        <Shoe menu={menu} onClick={pageView} id={14} image={StoreData.blue.image} price={StoreData.blue.price} currency={"$"} description={StoreData.blue.description}/>
        <Shoe menu={menu} onClick={pageView} id={15} image={StoreData.green.image} price={StoreData.green.price} currency={"$"} description={StoreData.green.description}/>
        <Shoe menu={menu} onClick={pageView} id={16} image={StoreData.purple.image} price={StoreData.purple.price} currency={"$"} description={StoreData.purple.description}/>
        <Shoe menu={menu} onClick={pageView} id={17} image={StoreData.red.image} price={StoreData.red.price} currency={"$"} description={StoreData.red.description}/>
        <Shoe menu={menu} onClick={pageView} id={18} image={StoreData.blue.image} price={StoreData.blue.price} currency={"$"} description={StoreData.blue.description}/>
      </ShoeContainer>
      <Cart />
    </div>
  );
}

export default App;
