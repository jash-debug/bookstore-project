import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const Key = 'JrjZmyJeiP3IVytRkZBW';
const url = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${Key}/books/`;

export const getAllBooks = createAsyncThunk(
  'books/getAllBooks',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(url, {
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something went wrong');
    }
  },
);

export const addBook = createAsyncThunk(
  'books/addBooks',
  async (data, thunkAPI) => {
    try {
      await axios.post(url, data, {
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const deleteBook = createAsyncThunk(
  'books/deleteBook',
  async (data, thunkAPI) => {
    try {
      await axios.delete(url + data, {
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Oops! something went wrong');
    }
  },
);

const initialState = {
  books: {},
  isLoading: true,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getAllBooks.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllBooks.fulfilled, (state, action) => {
      state.isLoading = false;
      state.books = action.payload || {};
    });
    builder.addCase(addBook.fulfilled, (state, { payload }) => {
      const {
        title, author, category,
      } = payload;
      state.books = {
        ...state.books,
        [payload.item_id]: [
          {
            title,
            author,
            category,
          },
        ],
      };
    });
    builder.addCase(deleteBook.fulfilled, (state, { payload }) => {
      delete state.books[payload];
    });
  },
});

export default booksSlice.reducer;
