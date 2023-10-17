import { increment,decrement, reset, customeincrement } from "./counter.actions";
import { initialSate } from "./counter.state";

import { createReducer, on } from "@ngrx/store";
let _counterReducer=createReducer(initialSate,on(increment,(state)=>{
return {...state,counter:state.counter+1}
}),
on(decrement,(state)=>{
    return {...state,counter:state.counter-1}
    }),
    on(reset,(state)=>{
        return {...state,counter:0}
        }),
        on(customeincrement,(state)=>{
            return {...state,counter:state.counter}
            }),




 
)

export function counterReducer(state:any,action:any){
return  _counterReducer(state,action);
}