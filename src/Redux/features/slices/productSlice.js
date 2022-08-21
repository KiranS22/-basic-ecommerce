import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get("https://fakestoreapi.com/products");

    return response.data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    isLoading: true,
    filteredProducts: [],
  },

  reducers: {
    filterSearch: (state, action) => {
      state.filteredProducts = state.products.filter((item) =>
        item.title.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.isLoading = false;

      state.products = action.payload;
      state.filteredProducts = action.payload;
    });

    builder.addCase(fetchProducts.rejected, (state) => {
      state.isLoading = true;
    });
  },
});

export const selectFilteredProducts = (state) =>
  state.products.filteredProducts;
export const { filterSearch } = productSlice.actions;

export default productSlice.reducer;
