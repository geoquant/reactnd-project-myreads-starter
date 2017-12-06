import React, {Component} from 'react';
import PropTypes from 'prop-types';

class BookshelfChanger extends Component {
  static PropTypes = {
    book: PropTypes.object.isRequired,
    moveBook: PropTypes.func.isRequired,
    shelf: PropTypes.string.isRequired
  };

  render() {
    const {book, shelf, moveBook} = this.props;
    const allOptions = ['currentlyReading', 'wantToRead', 'read', 'none'];
    const filterOptions = allOptions.filter(select => select !== shelf);

    return (
      <div className="book-shelf-changer">
        <select
          defaultValue="moveTo"
          onChange={event => moveBook(book, event.target.value)}
        >
          <option value="moveTo" disabled>
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
