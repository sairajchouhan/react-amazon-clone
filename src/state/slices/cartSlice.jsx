import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    ADD_TO_CART: (state, action) => {
      state.push(action.payload);
    },
    REMOVE_FROM_CART: (state, action) => {
      const index = state.findIndex(
        (cartItem) => cartItem.id === action.payload
      );
      if (index >= 0) {
        state.splice(index, 1);
      } else {
        console.warn(`cannot remove product from cart`);
      }
    },
    EMPTY_CART: (state) => {
      state.splice(0, state.length);
    },
  },
});

export const { ADD_TO_CART, REMOVE_FROM_CART, EMPTY_CART } = cartSlice.actions;
export const selectCart = (state) => state.cart;

export default cartSlice.reducer;
