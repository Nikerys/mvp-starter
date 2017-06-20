import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import update from 'immutability-helper';
import List from './components/List.jsx';
import Search from './components/Search.jsx';
import AddBookBtn from './components/AddBookBtn.jsx';
import AddBookSearch from './components/AddBookSearch.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      newBook: {name: ''},
      books: [{name: "Harry Potter"}, {name: "The Lord of the Rings"}]
    }
    this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
    this.handleNewBookInput = this.handleNewBookInput.bind(this);
    this.handleNewBookBtnClick = this.handleNewBookBtnClick.bind(this);
  }

  handleFilterTextInput(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  handleNewBookBtnClick() {
    var booksData = update(this.state.books, {
      $push: [this.state.newBook]
    });
    this.setState({
      books: booksData
    });
  }

  handleNewBookInput(newBook) {
    // var abc = this.state.newBook;
    // abc.name = newBook;
    // this.setState({abc: abc});
    var newBooksData = update(this.state.newBook, {
      $set: {name: newBook}
    });
    console.log(JSON.stringify(newBooksData));
    this.setState({
      newBook: newBooksData
    });
  }

  componentDidMount() {
    $.ajax({
      url: '/books',
      success: (data) => {
        this.setState({
          books: data
        });
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render () {
    return (<div>
      <AddBookSearch
        newBook={this.state.newBook}
        onNewBookInput={this.handleNewBookInput}
      />
      <input
        type="button"
        value="Add"
        onClick={this.handleNewBookBtnClick}
      />
      <Search
        filterText={this.state.filterText}
        onFilterTextInput={this.handleFilterTextInput}
      />
      <h4>There are { this.state.books.length } books in your library.</h4>
      <List
        books={this.state.books}
        filterText={this.state.filterText}
      />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));