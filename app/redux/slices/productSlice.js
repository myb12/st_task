import { api } from "@/app/utils/api";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProductBySlug = createAsyncThunk(
  "products/fetchProductBySlug",
  async (slug) => {
    const response = await api.get(`/products/${slug}`);
    return response.data.data;
  }
);

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (limit = 10) => {
    const response = await api.get(`/product?limit=${limit}`);

    return response.data.products;
  }
);

export const productSlicer = createSlice({
  name: "products",

  initialState: {
    allProducts: [],
    productBySlug: null,
  },

  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, { payload }) => {
      state.allProducts = payload;
    });

    builder.addCase(fetchProductBySlug.fulfilled, (state, { payload }) => {
      state.productBySlug = payload;
    });
  },
});

export const { actions } = productSlicer;

export default productSlicer.reducer;
