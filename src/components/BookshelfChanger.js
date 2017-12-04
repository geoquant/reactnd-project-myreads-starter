import React, {Component} from 'react';
import PropTypes from 'prop-types';

class BookshelfChanger extends Component {
  static PropTypes = {
    book: PropTypes.object.isRequired,
    shelf: PropTypes.string.isRequired,
    moveBook: PropTypes.func.isRequired
  };

  render() {
    const {book, shelf, moveBook} = this.props;
    const options = ['currentlyReading', 'wantToRead', 'read', 'none'];
    const filterOptions = options.filter(select => select !== shelf);
    const defaultSelection = book.shelf ? book.shelf : 'none';

    return (
      <div className="book-shelf-changer">
        <select
          value={defaultSelection}
          onChange={e => moveBook(book, e.target.value)}
        >
          <option value="none" disabled>
            Move to...
          </option>
          {filterOptions.map((select, idx) =>
            <option value={select} key={idx}>
              {select
                .replace(/([A-Z])/g, match => ` ${match}`)
                .replace(/^./, match => match.toUpperCase())}
            </option>
          )}
        </select>
      </div>
    );
  }
}

export default BookshelfChanger;
