import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import userReducer from './slices/userSlice';
export default configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
  },
});
