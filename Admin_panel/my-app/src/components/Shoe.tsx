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
       
        </div>
    )
  }
  
  export default Shoe;
  