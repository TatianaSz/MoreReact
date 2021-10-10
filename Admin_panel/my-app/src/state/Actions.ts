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

  export function deleteFromCart(color?:string, size?:string){
    return (dispatch:Dispatch)=>{
        dispatch({
            type:actions.CART_DELETED,
            payload:{
                color:color,
                size:size,
                }
        })
    }
    }


    export function increaseCart(color?:string, size?:string){
        return (dispatch:Dispatch)=>{
            dispatch({
                type:actions.CART_INCREASE,
                payload:{
                    color:color,
                    size:size,
                    }
            })
        }
        }


        export function decreaseCart(color?:string, size?:string){
            return (dispatch:Dispatch)=>{
                dispatch({
                    type:actions.CART_DECREASE,
                    payload:{
                        color:color,
                        size:size,
                        }
                })
            }
            }