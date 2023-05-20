import { configureStore, combineReducers } from '@reduxjs/toolkit';
import booksReducer from './books/BooksSlice';
import categoriesReducer from './categories/CategoriesSlice';

const rootReducer = combineReducers({
  books: booksReducer,
  categories: categoriesReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
