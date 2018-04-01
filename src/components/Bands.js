import React, { Component } from 'react';
import Band from "./Band"

class Bands extends Component {
  render() {
    const band = this.props.store.getState().bands.map((band, index) => {
      return <Band band={band} id={band.id} key={index} store={this.props.store}/>
    })
    return(
      <ul>
        {band}
      </ul>
    );
  }
};

export default Bands;
