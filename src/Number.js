import React from 'react';
import ReactDOM from 'react-dom';

export class Number extends React.Component {

	render() {


		return(
			<input placeholder="enter a number" onChange={this.props.changeNumber} />
		)
	}
}

ReactDOM.render(
	<Number />,
	document.getElementById('root')
)