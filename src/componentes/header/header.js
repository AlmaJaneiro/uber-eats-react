import React from 'react';

import logo from '../../assets/img/logo.png';

import { Link } from 'react-router-dom';

import { Navbar, Nav,NavItem } from 'react-bootstrap';

import "./header.css";

//NavDropdown

class Header extends React.Component{
    render(){
        return(
            <>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Navbar.Brand>
                    <Link to="/"> <img src={logo} width="120" alt="" /> </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <NavItem><Link to="/restaurantes">Restaurantes </Link> </NavItem>
                    <NavItem><Link to="/Login" >Login</Link></NavItem>
                    <NavItem><Link to="/Perfil">Perfil</Link></NavItem>
                </Nav>
                </Navbar.Collapse>
            </Navbar>
            </>    
        );
    }
}

export default Header ;