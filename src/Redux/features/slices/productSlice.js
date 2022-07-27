import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// First, create the thunk
export const fetchProducts = createAsyncThunk("products/fetchProducts", async () => {
  const response = await axios.get("https://fakestoreapi.com/products");

  return response.data;
});

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    isLoading: true,
    filteredProducts: [],
  },

  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;

      state.products = action.payload;
      console.log( 'this is origional products ' + state.products);
      state.filteredProducts = action.payload;
      console.log( 'this is filtered products '+ state.filteredProducts);
    });

    builder.addCase(fetchProducts.rejected, (state) => {
      state.isLoading = true;
      console.log("Data has been rejected");
    });
  },
});

 export const selectFilteredProducts = state => state.products.filteredProducts
export const {} = productSlice.actions;

export default productSlice.reducer;
