import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:'cart',
    initialState:{items:[]},
    reducers:{
        addToCart:(state,action)=>{
                // console.log("Cart action:", action.payload);
                const exisitingItems=state.items.find((item)=>item.id === action.payload.id);
                if(exisitingItems){
                    exisitingItems.quantity +=1;
                }
                else{
                    state.items.push({...action.payload,quantity:1});
                }
                //   console.log("Cart items:", state.items);
        },
        increment:(state,action)=>{
            const item=state.items.find((item)=>item.id === action.payload);
            if(item) item.quantity+=1  
        },
        decrement:(state,action)=>{
            const item=state.items.find((item)=>item.id ===action.payload);
            if(item && item.quantity >1) {
                item.quantity-=1;
            }
            else{
                state.items=state.items.filter((item)=>item.id !== action.payload)
            }
        },
        removeFromCart:(state,action)=>{
             state.items = state.items.filter((item) => item.id !== action.payload);
        }

    }
})

export const {addToCart,increment,decrement,removeFromCart }=cartSlice.actions;
export default cartSlice.reducer;