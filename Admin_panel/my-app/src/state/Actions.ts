import * as actions from "./ActionTypes"
import { Dispatch } from "redux"


 export function addToCard(desc:string){
return (dispatch:Dispatch)=>{
    dispatch({
        type:actions.CART_ADDED,
        payload:{
        description:desc,
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