import React from "react";
import {useForm} from "react-hook-form"

interface ISHOE{
    prop:{image: string;
        gender: string;
        price: number;
        currency: string;
        color: string;
        description: string;
        sizes: (number | boolean)[];}
    id:number;
    menu?:number;
    onClick: (e:any)=>void;
    instock?: boolean;
}


function Shoe(props:ISHOE){
    console.log(props.prop?.image)
     if(props.menu==0){
    return (
        <div className="shoe option" data-id={props.id} onClick={props.onClick}>
       <div className="shoe--image option" data-id={props.id}><img src={props.prop.image} alt="shoe" data-id={props.id} className="option"/></div>
       <div className="shoe--desc option" data-id={props.id}>{props.prop.description}</div>  {/* description here */}
       <div className="price option" data-id={props.id}>{props.prop.price} {props.prop.currency}</div>  {/*price and currency here */}
        </div>
    )
    }
    else if(props.menu==props.id){
        return (
            <div className="shoe--add">
                <div className="" data-id={props.id}><img src={props.prop.image} alt="shoe" /></div>
                <div>
                <div className="shoe--desc ">{props.prop.description}</div>  
                <div className="price ">{props.prop.price} {props.prop.currency}</div>  
                <form>

                <label>Size:
                <select name="size" id="size">
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
                </select> 
                </label>

                </form>
                 </div>
            </div>
        )
    }
    else{
        return null
    }
  }
  
  export default Shoe;
  