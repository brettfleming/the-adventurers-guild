import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container} from 'react-bootstrap';
import Auth from '../utils/auth';

const AppNavbar = () => {
  // set modal display state
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar expand='lg' className="t-nav-bar">
        <Container fluid>
          <Navbar.Brand as={Link} to='/home' id="t-nav-title">
            The Adbenturers Guild
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='navbar' />
          <Navbar.Collapse id='navbar'>
            <Nav className='ml-auto' id="t-navbar-item">
              <Nav.Link as={Link} to='/home' id="t-nav-link-home">
                Home
              </Nav.Link>
              {/* if user is logged in show saved books and logout */}
              {Auth.loggedIn() ? (
                <>
                  <Nav.Link as={Link} to='/userprofile' id="t-nav-link-profile">
                    Profile
                  </Nav.Link>
                  <Nav.Link onClick={Auth.logout} id="t-nav-link">Log Out</Nav.Link>
                </>
              ) : (
                <Nav.Link onClick={() => setShowModal(true)} id="t-nav-link">Log In/Sign Up</Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default AppNavbar;
