import React, {Component} from 'react'
import { Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';

// Move items to right

class Header extends Component{
    render() {
        return(
            <Navbar fixed="top" bg="light" expand="lg">
                <Navbar.Brand href="#home">Case Market</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <ul className="navbar-nav float-right"> 
                            <li><Nav.Link className= "mr-sm-2">Signup</Nav.Link></li>
                            <li><Nav.Link>Login</Nav.Link></li>    
                        </ul>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;