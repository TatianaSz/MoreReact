import * as actions from "./ActionTypes"
import StoreData from "./../storeData";
import { isTemplateExpression } from "typescript";





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
 let init = {
   prod:[
     {...StoreData.blue},
     {...StoreData.green},
     {...StoreData.purple},
     {...StoreData.red}
   ],
   cart:[],
 }

//console.log(init)
//reducer
export const cartCount =(state:any=init , action:ACTIONS) =>{
  switch(action.type){
  case actions.CART_ADDED:
 let addedProd  = state.prod.find((item:any) =>item.color === action.payload.color) //whole chosen product
 let chosenSize = Object.keys(addedProd.sizes).find((siz:any)=>siz ===action.payload.size)! //chosen size
let qty = addedProd.sizes[chosenSize] // amount of chosen sizes
let isInCart = state.cart.find((item:any) =>(item.color===action.payload.color && item.sizes ===action.payload.size)) //checking if item in cart has the same color and size

    return {...state, 
      prod: state.prod.map((item:any)=> item.color ===action.payload.color?{...item, sizes:{...item.sizes, [chosenSize]:qty-1}}:item), 
      cart: isInCart ? state.cart.map((item:any)=>(item.color===action.payload.color && item.sizes ===action.payload.size)?{...item, qty: item.qty +1,}:item) : [...state.cart, {...addedProd, sizes:action.payload.size, qty:1 } ]
    }
    
  case actions.CART_DELETED:
    return state
    default:
    return state
  }
  
  }
  export type State = ReturnType<typeof cartCount>