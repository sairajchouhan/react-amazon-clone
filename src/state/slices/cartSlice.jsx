import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    ADD_TO_CART: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { ADD_TO_CART } = cartSlice.actions;
export const selectCart = (state) => state.cart;

export default cartSlice.reducer;
