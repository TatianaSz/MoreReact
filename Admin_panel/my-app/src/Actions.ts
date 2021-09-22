import * as actions from "./ActionTypes"

export function addToCard(desc:string | object){
return{
    type:actions.CART_ADDED,
    payload:{
        description: desc,
    }
}
}