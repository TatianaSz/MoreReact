import * as actions from "./ActionTypes"
import StoreData from "./../storeData";





interface ACTIONS{
    type:string;
    payload:{
      color: string;
      description: string;
      size:string;
      stock:number;
    }
  }
  
 // let init = [{blue: {...StoreData.blue.sizes}, green:{...StoreData.green.sizes}, red:{...StoreData.red.sizes}, purple:{...StoreData.purple.sizes}}]
 
//reducer
export const cartCount =(state:any , action:ACTIONS) =>{
  switch(action.type){
  case actions.CART_ADDED:
    switch(action.payload.color){
      
      case "blue":
        return [...state, {"blue": {...StoreData.blue.sizes, [action.payload.size]: action.payload.stock }, "green":{...StoreData.green.sizes}, "red":{...StoreData.red.sizes}, "purple":{...StoreData.purple.sizes}, }]
      case "green":
         return [...state,{blue: {...StoreData.blue.sizes }, green:{...StoreData.green.sizes, [action.payload.size]: action.payload.stock}, red:{...StoreData.red.sizes}, purple:{...StoreData.purple.sizes}}]
      case "purple":
        return [...state,{blue: {...StoreData.blue.sizes, }, green:{...StoreData.green.sizes}, red:{...StoreData.red.sizes}, purple:{...StoreData.purple.sizes,[action.payload.size]: action.payload.stock }}]
      case "red":
          return [...state,{blue: {...StoreData.blue.sizes,}, green:{...StoreData.green.sizes}, red:{...StoreData.red.sizes,[action.payload.size]: action.payload.stock }, purple:{...StoreData.purple.sizes}}]
      }
      break;
    
  case actions.CART_DELETED:
    return state
    default:
    return state
  }
  
  }
  export type State = ReturnType<typeof cartCount>