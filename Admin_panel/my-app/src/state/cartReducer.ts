import * as actions from "./ActionTypes"


interface ACTIONS{
    type:string;
    payload:{
      id?:number;
      description:string;
      z?:number | string;
    }
  }
  
  
  let idt =1;
  let init = [{
    id:0,
    description:""
  }];
//reducer
export const cartCount =(state: Array<{id?:number;
    description:string;}> = init, action:ACTIONS) =>{
  switch(action.type){
  case actions.CART_ADDED:
    return [
      ...state,
      {
        id: idt++,
        description: action.payload.description,
        gdgdgd:action.payload.z? +2: "no z",
      }
    ]
  case actions.CART_DELETED:
    return state.filter((item) => item.id!==action.payload.id)
    default:
    return state
  }
  
  }
  export type State = ReturnType<typeof cartCount>