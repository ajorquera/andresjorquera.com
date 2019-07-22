import React from 'react';
import jonathanImg from '../images/jonathan.png';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default (props) => {
    const name = props.name;
    return (
        <Navbar fixed="top" className="navbar-default navbar-dark">
            <div className="container">
                <Navbar.Brand>
                    <img src={jonathanImg} width="50" className="navbar-logo pull-left" alt="avatar" />
                </Navbar.Brand>
                <span className="navbar-brand">{name}</span>
                
                <Navbar.Toggle aria-controls="basic-Navbar-nav" />
                <Navbar.Collapse className="" id="basic-Navbar-nav">
                    <div className="navbar-nav ml-auto">
                        <Nav.Link href="#about">About me</Nav.Link>
                        <Nav.Link href="/blog" className="blog_menu_link">Blog</Nav.Link>
                    </div>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
}