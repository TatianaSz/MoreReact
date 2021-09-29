import React from "react";


interface DATA{
    image: string;
    gender: string;
    price: number;
    currency: string;
    color: string;
    description: string;
    sizes: string
}

function CartItem(props:DATA) {
    return (
        <div className="cart--item">
       {props.color}
        </div>
    )
  }
  
  export default CartItem;
  