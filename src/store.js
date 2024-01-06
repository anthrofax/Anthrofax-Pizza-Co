import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/user/userSlice.js';
import cartRedcuer from './features/cart/cartSlice.js';

export default configureStore({
  reducer: {
    user: userReducer,
    cart: cartRedcuer,
  },
});
