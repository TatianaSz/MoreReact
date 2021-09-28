import React from "react";
import {useForm} from "react-hook-form"
import { useDispatch } from 'react-redux';
import {bindActionCreators} from "redux";
import {ActionCreators} from "../state"
import {useSelector} from "react-redux";
import {State} from "./../state/cartReducer";

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
    const {register,  handleSubmit} = useForm<Values>();
    const dispatch = useDispatch();
    const {addToCard} = bindActionCreators(ActionCreators, dispatch);
    const state = useSelector((state: State)=>state);

     if(props.menu===0){

    return (
        <div className="shoe option" data-id={props.id} onClick={props.onClick}>
       <div className="shoe--image option" data-id={props.id}><img src={props.prop.image} alt="shoe" data-id={props.id} className="option"/></div>
       <div className="shoe--desc option" data-id={props.id}>{props.prop.description}</div>  {/* description here */}
       <div className="price option" data-id={props.id}>{props.prop.price} {props.prop.currency}</div>  {/*price and currency here */}
        </div>
    )
    }
    else if(props.menu===props.id){
       let findItem = state.prod.find((item:any)=>item.color === props.prop.color)
     //  console.log(findItem.sizes["37"])
        return (
            <div className="shoe--add">
                <div className="" data-id={props.id}><img src={props.prop.image} alt="shoe" /></div>
                <div>
                <div className="shoe--desc ">{props.prop.description}</div>  
                <div className="price ">{props.prop.price} {props.prop.currency}</div>  
                <form onSubmit={handleSubmit((data)=>{addToCard(props.prop.description, props.prop.color, data.size)})}>

                <label>Size:
                <select {...register("size")} id="size">
                <option disabled={findItem.sizes["37"]===0} value="37">{findItem.sizes["37"]!==0?`37  in stock: ${findItem.sizes["37"]}`: "37 sold out" }</option>
                <option disabled={findItem.sizes["38"]===0} value="38">{findItem.sizes["38"]!==0?`38  in stock: ${findItem.sizes["38"]}`: "38 sold out" }</option>
                <option disabled={findItem.sizes["39"]===0} value="39">{findItem.sizes["39"]!==0?`39  in stock: ${findItem.sizes["39"]}`: "39 sold out" }</option>
                <option disabled={findItem.sizes["40"]===0} value="40">{findItem.sizes["40"]!==0?`40  in stock: ${findItem.sizes["40"]}`: "40 sold out" }</option>
                </select> 
                </label>
                <br/>
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
  