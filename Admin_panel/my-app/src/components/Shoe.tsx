import React from "react";

interface ISHOE{
    image:string;
    price:number;
    currency: string;
    color:string;
    instock: boolean;
    description: string;
    sizes: [number, boolean];
}


function Shoe() {
    return (
        <div className="shoe">
       <div className="shoe--image"><img src={""} alt="shoe"/></div>
       <div className="shoe--desc"></div>  {/* description here */}
       <div className="price"></div>  {/*price and currency here */}
        </div>
    )
  }
  
  export default Shoe;
  