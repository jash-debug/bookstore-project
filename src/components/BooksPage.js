import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BookList from './BookList';
import AddBookForm from './AddBook';
import { getAllBooks } from '../redux/books/BooksSlice';

const Books = () => {
  const { books, isLoading } = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const booksArray = Object.keys(books);
  useEffect(() => {
    dispatch(getAllBooks());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div>
      <BookList allBooks={booksArray} />
      <AddBookForm />
    </div>
  );
};
export default Books;
