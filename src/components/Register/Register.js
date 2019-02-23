import React,{Component} from 'react';

class Register extends Component {

render(){
    return(
        <div className="login-component">
            <div className="container">
                <div className="row">
                <div className="login-wrap">
                <span className="span-login-title">Sign Up</span>
                <h3 className="signup-info-title">Enter your Information</h3>
                        
                    <div className="col-md-8 login-form-content">
                        <form action="" className="login-form">
                            <input type="text" className="form-control login-input" name="name" placeholder="Enter Name"/>
                            <input type="text" className="form-control login-input" name="address" placeholder="Enter Address"/>
                            <input type="text" className="form-control login-input" name="address" placeholder="Enter Organization Name"/>
                            <input type="text" className="form-control login-input" name="id" placeholder="Enter Soliciter ID"/>
                            <input type="text" className="form-control login-input" name="username" placeholder="Enter Username"/>
                            <input type="password" className="form-control login-input" name="password" placeholder="Enter Password"/>
                            <input type="password" className="form-control login-input" name="confirm-password" placeholder="Confirm Password"/>
                            
                            <input type="button" value="Register" className="btn login-form-btn"/>
                        </form>
                        </div>
                    
                    <div className="col-md-8 signup-link-content">
                        <span className="span-txt-1">Already have an account?</span>
                        <a href="#" className="signup-link">Sign In Now</a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
    );
   
}

}


export default Register;