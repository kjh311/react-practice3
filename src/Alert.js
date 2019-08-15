import React from 'react';
import ReactDOM from 'react-dom';

export class Alert extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			text: '',
		}
		this.handleChange=this.handleChange.bind(this);
	}

	componentWillMount(){
		console.log("componentWillMount");
	}

	componentDidMount() {
		console.log('componentDidMount');
	}

	componentWillReceiveProps(nextProps) {
    	alert("Check out the new props.text that "
    	+ "I'm about to get:  " + nextProps.text);
  	}

  	componentWillUpdate(nextProps, nextState) {
    	console.log('Component is about to update!  Any second now!');
  	}

  	 componentDidUpdate(prevProps, prevState) {
    	console.log('Component is done rendering!');
  	}

  	componentWillUnmount() {
    	alert('Goodbye world');
  	}

  	handleChange(e){
  		let name = e.target.value;
  		this.setState({
  			text: name
  		});
  	}

	render(){
		console.log("rendering");

		return(
			<div>Alert
			{this.state.text} 
			<input onChange={this.handleChange}/>
			</div>
		)
	}
}

ReactDOM.render(
	<Alert text="Kevin" />,
	document.getElementById('root')
)