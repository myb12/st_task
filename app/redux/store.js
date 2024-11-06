import { configureStore } from "@reduxjs/toolkit";
import productSlicer from "./slices/productSlice";
import cartSlicer from "./slices/cartSlice";
import wishListSlice from "./slices/wishListSlice";

export default configureStore({
  reducer: {
    products: productSlicer,
    cart: cartSlicer,
    wishList: wishListSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
