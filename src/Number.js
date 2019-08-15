import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';


export class Number extends React.Component {

	render() {


		return(
			<input placeholder="enter a number" onChange={this.props.changeNumber} />
		)
	}
}

Number.propTypes = {
  name: PropTypes.string,
  changeNumber: PropTypes.func,
};

ReactDOM.render(
	<Number />,
	document.getElementById('root')
)

