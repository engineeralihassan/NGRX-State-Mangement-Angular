
import { createAction,props } from "@ngrx/store";
import { Data } from "../master.service";
export const increment =createAction('increment');
export const decrement =createAction('decrement');
export const reset =createAction('reset');
export const customeincrement= createAction('customeincrement', props<{value:number,action:string}>());

export const endloading = createAction('endloading',props<{data:any}>());
