import { createSlice } from "@reduxjs/toolkit";
const initialState ={
    count:0
}
const counterSlice = createSlice({
    name:'count',
    initialState,
    reducers:{
        increment:(state,{payload})=>{
            state.count = state.count + Number(payload.incr);
        },
        decrement:(state,{payload})=>{
            state.count -= payload.decr;
        }
    }
})
export const act = counterSlice.actions
// console.log(act)
export default counterSlice.reducer