import React, { Component } from 'react';
import Login from './Login/Login';
import Register from './Register/Register';
import PreLogin from './PreLogIn/PreLogin';
import Header from './Header/Header';
import SearchFeed from './SearchFeed/SearchFeed';
import Search from './Search/Search';
import * as api from '../api';

class App extends Component {

	constructor(props){
		super(props)

		this.state = {
			content: "pre-login",
			lawyerRecommendations: null
		}

		this.setContent = this.setContent.bind(this);
		this.plClientBtnClick = this.plClientBtnClick.bind(this);
		this.customerQuerySearchClick = this.customerQuerySearchClick.bind(this);
	}

	plClientBtnClick(){
		this.setState({
			content: "client-query-form"
		})
	}

	customerQuerySearchClick(topic, location, query){
		api.getLawyerRecommendations(topic, location, query)
			.then(lawyerRecommendations => {
				this.setState({
					content: "search-feed",
					lawyerRecommendations
				})
			})
	}
	setContent(){
		if (this.state.content === "pre-login") {
			return <PreLogin
					onClientBtnClick={this.plClientBtnClick} />
		}
		else if (this.state.content === "client-query-form") {
			return <Search
					onCustomerQuerySearchClick={this.customerQuerySearchClick} />
		}
		else if (this.state.content === "search-feed"){
			return <SearchFeed
			lawyerRecommendations={this.state.lawyerRecommendations} />
		}
	}

	render(){
		return(
			<div className="container-fluid">
				<Header />
				{this.setContent()}
			</div>
		);
	}

}

export default App