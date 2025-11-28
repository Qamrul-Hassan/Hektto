// src/features/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Initial state of the cart
const initialState = {
  items: [], // Array to hold products in the cart
};

// Create the cart slice
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Add item to cart
    addToCart: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        // If the item already exists in the cart, increase its quantity
        existingItem.quantity += 1;
      } else {
        // If the item does not exist in the cart, add it
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    // Remove item from cart
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
    // Update quantity (for double-click action)
    increaseQuantity: (state, action) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      }
    },
    // Remove all items from the cart
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
