import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Bookshelf from './Bookshelf';
import PropTypes from 'prop-types';
import sortBy from 'sort-by';

class BookshelfList extends Component {
  static PropTypes = {
    books: PropTypes.array.isRequired
  };

  render() {
    const {books} = this.props;
    const shelves = [
      {currentlyReading: books.filter(b => b.shelf === 'currentlyReading')},
      {wantToRead: books.filter(b => b.shelf === 'wantToRead')},
      {read: books.filter(b => b.shelf === 'read')}
    ];

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {shelves.map(shelf =>
            <Bookshelf
              key={Object.keys(shelf)}
              shelf={Object.keys(shelf)}
              books={Object.values(shelf).map(b => b.sort(sortBy('title')))}
              moveBook={this.props.moveBook}
            />
          )}
        </div>
        <div className="open-search">
          <Link to="/search" className="search-books" />
        </div>
      </div>
    );
  }
}

export default BookshelfList;
