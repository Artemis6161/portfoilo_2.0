import React, { useState } from 'react';
import { Nav, Navbar,Container } from 'react-bootstrap'

import { Link } from "react-scroll";
import "./nav.css"
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
        <Navbar.Brand href="/" className="d-flex" class="text-black">
        
        <h3>SR</h3>
     
  </Navbar.Brand>
      <Container>
     
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item >
            <Nav.Link
            class="text-black"
                as={Link}
                to="Home"
                onClick={() => updateExpanded(false)}
              >About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item >
            <Nav.Link
            class="text-black"
                as={Link}
                to="skills"
                onClick={() => updateExpanded(false)}
              >Skills
              </Nav.Link>
            </Nav.Item>

            <Nav.Item >
            <Nav.Link
            class="text-black"
                as={Link}
                to="Projects"
                onClick={() => updateExpanded(false)}
              >Projects
              </Nav.Link>
            </Nav.Item>

           

            {/* <Nav.Item className="fork-btn"> */}
            <Link
                as={Link}
                to="contact"
                onClick={() => updateExpanded(false)}>
                <button className="button n-button">Contact</button>
          </Link>
            {/* </Nav.Item> */}

          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
