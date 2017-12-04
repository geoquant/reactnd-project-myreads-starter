import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import CreateBook from './components/CreateBook';
import BookshelfList from './components/BookshelfList';
import * as BooksAPI from './BooksAPI';
import './App.css';

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
      this.setState(state => ({
        // Filter duplicate books and add new book to the array
        books: state.books.filter(b => b.id !== book.id).concat([book])
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
