import * as actions from "./ActionTypes"


interface ACTIONS{
    type:string;
    payload:{
      id?:number;
      description:string;
    }
  }
  
  
  let idt =0;
  
//reducer
export const cartCount =(state: Array<{id?:number;
    description:string;}> = [], action:ACTIONS) =>{
  switch(action.type){
  case actions.CART_ADDED:
    return [
      ...state,
      {
        id: idt++,
        description: action.payload.description,
      }
    ]
  case actions.CART_DELETED:
    return state.filter((item) => item.id!==action.payload.id)
    default:
    return state
  }
  
  }
  