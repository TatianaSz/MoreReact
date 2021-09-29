import React from "react";
import {useSelector} from "react-redux";
import {State} from "./../state/cartReducer";
import CartItem from "./CartItem"

interface PROPS {
    menu:number;
    children: any;
  }
  interface DATA{
    image: string;
    gender: string;
    price: number;
    currency: string;
    color: string;
    description: string;
    sizes: string
}


function Cart(props:PROPS) {
    const state = useSelector((state: State)=>state);
    if(props.menu===5){
        return(
            <div>
   {state.cart.map((cartItem:DATA)=>{

            return (
                <div>
               <CartItem {...cartItem}/>
                </div> 
            )
    })}
        </div>
        )
}
    else if(props.menu!==5){
        return <div></div>
    }
    else{
        return null
    }
   
}
  
  export default Cart;
  