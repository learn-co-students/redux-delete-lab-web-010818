import React, { Component } from 'react';

class Band extends Component {

  handleOnClick = () => {
    this.props.store.dispatch({
      type: 'DELETE_BAND',
      id: this.props.band.id
    })
  }

  render() {
    return(
      <div>
        <ul>
        <li>{this.props.band.text}</li>
        </ul>
        <button onClick={this.handleOnClick} />
      </div>
    );
  }
};

export default Band;
