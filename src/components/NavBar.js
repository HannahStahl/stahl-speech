import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
  <Navbar collapseOnSelect expand="lg">
    <Navbar.Brand as={NavLink} to="/">
      <img
        alt="Home"
        src="/logo.png"
        className="d-inline-block align-top"
      />
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="ml-auto" activeKey={window.location.pathname}>
        <Nav.Link as={NavLink} to="/about" eventKey="1"><h4>About</h4></Nav.Link>
        <Nav.Link as={NavLink} to="/services" eventKey="2"><h4>Services</h4></Nav.Link>
        <Nav.Link as={NavLink} to="/faq" eventKey="3"><h4>FAQ</h4></Nav.Link>
        <Nav.Link as={NavLink} to="/testimonials" eventKey="4"><h4>Testimonials</h4></Nav.Link>
        <Nav.Link as={NavLink} to="/resources" eventKey="5"><h4>Resources</h4></Nav.Link>
        <Nav.Link as={NavLink} to="/contact" eventKey="6"><h4>Contact</h4></Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavBar;
