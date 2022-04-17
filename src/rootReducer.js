import { DIVIDE, MINUS, MULTIPAL, PLUS } from "./constent";

 
    export const rootReducer = (oldState,action)=>{
    //console.log(oldState)
    let newState = oldState

        switch(action.type){
            case DIVIDE:
                newState = newState / action.amount
             break;
            case MULTIPAL:
                newState = newState *  action.amount
             break;
             case PLUS:
                newState = newState +  action.amount
             break;
             case MINUS:
                newState = newState -  action.amount
             break;
             default:

        }

    return newState;
      
    
    }