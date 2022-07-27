import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState:{
    cart:[],
    cartCount:0,
    cartTotal:0
  },
  reducers: {}
});

export const {} = cartSlice.actions
export const selectCartCount = state => state.cart.cartCount;
export const seletCart = state => state.cart.cart;
export const selectCartTotal = state => state.cart.cartTotal;           

export default cartSlice.reducer