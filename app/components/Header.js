import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar, Nav} from "react-bootstrap";

const Header = () => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand>
      <Link to="/">Timesheet Client</Link>
    </Navbar.Brand>
    <Nav className="mr-auto">
      <Link className="nav-link" to="/employees">Employees</Link>
      <Link className="nav-link" to="/timesheets">Timesheets</Link>
      <Link className="nav-link" to="/about">About</Link>
    </Nav>
  </Navbar>
);

export default Header;
