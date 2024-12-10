import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],//the cart slice contains an empty array called items
};

export const cartSlice = createSlice({
  name: "cart",//which identifies this slice.
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromCart: (state, action) => {
      let newCart = [...state.items];
      let itemIndex = state.items.findIndex(
        (item) => item.id == action.payload.id
      );
      if (itemIndex >= 0) {
        newCart.splice(itemIndex, 1);
      } else {
        console.log("cant remove");
      }
      state.items = newCart;
    },
    emptyCart: (state, action) => {
      state.items = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions;
export const selectCartItem = (state) => state.cart.items;
export const selectCartItemById = (state, id) =>
  state.cart.items.filter((item) => item.id == id);

export const selectCartTotal = (state) =>
  state.cart.items.reduce((total, item) => (total = total + item.price), 0);

export default cartSlice.reducer;
