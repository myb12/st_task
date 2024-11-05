import { createSlice } from "@reduxjs/toolkit";

const loadCartFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  }
  return [];
};

const calculateTotalQuantity = (cart) => {
  return cart.reduce((acc, cur) => acc + cur.quantity, 0);
};

export const cartSlicer = createSlice({
  name: "cart",
  initialState: {
    cart: loadCartFromLocalStorage(),
    totalQuantity: calculateTotalQuantity(loadCartFromLocalStorage()),
  },
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }

      state.totalQuantity += 1;
      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeFromCart: (state, action) => {
      const product = state.cart.find((item) => item.id === action.payload);

      if (product) {
        if (product.quantity > 1) {
          product.quantity -= 1;
          state.totalQuantity -= 1;
        } else {
          state.cart = state.cart.filter((item) => item.id !== action.payload);
          state.totalQuantity -= 1;
        }
      }

      localStorage.setItem("cart", JSON.stringify(state.cart));
    },
  },
});

export const { addToCart, removeFromCart } = cartSlicer.actions;

export default cartSlicer.reducer;
