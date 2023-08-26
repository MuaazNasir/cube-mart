import { createSlice } from "@reduxjs/toolkit";

const CartProductsSlice = createSlice({
    name: "CartProducts",
    initialState: [],
    reducers: {
        addProduct: (state:any, action) => {
            state.push(...action.payload)
        },
        deleteProduct : (state:any,action) => {
            state = state.filter((item:any)=>{
                return item != action.payload
            })
            return state
        }
    }
});

export const { addProduct, deleteProduct } = CartProductsSlice.actions;

export default CartProductsSlice.reducer;