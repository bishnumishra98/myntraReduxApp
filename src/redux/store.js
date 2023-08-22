import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/ProductSlice";
import cartReducer from "./slices/cartSlice";

export default configureStore({
    reducer: {
        productReducer,
        cartReducer
    }
});



