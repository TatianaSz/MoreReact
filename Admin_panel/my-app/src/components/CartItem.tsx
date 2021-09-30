import React from "react";


interface DATA{
    image: string;
    gender: string;
    price: number;
    currency: string;
    color: string;
    description: string;
    sizes: string;
    qty:number;
}

function CartItem(props:DATA) {
    return (
        <div className="cart--item">
            <div className="shoe--image"><img src={props.image} alt="shoe" className="option"/></div>
            <div className="shoe--desc">{props.description}</div>  {/* description here */}
            <div className="price">{props.price} {props.currency}</div> 
            <div className="qty">{props.qty} </div>
        </div>
    )
  }
  
  export default CartItem;
  