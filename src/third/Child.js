import React from 'react';
import ReactDOM from 'react-dom';

export class Child extends React.Component {
	render() {
		return (
			<input placeholder="enter a number" onChange={this.props.changeChildNumber} />
		)
	}
}

ReactDOM.render(
	<Child />,
	document.getElementById('root')
)