import React from 'react';
import PropTypes from 'prop-types';
import BookItem from './Book';

const BookList = ({ allBooks }) => (
  <div>
    {allBooks.map((item) => (
      <BookItem title={item.title} author={item.author} id={item.item_id} key={item.item_id} />
    ))}
  </div>
);

BookList.propTypes = {
  allBooks: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    item_id: PropTypes.string.isRequired,
  })).isRequired,
};

export default BookList;
