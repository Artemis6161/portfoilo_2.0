import React, { useState } from 'react';
import { Nav, Navbar,Container,Button } from 'react-bootstrap'
import { CgGitFork } from "react-icons/cg";
import {
  AiFillStar,

} from "react-icons/ai";
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
     
      <Container>
      <Navbar.Brand href="/" className="d-flex" class="text-black">
        
        <h3>SR</h3>
     
  </Navbar.Brand>
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
            
            <Nav.Item className="social_nav">
            <Nav.Link
            class="text-black"
                as={Link}
                to="footer"
                onClick={() => updateExpanded(false)}
              >Get In Touch
              </Nav.Link>
            </Nav.Item>

            <div className="fork">
            <Nav.Item className="fork-btn1">
              <Nav.Link
                href="https://github.com/Artemis6161/portfoilo_2.0/tree/master/port_2"
                target="_blank"
                rel="noreferrer"
                className="fork-btn-inner1"
                
              >
                        <CgGitFork style={{ fontSize: "1.2em" }} size="30px" color= '#242D49'/>{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} size="30px"color= '#242D49' />
              </Nav.Link>
            </Nav.Item>
       
            </div>

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
