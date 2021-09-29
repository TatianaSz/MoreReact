import React from "react";
import {useSelector} from "react-redux";
import {State} from "./../state/cartReducer";
import CartItem from "./CartItem"

interface Props {
    menu:number;
    children: any;
  }

function Cart(props:Props) {
    const state = useSelector((state: State)=>state);
    if(props.menu===5){
        return(
            <div>
   {state.cart.map((cartItem:any)=>{
        
            return (
                <div>
               <CartItem/>
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
        return (<div></div>)
    }
   
}
  
  export default Cart;
  