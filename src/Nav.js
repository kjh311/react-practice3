import React from 'react';
import ReactDOM from "react-dom";
import './Nav.scss';

export class Nav extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userName: '',
		}
	}
  render() {
    return <navbar className="text-primary">NavBar</navbar>;
  }
}

ReactDOM.render(
	<Nav />,
	document.getElementById('root')
)