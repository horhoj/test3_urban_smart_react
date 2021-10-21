import { configureStore } from '@reduxjs/toolkit';
import { appReducer } from './app';
import { authReducer } from './auth';

export const store = configureStore({
  devTools: true,
  reducer: {
    app: appReducer,
    auth: authReducer,
  },
});
