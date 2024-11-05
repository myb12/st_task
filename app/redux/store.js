import { configureStore } from "@reduxjs/toolkit";
import productSlicer from "./slices/productSlice";
import cartSlicer from "./slices/cartSlice";

export default configureStore({
  reducer: {
    products: productSlicer,
    cart: cartSlicer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
