import React, { Component } from 'react';
import Login from './Login/Login';
import Register from './Register/Register';
import PreLogin from './PreLogIn/PreLogin';
import Header from './Header/Header';
import SearchFeed from './SearchFeed/SearchFeed';
import Search from './Search/Search';
import Profile from './Profile';
import * as api from '../api';

class App extends Component {

	constructor(props){
		super(props)

		this.state = {
			content: "pre-login",
			user: null,
			recommendationObj:null,
			lawyerRecommendations: null
		}

		this.setContent = this.setContent.bind(this);
		this.plClientBtnClick = this.plClientBtnClick.bind(this);
		this.customerQuerySearchClick = this.customerQuerySearchClick.bind(this);
		this.signUpClick =this.signUpClick.bind(this);
		this.loginClick=this.loginClick.bind(this);
		this.homeBtnClick= this.homeBtnClick.bind(this);
		this.clientRegister = this.clientRegister.bind(this);
		this.clientLogin = this.clientLogin.bind(this);
		this.getInTouchClick = this.getInTouchClick.bind(this);

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

	signUpClick(){
		this.setState({
			content: "sign-up-click"
		})
	}

	loginClick(){
		this.setState({
			content: "login-click"
		})	
	}

	homeBtnClick(){
		this.setState({
			content: "home-click"
		})
	}

	clientRegister(clientObj){
		api.register(clientObj)
			.then(response => {
				console.log(response);
			});
	}

	clientLogin(email, password){
		api.login(email, password, "client")
    	.then(user => {
			this.setState({
				content: "profile-page",
				user
			})
    	});
	}

	getInTouchClick(recommendationObj) {
		this.setState({
			content: "login-click",
			recommendationObj
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
				onGetInTouchClick={this.getInTouchClick}
				lawyerRecommendations={this.state.lawyerRecommendations} />
		}
		else if (this.state.content === "sign-up-click") {
			return <Register
					onClientRegister={this.clientRegister} />
		}
		else if (this.state.content === "login-click") {
			return <Login
					onCallLoginClick={this.clientLogin} />
		}
		else if (this.state.content === "profile-page") {
			return <Profile 
					recommendationObj = {this.state.recommendationObj}
					user = {this.state.user} />
		}
		else if (this.state.content === "home-click") {
			return <App />
		}
		
		

	}

	render(){
		return(
			<div className="container-fluid">
				<Header onSignUpClick={this.signUpClick} onLoginClick={this.loginClick} onHomeBtnClick={this.homeBtnClick}/>
				{this.setContent()}
			</div>
		);
	}

}

export default App