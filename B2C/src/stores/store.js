// store.js

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../stores/CartSlice"

const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});

// console.log("STORE CREATED",store);

export default store;