import React from "react";
import {useForm} from "react-hook-form"

interface ISHOE{
    prop:{image: string;
        gender: string;
        price: number;
        currency: string;
        color: string;
        description: string;
        sizes: {
            "37": number;
            "38": number;
            "39": number;
            "40": number;
        };
    }
    id:number;
    menu?:number;
    onClick: (e:any)=>void;
    instock?: boolean;
}

type Values ={
    size: string;
}

function Shoe(props:ISHOE){
    const {register, watch, handleSubmit} = useForm<Values>();
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
      
   //  console.log(watch())
        return (
            <div className="shoe--add">
                <div className="" data-id={props.id}><img src={props.prop.image} alt="shoe" /></div>
                <div>
                <div className="shoe--desc ">{props.prop.description}</div>  
                <div className="price ">{props.prop.price} {props.prop.currency}</div>  
                <form onSubmit={handleSubmit((data)=>{console.log(data)})}>

                <label>Size:
                <select {...register("size")} id="size">
                <option value="37">{props.prop.sizes["37"]!==0?`37  in stock: ${props.prop.sizes["37"]}`: "37 sold out" }</option>
                <option value="38">{props.prop.sizes["38"]!==0?`38  in stock: ${props.prop.sizes["38"]}`: "38 sold out" }</option>
                <option value="39">{props.prop.sizes["39"]!==0?`39  in stock: ${props.prop.sizes["39"]}`: "39 sold out" }</option>
                <option value="40">{props.prop.sizes["40"]!==0?`40  in stock: ${props.prop.sizes["40"]}`: "40 sold out" }</option>
                </select> 
                </label>
                <input type="submit" value="Add to cart"/>
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
  