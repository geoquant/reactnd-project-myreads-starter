import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import CreateBook from './CreateBook';
import BookshelfList from './BookshelfList';
import * as BooksAPI from '../BooksAPI';
import '../style/App.css';

class BooksApp extends Component {
  constructor(props) {
    super(props);
    this.state = {books: []};
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => this.setState({books}));
  }

  moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      book.shelf = shelf;
      this.setState(previousState => ({
        // Filter duplicate books and add new books to the array
        books: previousState.books.filter(b => b.id !== book.id).concat([book])
      }));
    });
  };

  render() {
    const books = this.state.books;
    return (
      <div className="app">
        <Route
          path="/"
          exact
          render={() =>
            <BookshelfList books={books} moveBook={this.moveBook} />}
        />
        <Route
          path="/search"
          render={() => <CreateBook books={books} moveBook={this.moveBook} />}
        />
      </div>
    );
  }
}

export default BooksApp;
