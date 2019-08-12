import React from 'react';
import ReactDOM from "react-dom";
import './Nav.scss';
import { Select } from './Select';

export class Nav extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userName: '',
		}
	}
  render() {
    return (
    	<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar {this.state.userName}</a>
  <Select />
</nav>
)
  }
  
}

ReactDOM.render(
	<Nav />,
	document.getElementById('root')
)