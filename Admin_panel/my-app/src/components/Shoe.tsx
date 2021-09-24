import React from "react";

interface ISHOE{
    image:string;
    price:number;
    currency: string;
    color?:string;
    instock?: boolean;
    description: string;
    sizes?: [number, boolean];
}


function Shoe(props:ISHOE) {
    return (
        <div className="shoe">
       <div className="shoe--image"><img src={props.image} alt="shoe"/></div>
       <div className="shoe--desc">{props.description}</div>  {/* description here */}
       <div className="price">{props.price} {props.currency}</div>  {/*price and currency here */}
        </div>
    )
  }
  
  export default Shoe;
  