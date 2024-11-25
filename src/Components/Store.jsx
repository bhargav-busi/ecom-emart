import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Cartslice";
import productReducer from "./ProductSlice";

const Store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
  },
});

export default Store;
