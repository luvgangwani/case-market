import React,{Component} from 'react';
import * as api from '../../api';
import LawyerProfile from '../../components/LawyerProfile/LawyerProfile';
import Register from '../Register/Register';

class Login extends Component {

constructor(props) {
    super(props);        
   
    this.callSignIn = this.callSignIn.bind(this);
    this.onSignupClick=this.onSignupClick.bind(this);
}

callSignIn(e){
    e.preventDefault();
    // console.log("In sigin page");
    let email = this.refs.email.value;
    let password = this.refs.password.value;
    // console.log(email, password);
    
    this.props.onCallLoginClick(email, password);
   
}    

onSignupClick(e){
    e.preventDefault();
    this.setState({
        content: "signup-click"
    });
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
                            <input type="email"  ref="email" className="form-control login-input" name="email" placeholder="Enter Email" defaultValue="bbohills0@guardian.co.uk"/>
                            <input type="password"    ref="password" className="form-control login-input" name="password" placeholder="Enter password" defaultValue="ZTZ2XU"/>
                            <input type="submit" value="Login" className="btn login-form-btn"/>
                        </form>
                        </div>
                    
                    <div className="col-md-8 signup-link-content">
                        <span className="span-txt-1">Don’t have an account?</span>
                        <a href="" className="signup-link" onClick={this.onSignupClick}>Sign up now</a>
                    </div>
                    </div>
                </div>
                </div>
            </div>

            );
        // else if(this.state.content === "signup-click"){
        //     console.log("signup state");
        //     return <Register />;
        // }
        // else if(this.state.content === "profile-page"){
        //     console.log("profile state");
        //     return <Profile />;
        // }
        
    }

}


export default Login;