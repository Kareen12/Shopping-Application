import { createSlice } from "@reduxjs/toolkit";

// creating the slice
// jo bhi input parameter add or remove ke andar pass hua h use payload darshata h
export const CartSlice = createSlice({
    name:"cart",
    initialState: [],
    reducers:{
        add:(state,action) => {
            state.push(action.payload);
        },
        remove: (state,action) => {
            return state.filter((item) => item.id !== action.payload);
        },
    }
});

// exporting all the functions of the slice so that other components can use them
export const{add, remove} = CartSlice.actions;
export default CartSlice.reducer;