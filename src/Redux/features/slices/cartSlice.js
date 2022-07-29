  

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    cartCount: 0,
    cartTotal: 0,
  },
  reducers: {
    addToCart: (state, action) => {
       console.log(" I am action.payload " , action.payload);
      // console.log("AddToCart Action");
      let item = state.cart.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity = item.quantity + 1 ;
      } else {
        state.cart.push({...action.payload, quantity: 1 });
      }
      state.cartCount++;
      //console.log('I am state.cart from cartSlice', state.cart);
      //else push product in cart arr.
    },
    deleteFromCart: (state, action) => {
      state.cart = state.cart.filter((cItem) => {
        if (cItem.id === action.payload.id) {
          state.cartCount = state.cartCount - cItem.quantity;
        }
        return cItem.id !== action.payload.id;
      });

      //set cartCount tp cartCount - quantity
    },
  },
});

export const { addToCart, deleteFromCart } = cartSlice.actions;
export const selectCartCount = (state) =>  state.cart.cartCount;
export const selectCart = (state) => {
  //console.log(state.cart.cart)
  return state.cart.cart
} ;
export const selectCartTotal = (state) => state.cart.cartTotal;

export default cartSlice.reducer;
