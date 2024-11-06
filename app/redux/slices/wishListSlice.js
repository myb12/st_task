import { createSlice } from "@reduxjs/toolkit";

const loadWishListFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const storedWishList = localStorage.getItem("wishlist");
    return storedWishList ? JSON.parse(storedWishList) : [];
  }
  return [];
};

export const wishListSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishList: loadWishListFromLocalStorage(),
  },
  reducers: {
    addToWishlist: (state, action) => {
      const existingProduct = state.wishList.find(
        (item) => item.id === action.payload.id
      );

      if (!existingProduct) {
        state.wishList.push(action.payload);
      }

      localStorage.setItem("wishlist", JSON.stringify(state.wishList));
    },
    removeFromWishlist: (state, action) => {
      state.wishList = state.wishList.filter(
        (item) => item.id !== action.payload
      );

      localStorage.setItem("wishlist", JSON.stringify(state.wishList));
    },
    toggleWishlist: (state, action) => {
      const existingProduct = state.wishList.find(
        (item) => item.id === action.payload.id
      );

      if (existingProduct) {
        state.wishList = state.wishList.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        state.wishList.push(action.payload);
      }

      localStorage.setItem("wishlist", JSON.stringify(state.wishList));
    },
  },
});

export const { addToWishlist, removeFromWishlist, toggleWishlist } =
  wishListSlice.actions;

export default wishListSlice.reducer;
