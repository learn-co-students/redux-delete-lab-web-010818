import React, { Component } from 'react';

class Band extends Component {

  handleDelete = (e) => {
    e.preventDefault()
    this.props.store.dispatch({
      type: 'DELETE_BAND',
      id: this.props.band.id
    })
  }

  render() {
    const { id, text } = this.props.band
    return(
      <li>
        {text}
        <button onClick={this.handleDelete}>Delete</button>
      </li>
    );
  }
};

export default Band;
