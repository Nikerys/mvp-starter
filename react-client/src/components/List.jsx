import React from 'react';
import ListItem from './ListItem.jsx';

class List extends React.Component {
  render() {
    var rows = [];
    this.props.books.forEach((book) => {
      if (book.name.indexOf(this.props.filterText) === -1) {
        return;
      }
      rows.push(<ListItem book={book} key={book._id}/>);
    });
    return(
      <table>
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
      )
  }
}


export default List;