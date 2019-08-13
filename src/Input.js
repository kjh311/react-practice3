import React from 'react';
import ReactDOM from 'react-dom';

export class Input extends React.Component {
	// constructor(props){
	// 	super(props);
	// }


	render(){

		return (
			<input type='text' placeholder='input something' onChange={this.props.changeUserState} />
		)
	}

}

ReactDOM.render(
<Input />,
document.getElementById('root')
)