import * as actions from "./ActionTypes"


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
}


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
    
      }
    ]
  case actions.CART_DELETED:
    return state.filter((item) => item.id!==action.payload.id)
    default:
    return state
  }
  
  }
  export type State = ReturnType<typeof cartCount>