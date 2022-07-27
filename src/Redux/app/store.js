import { configureStore } from '@reduxjs/toolkit'
import productsReducer from '../../Redux/features/slices/productSlice'
import cartReducer from './../../Redux/features/slices/cartSlice'
export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer

  },
})