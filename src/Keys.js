import React from 'react';
import ReactDOM from 'react-dom';

export class Keys extends React.Component {

	render(){
			const numbers = [3,5,2,6,5,2];
			const numbersList = numbers.map((number) =>
			<li key={number.toString()}>
			{number}
			</li>
		);
		return(
			<ul>{numbersList}</ul>
		)
	}
}

ReactDOM.render(
	<Keys />,
	document.getElementById('root')
)