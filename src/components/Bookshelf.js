import React, {Component} from 'react';
import Book from './Book';
import PropTypes from 'prop-types';

class Bookshelf extends Component {
  static PropTypes = {
    shelf: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    moveBook: PropTypes.func.isRequired
  };

  render() {
    const {shelf, books, moveBook} = this.props;

    // string manipulation: fooBar => Foo Bar
    const shelfNames = shelf.map(title =>
      title
        .replace(/([A-Z])/g, match => ` ${match}`)
        .replace(/^./, match => match.toUpperCase())
    );

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">
          {shelfNames}
        </h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map(book =>
              book.map(b =>
                <li key={b.title}>
                  <Book book={b} moveBook={moveBook} />
                </li>
              )
            )}
          </ol>
        </div>
      </div>
    );
  }
}

export default Bookshelf;
