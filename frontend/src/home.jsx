import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Container, Navbar, Nav, Button, NavDropdown, Dropdown } from "react-bootstrap";

function handleLogout(){

}

function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const sessionUser = sessionStorage.getItem("userName");
    if (sessionUser) {
      setUser(sessionUser);
    }
  }, []);

  return (
    <>
      
      <Navbar bg="light" expand="lg" className="border-bottom shadow-sm px-4 mb-5">
              <Navbar.Brand className="text-success fw-bold fs-3">ProGig</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mx-auto">
                  <Nav.Link as={Link} to="/" className="nav-link fs-5 mx-3">Home</Nav.Link>
                  <Nav.Link as={Link} to="/about" className="nav-link fs-5 mx-3">About</Nav.Link>
                  <Nav.Link as={Link} to="/contact" className="nav-link fs-5 mx-3">Contact Us</Nav.Link>
                </Nav>
                <div className="d-flex align-items-center">
                  {user ? (
                    
                    <Dropdown className="me-5">
                      
                      <Dropdown.Toggle
                        variant="link"
                        className="text-success fw-bold fs-5 p-0 m-0"
                        id="dropdown-basic"
                        style={{ textDecoration: 'none' }}
                        >
                        {user} 
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item as={Link} to="/profile">Profile</Dropdown.Item>
                        <Dropdown.Item as={Link} to="/profile">Become a Seller</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>

                  ) : (
                    <>
                      <Link to="/login">
                        <Button variant="outline-success" className="me-2">Login</Button>
                      </Link>
                      <Link to="/signUp">
                        <Button variant="outline-warning">Sign Up</Button>
                      </Link>
                    </>
                  )}
                </div>
              </Navbar.Collapse>
            </Navbar>

      <Container className="text-center">
        <h1>Home Page</h1>
      </Container>
    </>
  );
}

export default Home;