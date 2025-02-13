import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice"

//configure our store

//1:29 min remaining
const appStore = configureStore({

    reducer:{
        cart : cartSlice,
    }
})

export default appStore