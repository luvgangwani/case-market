import React, { Component } from 'react';

class App extends Component {

	constructor(props){
		super(props)
	}

	render() {
		return(
			<h1>{this.props.initialData}</h1>
		)
	}

}

export default App