import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
  }

  handleFilterTextInputChange(e){
    this.props.onFilterTextInput(e.target.value);
  }

  render() {
    return(
      <div>
        <input
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          onChange={this.handleFilterTextInputChange}
        />
      </div>
    )
  }
}

export default Search;