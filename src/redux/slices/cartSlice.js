import {createSlice, createSelector} from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"Cart",
    initialState:[],
    reducers:{
        addItem:(state, action)=>{
            state.push(action.payload);
        },
        subItem:(state, action)=>{
            state.pop(action.payload);
        }
    }
});

export const getItemsSelector=createSelector(
    (state)=> state.cart, // cart from store
    state=> state
);

export const {addItem,subItem} = cartSlice.actions;


export default cartSlice.reducer;