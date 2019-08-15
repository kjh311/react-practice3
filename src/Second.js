import React from 'react';
import ReactDOM from 'react-dom';
import { Number } from './Number';

export class Second extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			number: 0,
		}
		this.changeNumber=this.changeNumber.bind(this);
	}

	changeNumber(e) {
		let numberToChange = e.target.value;
		console.log(numberToChange);
		this.setState({number: numberToChange})
	}

	render() {
		return (
			<div id="secondDiv">
				second div {this.state.number}
				<Number changeNumber={this.changeNumber} name="George" />
			</div>
		)
	}
	}

	ReactDOM.render(
		<Second />,
		document.getElementById('root')
	)
