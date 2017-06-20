import React from 'react';

class AddBookSearch extends React.Component {
  constructor(props){
    super(props);
    this.handleNewBookInputChange = this.handleNewBookInputChange.bind(this);
  }

  handleNewBookInputChange(e) {
    this.props.onNewBookInput(e.target.value);
  }

  render() {
    return(
      <div>
        <input
          type="text"
          placeholder="Add book title here"
          value={this.props.newBook.name}
          onChange={this.handleNewBookInputChange}
        />
      </div>
    )
  }
}

export default AddBookSearch;