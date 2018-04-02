import React, { Component } from 'react';

class BandInput extends Component {
	state = { text: '' };

	handleOnChange = event => {
		this.setState({ text: event.target.value });
	};

	handleOnSubmit = event => {
		event.preventDefault();
		this.props.store.dispatch({
			type: 'ADD_BAND',
			band: { text: this.state.text }
		});
		this.setState({ text: '' });
	};

	render() {
		return (
			<div>
				<form onSubmit={this.handleOnSubmit}>
					<input
						type="text"
						value={this.state.text}
						onChange={this.handleOnChange}
					/>
					<input type="submit" />
				</form>
			</div>
		);
	}
}

export default BandInput;
