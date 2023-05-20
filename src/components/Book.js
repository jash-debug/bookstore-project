import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/BooksSlice';

const BookItem = ({ title, author, id }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <span>{`${title} by `}</span>
      <span>{author}</span>
      <input type="button" value="delete" onClick={() => dispatch(deleteBook(id))} />
    </div>
  );
};

BookItem.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default BookItem;
