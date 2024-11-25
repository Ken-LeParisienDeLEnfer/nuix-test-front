import { configureStore } from '@reduxjs/toolkit';
import { api } from 'services/api';
import itemsReducer from 'store/slices/itemsSlice';

export const store = configureStore({
  reducer: {
    items: itemsReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});