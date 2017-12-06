import React, {Component} from 'react';
import PropTypes from 'prop-types';
import BookshelfChanger from './BookshelfChanger';

class Book extends Component {
  static PropTypes = {
    book: PropTypes.object.isRequired,
    moveBook: PropTypes.func.isRequired,
    shelf: PropTypes.string.isRequired
  };

  render() {
    const {book, shelf, moveBook} = this.props;
    const authorsArray = book.authors.join('\n');

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" />
          <div
            className="book-cover"
            style={{
              width: 130,
              height: 190,
              backgroundImage: `url(${book.imageLinks.smallThumbnail})`
            }}
          />
          <BookshelfChanger book={book} shelf={shelf} moveBook={moveBook} />
        </div>
        <div className="book-title">
          {book.title}
        </div>
        <div className="book-authors">
          {authorsArray}
        </div>
      </div>
    );
  }
}

export default Book;
