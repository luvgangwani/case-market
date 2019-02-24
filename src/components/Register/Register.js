import React,{Component} from 'react';
import uuidv4 from 'uuid/v4';
import Login from '../Login/Login';

class Register extends Component {

constructor(props){
    super(props);
    this.state={
        content: "register-page",
        user: null
    }
    this.callRegister=this.callRegister.bind(this);
    this.onSigninClick = this.onSigninClick.bind(this);
}

onSigninClick(e){
    e.preventDefault();
    this.setState({
        content: "signin-click"
    });
}


callRegister(e){
    e.preventDefault();

    let id = uuidv4()
    let first_name=this.refs.fname.value;
    let last_name=this.refs.lname.value;
    let email = this.refs.email.value;
    let password = this.refs.password.value;
    let gender=this.refs.phone.value;
    let contact_number=this.refs.phone.value;

    let clientObj = {
        id,
        first_name,
        last_name,
        email,
        password,
        gender,
        contact_number
    }

    this.props.onClientRegister(clientObj);
}

render(){

    if(this.state.content === "register-page")
    {
        return(
            <div className="login-component">
                <div className="container">
                    <div className="row">
                    <div className="login-wrap">
                    <span className="span-login-title">Sign Up</span>
                    <h3 className="signup-info-title">Enter your Information</h3>
                            
                        <div className="col-md-8 login-form-content">
                            <form className="login-form">
                                <input type="text" ref="fname" className="form-control login-input" name="fname" placeholder="First Name"/>
                                <input type="text" ref="lname" className="form-control login-input" name="lname" placeholder="Last Name"/>
                                <input type="mail" ref="email" className="form-control login-input" name="email" placeholder="Email"/>
                                <input type="tel" ref="phone" className="form-control login-input" name="phone" placeholder="Contact No"/>
                                <div>
                                    <select ref="gender" className="custom-select login-input" defaultValue="male">
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                    </select>
                                </div>                   
    
                                <input type="password" ref="password" className="form-control login-input" name="password" placeholder="Enter Password"/>
                                {/* <input type="password" className="form-control login-input" name="confirm-password" placeholder="Confirm Password"/>
                                 */}
    
                                <input type="button" value="Register" className="btn login-form-btn" onClick={this.callRegister}/>
                            </form>
                            </div>
                        
                        <div className="col-md-8 signup-link-content">
                            <span className="span-txt-1">Already have an account?</span>
                            <a href="#" className="signup-link" onClick={this.onSigninClick}>Sign In Now</a>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
        );
    
    }
    else if(this.state.content === "signin-click"){
        return <Login />;
    }
   
}

}


export default Register;