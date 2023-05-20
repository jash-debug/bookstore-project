import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import BookItem from './Book';

const BookList = ({ allBooks }) => {
  const { books } = useSelector((state) => state.books);

  return (
    <div>
      {

    allBooks.map((item) => {
      const element = books[item][0];
      return (

        <BookItem
          title={element.title}
          author={element.author}
          id={item}
          key={item}
        />
      );
    })
}
    </div>
  );
};

BookList.propTypes = {
  allBooks: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    item_id: PropTypes.string.isRequired,
  })).isRequired,
};

export default BookList;
