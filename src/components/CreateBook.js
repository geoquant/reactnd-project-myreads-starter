import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import * as BooksAPI from '../BooksAPI';

// this is a controlled component
class CreateBook extends Component {
  static propTypes = {
    moveBook: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      query: '',
      matches: []
    };
  }

  updateQuery = query => {
    if (!query) {
      this.setState({query: '', matches: []});
    } else {
      this.setState({query: query});
    }
  };

  render() {
    return (
      <div className="search-books">
        {console.log(BooksAPI.getAll())}
        <div className="search-books-bar">
          <Link to="/" className="close-search" />
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by author or title"
              value={this.state.query}
              onChange={event => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">Create Book!</div>
      </div>
    );
  }
}

export default CreateBook;
