import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBook, faUser, faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';

const CustomNavbar = () => {
  const params = useParams();
  let userId = params.user;

  const navigate = useNavigate();
  // const [isLoggedIn, setIsLoggedIn] = useState(true);

  // useEffect(() => {
  //   // Check if the user is logged in when the component mounts
  //   const authToken = localStorage.getItem("authToken");
  //   setIsLoggedIn(!authToken); // Convert to boolean

  //   // You can also do any additional authentication checks here if needed
  // }, []);

  const handleLogout = () => {
    // const shouldLogout = alert('You have logged out');

    // if (shouldLogout) {
      localStorage.removeItem("authToken");
      // setIsLoggedIn(false); // Update the state to reflect logout
      navigate("/login");
    // }
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container className='bg-secondary'>
        <Navbar.Brand as={Link} to="/">CINEPHILES</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink exact to="/" className="nav-link" activeClassName="active">
              <FontAwesomeIcon icon={faHome} /> Home
            </NavLink>

            <NavLink to="/books" className="nav-link" activeClassName="active">
              <FontAwesomeIcon icon={faBook} /> Movies
            </NavLink>

            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/contact">Contact</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/about">About</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          {(userId === null) ? 
            <Nav className="nav navbar-nav navbar-right">
              <Nav.Link as={Link} to="/signup" className="nav-link btn">
                <FontAwesomeIcon icon={faUser} /> Signup
              </Nav.Link>
              <Nav.Link as={Link} to="/login" className="nav-link btn">
                <FontAwesomeIcon icon={faSignInAlt} /> Login
              </Nav.Link>
            </Nav>
           : 
            <Nav>
              <NavLink to="/admin" className="nav-link" activeClassName="active">
                <FontAwesomeIcon icon={faUser} /> Admin
              </NavLink>
              <Nav.Link as={Link} to="/login" className="nav-link btn" onClick={handleLogout}>
                <FontAwesomeIcon icon={faSignOutAlt} className="text-dark" /> Logout
              </Nav.Link>
            </Nav>
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;

//!localStorage.getItem("authToken")