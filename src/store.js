import { configureStore } from '@reduxjs/toolkit';
import userSlice from './features/user/userSlice.js';

export default configureStore({
  reducer: {
    user: userSlice,
  },
});
