import React from 'react';

class ListItem extends React.Component {
  render() {
    return(
      <tr>
        <td>{this.props.book.name}</td>
      </tr>
      )
  }
}


// const ListItem = (props) => (
//   <tr>
//     <td>{ props.book.name }</td>
//   </tr>
// )

export default ListItem;