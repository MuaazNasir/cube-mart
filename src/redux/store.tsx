import { configureStore } from "@reduxjs/toolkit";
import CartProductsReducer from './slices/useReducer'
import { Provider } from "react-redux";

export const Store = configureStore({
    reducer: {
        "CartProducts": CartProductsReducer
    }
})
