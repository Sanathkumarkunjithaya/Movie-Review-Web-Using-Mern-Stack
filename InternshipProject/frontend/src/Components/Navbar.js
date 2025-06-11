import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHome,
  faBook,
  faUser,
  faSignInAlt,
  faSignOutAlt
} from '@fortawesome/free-solid-svg-icons';

const CustomNavbar = () => {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("authToken"); // ✅ reliable auth check

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <Navbar expand="lg" bg="dark" variant="dark" sticky="top" className="shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold text-info fs-4">
          CINEPHILES 🎬
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar" />
        <Navbar.Collapse id="main-navbar">
          <Nav className="me-auto">
            <NavLink exact="true" to="/" className="nav-link">
              <FontAwesomeIcon icon={faHome} /> Home
            </NavLink>
            <NavLink to="/movies" className="nav-link">
              <FontAwesomeIcon icon={faBook} /> Movies
            </NavLink>
            <NavDropdown title="More" id="nav-dropdown">
              <NavDropdown.Item as={Link} to="/contact">Contact</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/about">About</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          {!isLoggedIn ? (
            <Nav>
              <Nav.Link as={Link} to="/signup" className="nav-link btn-custom">
                <FontAwesomeIcon icon={faUser} /> Signup
              </Nav.Link>
              <Nav.Link as={Link} to="/login" className="nav-link btn-custom">
                <FontAwesomeIcon icon={faSignInAlt} /> Login
              </Nav.Link>
            </Nav>
          ) : (
            <Nav>
              <NavLink to="/admin" className="nav-link btn-custom">
                <FontAwesomeIcon icon={faUser} /> Admin
              </NavLink>
              <Nav.Link onClick={handleLogout} className="nav-link btn-custom">
                <FontAwesomeIcon icon={faSignOutAlt} /> Logout
              </Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
