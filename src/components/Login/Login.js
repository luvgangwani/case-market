import React,{Component} from 'react';
import * as api from '../../api';

class Login extends Component {

constructor(props) {
    super(props);        
    this.state={
        user: null
    }    
    this.callSignIn = this.callSignIn.bind(this);
    this.callLoginApi =this.callLoginApi.bind(this);
}

callLoginApi(email, password){
    api.login(email,password,"client")
    .then((data) => {
        this.setState({
            user: data.data
        })
    });
}

callSignIn(e){
    e.preventDefault();
    console.log("In sigin page");
    let email = this.refs.email.value;
    let password = this.refs.password.value;
    console.log(email, password);
    this.callLoginApi(email, password);
}    

render(){
    return(
        <div className="login-component">
            <div className="container">
                <div className="row">
                <div className="login-wrap">
                <span className="span-login-title">Sign In</span>
                    <div className="col-md-8 text-center login-form-content">
                        <form className="login-form" onSubmit={this.callSignIn}>
                            <input type="email"  ref="email" className="form-control login-input" name="email" placeholder="Enter Email"/>
                            <input type="text"    ref="password" className="form-control login-input" name="password" placeholder="Enter password"/>
                            <input type="submit" value="Login" className="btn login-form-btn"/>
                        </form>
                        </div>
                    
                    <div className="col-md-8 signup-link-content">
                        <span className="span-txt-1">Don’t have an account?</span>
                        <a href="" className="signup-link">Sign up now</a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
    );
   
}

}


export default Login;