// // If product already exists in the cart or not.
// // If it exists, increment its quantity
// // else push that product
// // find method
// //find method will return the item which satisfies the condition.
//

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
      // console.log(" I am action.payload " + action.payload);
      // console.log("AddToCart Action");

      if (state.cart.find((item) => item.id === action.payload.id)) {
        state.cart = state.cart.map((item) => {
          if (item.id === action.payload.id) {
            //Increment the quantity
            return item.quantity++;
          } else {
            return item;

            //return object
          }
        });
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
      state.cartCount++;
      // console.log('I am state.cart from cartSlice',state.cart);

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
export const selectCartCount = (state) => state.cart.cartCount;
export const selectCart = (state) => state.cart.cart;
export const selectCartTotal = (state) => state.cart.cartTotal;

export default cartSlice.reducer;
