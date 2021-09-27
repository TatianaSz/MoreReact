import React from "react";
import {useForm} from "react-hook-form"
import { useDispatch } from 'react-redux';
import {bindActionCreators} from "redux";
import {ActionCreators} from "../state"

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
    const dispatch = useDispatch();
    const {addToCard} = bindActionCreators(ActionCreators, dispatch);
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
                <form onSubmit={handleSubmit((data)=>{console.log(data); addToCard(props.prop.description)})}>

                <label>Size:
                <select {...register("size")} id="size">
                <option disabled={props.prop.sizes["37"]===0} value="37">{props.prop.sizes["37"]!==0?`37  in stock: ${props.prop.sizes["37"]}`: "37 sold out" }</option>
                <option disabled={props.prop.sizes["38"]===0} value="38">{props.prop.sizes["38"]!==0?`38  in stock: ${props.prop.sizes["38"]}`: "38 sold out" }</option>
                <option disabled={props.prop.sizes["39"]===0} value="39">{props.prop.sizes["39"]!==0?`39  in stock: ${props.prop.sizes["39"]}`: "39 sold out" }</option>
                <option disabled={props.prop.sizes["40"]===0} value="40">{props.prop.sizes["40"]!==0?`40  in stock: ${props.prop.sizes["40"]}`: "40 sold out" }</option>
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
  