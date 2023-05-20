import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/BooksSlice';

const BookItem = ({ title, author, id }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <div>{`${title} by `}</div>
      <div>{author}</div>
      <input type="button" value="delete" onClick={() => dispatch(removeBook(id))} />
    </div>
  );
};

BookItem.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default BookItem;
