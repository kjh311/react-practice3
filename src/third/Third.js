import React from 'react';
import ReactDOM from 'react-dom';
import './third.scss';
import { Child } from './Child';

export class Third extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			childNumber: 0,
		}
		this.changeChildNumber=this.changeChildNumber.bind(this);
	}

	changeChildNumber (e) {
		let childNumberTemp = e.target.value;
		console.log(typeof childNumberTemp);
		if(childNumberTemp === ''){
			this.setState({
			childNumber : 0,
		})
		}
		this.setState({
			childNumber : childNumberTemp,
		})
	}

	render() {
		return (
			<div id="thirdDiv">3rd Div, {this.state.childNumber}
				<Child changeChildNumber={this.changeChildNumber} />
			</div>

		)
	}
}

ReactDOM.render(
	<Third />,
	document.getElementById('root')
)