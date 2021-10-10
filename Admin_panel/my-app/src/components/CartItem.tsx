import React from "react";
import { useDispatch } from 'react-redux';
import {bindActionCreators} from "redux";
import {ActionCreators} from "../state"
import {useSelector} from "react-redux";
import {State} from "./../state/cartReducer";

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
    const dispatch = useDispatch();
    const {increaseCart, decreaseCart, deleteFromCart} = bindActionCreators(ActionCreators, dispatch);
    const state = useSelector((state: State)=>state);

    return (
        <div className="cart--item">
            <div className="shoe--image"><img src={props.image} alt="shoe" className="option"/></div>
            <div className="shoe--desc">{props.description}</div>  {/* description here */}
            <div className="price">{props.price} {props.currency}</div> 
        
            <button className="shoe--button" onClick={()=>decreaseCart(props.color, props.sizes)}>-</button>
            <div className="qty">{props.qty} </div>
            <div className="qty">{props.sizes} </div>
            <button className="shoe--button" onClick={()=>increaseCart(props.color, props.sizes)}>+</button>
            <button className="shoe--button__delete" onClick={()=>deleteFromCart(props.color, props.sizes)}>Delete</button>
        </div>
    )
  }
  
  export default CartItem;
  