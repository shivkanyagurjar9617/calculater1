import { DIVIDE, MULTIPAL,PLUS,MINUS } from "./constent"

export const divideCreator = (amount)=>{
    return{
        
            type : DIVIDE,
            amount:amount
        
    }
}
export const multipalCreator = (amount)=>{
    return{
        type : MULTIPAL,
        amount:amount
    }
}
export const plusCreator = (amount)=>{
    return{
        type : PLUS,
        amount:amount
    }
}
export const minusCreator =(amount)=>{
    return{
        type:MINUS,
        amount:amount
    }
}