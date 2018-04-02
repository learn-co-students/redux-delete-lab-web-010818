import React, { Component } from 'react';
import Band from './Band';

class Bands extends Component {
	render() {
		const bands = this.props.store.getState().bands;
		const displayBands = bands.map((b, i) => (
			<Band band={b} id={i} store={this.props.store} />
		));
		return <ul>{displayBands}</ul>;
	}
}

export default Bands;
