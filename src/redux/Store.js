import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/BooksSlice';
import categoriesReducer from './categories/CategoriesSlice';

const store = configureStore({
  reducer: {
    books: booksReducer,
    category: categoriesReducer,
  },
});

export default store;
