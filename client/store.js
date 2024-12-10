import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import restaurantReducer from "./slices/restaurantSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,       // Use the reducer property from cartSlice
    restaurant: restaurantReducer, // Use the reducer property from restaurantSlice
  },
});
