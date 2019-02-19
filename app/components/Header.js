import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav} from "react-bootstrap";

const Header = () => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand>
      <Link to="/">Timesheet Client</Link>
    </Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link><Link to="/employees">Employees</Link></Nav.Link>
      <Nav.Link><Link to="/timesheets">Timesheets</Link></Nav.Link>
      <Nav.Link><Link to="/about">About</Link></Nav.Link>
    </Nav>
  </Navbar>
);

export default Header;
