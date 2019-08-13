import React from 'react';
import ReactDOM from "react-dom";
import './Nav.scss';
import { Input } from './Input';

export class Nav extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userName: '',
		}
		this.changeUserState=this.changeUserState.bind(this);
	}

	changeUserState(e){
		let usersName = e.target.value;
		console.log(usersName);
		this.setState({ 
			userName: usersName,
		 });
	}

  render() {
    return (
    	<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Welcome {this.state.userName}</a>
  <Input changeUserState={this.changeUserState}  />
</nav>
)
  }
  
}

ReactDOM.render(
	<Nav />,
	document.getElementById('root')
)