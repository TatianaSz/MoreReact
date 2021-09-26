import React from "react";

interface ISHOE{
    image:string;
    id:number;
    menu?:number;
    onClick: (e:any)=>void;
    price:number;
    currency: string;
    color?:string;
    instock?: boolean;
    description: string;
    sizes?: [number, boolean];
}


function Shoe(props:ISHOE){
     if(props.menu==0){
    return (
        <div className="shoe option" data-id={props.id} onClick={props.onClick}>
       <div className="shoe--image option" data-id={props.id}><img src={props.image} alt="shoe" data-id={props.id} className="option"/></div>
       <div className="shoe--desc option" data-id={props.id}>{props.description}</div>  {/* description here */}
       <div className="price option" data-id={props.id}>{props.price} {props.currency}</div>  {/*price and currency here */}
        </div>
    )
    }
    else if(props.menu==props.id){
        return (
            <div className="shoe--add">
                 <div className="" data-id={props.id}><img src={props.image} alt="shoe" /></div>
            </div>
        )
    }
    else{
        return null
    }
  }
  
  export default Shoe;
  