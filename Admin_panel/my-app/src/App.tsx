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
import Contact from './components/Contact';
import Men from './components/Men';
import Women from './components/Women';

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
}

//id is passed as normal prop since i have repetetive placeholder "products" 
  return (
    <div className="App">
      <Menu onClick={pageView}/>
      <Background menu={menu}/>
      <ShoeContainer menu={menu}>
        <Shoe menu={menu} onClick={pageView} id={10} prop={StoreData.blue}/> 
        <Shoe menu={menu} onClick={pageView} id={11} prop={StoreData.green}/>
        <Shoe menu={menu} onClick={pageView} id={12} prop={StoreData.purple}/>
        <Shoe menu={menu} onClick={pageView} id={13} prop={StoreData.red}/>
        <Shoe menu={menu} onClick={pageView} id={14} prop={StoreData.blue}/>
        <Shoe menu={menu} onClick={pageView} id={15} prop={StoreData.green}/>
        <Shoe menu={menu} onClick={pageView} id={16} prop={StoreData.purple}/>
        <Shoe menu={menu} onClick={pageView} id={17} prop={StoreData.red}/>
        <Shoe menu={menu} onClick={pageView} id={18} prop={StoreData.blue}/>
      </ShoeContainer>
      <Contact />
      <Women />
      <Men />
      <Cart />
    </div>
  );
}

export default App;
