import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import List from './components/List.jsx';
import Search from './components/Search.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      books: [{name: "Harry Potter"}, {name: "The Lord of the Rings"}]
    }
    this.handleFilterTextInput = this.handleFilterTextInput.bind(this);
  }

  handleFilterTextInput(filterText) {
    this.setState({
      filterText: filterText
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
      <input type="text" placeholder="Add book title here" />
      <br />
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