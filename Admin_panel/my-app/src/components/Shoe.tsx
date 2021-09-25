import React from "react";

interface ISHOE{
    image:string;
    onClick?: (e:any)=>void;
    price:number;
    currency: string;
    color?:string;
    instock?: boolean;
    description: string;
    sizes?: [number, boolean];
}


function Shoe(props:ISHOE) {
    return (
        <div className="shoe option" onClick={props.onClick}>
       <div className="shoe--image option"><img src={props.image} alt="shoe" className="option"/></div>
       <div className="shoe--desc option">{props.description}</div>  {/* description here */}
       <div className="price option">{props.price} {props.currency}</div>  {/*price and currency here */}
        </div>
    )
  }
  
  export default Shoe;
  