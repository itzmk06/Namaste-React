import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload);
        },
        removeItem:(state,action)=>{
            state.items=state.items.filter((res)=>action.payload.card.info.id!=res.card.info.id);
        },
        clearCart:(state)=>{
            state.items.length=0;
        }
    }
});

export const {addItem,removeItem,clearCart}=cartSlice.actions;
export default cartSlice.reducer;