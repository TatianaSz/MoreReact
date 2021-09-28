import * as actions from "./ActionTypes"
import { Dispatch } from "redux"



 export function addToCard(desc:string, color:string, size:string,){
return (dispatch:Dispatch)=>{
    dispatch({
        type:actions.CART_ADDED,
        payload:{
        description:desc,
        color:color,
        size:size,
        }
    })
}
}

  export function deleteFromCart(desc:string){
    return (dispatch:Dispatch)=>{
        dispatch({
            type:actions.CART_DELETED,
            payload:{
                description:desc,
                }
        })
    }
    }