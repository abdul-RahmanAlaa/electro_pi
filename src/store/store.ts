import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import searchReducer from './searchSlice';
import categoryReducer from './categorySlice';
import pageReducer from './pageSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    search: searchReducer,
    category: categoryReducer,
    page: pageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
