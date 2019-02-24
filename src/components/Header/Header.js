import React, {Component} from 'react'
import { Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';

// Move items to right

class Header extends Component{
    constructor(props){
        super(props)
        this.handleSignupClick =this.handleSignupClick.bind(this);
        this.handleLoginClick =this.handleLoginClick.bind(this);
        this.handleHomeBtnClick = this.handleHomeBtnClick.bind(this);
        
    }

    handleHomeBtnClick(e){
        e.preventDefault()
        this.props.onHomeBtnClick();
    }
    
    handleSignupClick(e){
        e.preventDefault();
        this.props.onSignUpClick();
    }

    handleLoginClick(e){
        e.preventDefault();
        this.props.onLoginClick();
    }

    render() {
        return(
            <Navbar fixed="top" bg="light" expand="lg">
                <Navbar.Brand href="#home" onClick={this.handleHomeBtnClick}>Case Market</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <ul className="navbar-nav float-right"> 
                            <li><Nav.Link className= "mr-sm-2" onClick={this.handleSignupClick}>Signup</Nav.Link></li>
                            <li><Nav.Link onClick={this.handleLoginClick}>Login</Nav.Link></li>    
                        </ul>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;