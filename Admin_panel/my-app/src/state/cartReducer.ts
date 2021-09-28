import * as actions from "./ActionTypes"
import StoreData from "./../storeData";



interface ACTIONS{
    type:string;
    payload:{
      color: string;
      description: string;
      size:string;
    }
  }
  
type STATE = {
prod: {
  image: string;
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
  }}[];
cart: {
  image: string;
  gender: string;
  price: number;
  currency: string;
  color: string;
  description: string;
  sizes: string
}[];
}
 
 let init = {
   prod:[
     {...StoreData.blue},
     {...StoreData.green},
     {...StoreData.purple},
     {...StoreData.red}
   ],
   cart:[],
 }


//reducer
export const cartCount =(state:STATE=init , action:ACTIONS) =>{
  switch(action.type){
   case actions.CART_ADDED:
   let addedProd  = state.prod.find((item:any) =>item.color === action.payload.color) //whole chosen product
   let chosenSize = Object.keys(addedProd!.sizes!).find((siz:any)=>siz ===action.payload.size)! as keyof typeof addedProd //chosen size
   let qty = addedProd!.sizes[chosenSize] // amount of chosen sizes
   let isInCart = state.cart.find((item:any) =>(item.color===action.payload.color && item.sizes ===action.payload.size)) //checking if item in cart has the same color and size

    return {...state, 
      prod: state.prod.map((item:any)=> item.color ===action.payload.color?{...item, sizes:{...item.sizes, [chosenSize]:(qty-1)>0?(qty-1):0}}:item), 
      cart: isInCart ? state.cart.map((item:any)=>(item.color===action.payload.color && item.sizes ===action.payload.size &&qty>0)?
      {...item, qty: item.qty +1,}:item) : [...state.cart, {...addedProd, sizes:action.payload.size, qty:1 } ]
    }
    
  case actions.CART_DELETED:
    return state
    default:
    return state
  }
  
  }
  export type State = ReturnType<typeof cartCount>