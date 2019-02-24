import React, {Component} from 'react';
import Home from '../Home/Home'
import { Link } from "react-router-dom";

 
class PreLogin extends Component{
    constructor(props){
        super(props);

        this.handleClient = this.handleClient.bind(this);
    }

    handleClient(){
        this.props.onClientBtnClick();
    }
    
    render(){
        return(   
                <div className="home card">
                    <div className="card-header">
                        <img src="/img/logo.png" alt="Logo" className="rounded"/>
                    </div>
                    <div className="card-body">
                        <button type="button" className="btn btn-default" onClick={this.handleClient}>Login as a client</button>
                        <button type="button" className="btn btn-default ml-2">Login as a Lawyer</button>
                    </div>
                </div>
        )
    }
}

export default PreLogin;