import React from 'react';
import { useSelector } from 'react-redux';
import BookList from './BookList';
import AddBookForm from './AddBook';

const Books = () => {
  const books = useSelector((state) => state.books);
  return (
    <div>
      <BookList allBooks={books.books} />
      <AddBookForm />
    </div>

  );
};
export default Books;
