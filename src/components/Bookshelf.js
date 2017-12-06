import React, {Component} from 'react';
import Book from './Book';
import PropTypes from 'prop-types';

class Bookshelf extends Component {
  static PropTypes = {
    books: PropTypes.array.isRequired,
    moveBook: PropTypes.func.isRequired,
    shelf: PropTypes.string.isRequired
  };

  render() {
    const {books, moveBook, shelf} = this.props;

    // string formatting: fooBar => Foo Bar
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
                  <Book book={b} shelf={b.shelf} moveBook={moveBook} />
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
