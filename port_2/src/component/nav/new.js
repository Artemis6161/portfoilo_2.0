import React, { useState } from 'react';
import { Nav, Navbar,Container } from 'react-bootstrap'

import { Link } from "react-scroll";
import "./nav.css"
import 'bootstrap/dist/css/bootstrap.min.css';
function Header() {
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
    <div class="p-2  text-black " >
      
    <div class="container-fluid">
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
  
    <Navbar.Brand>
            <div class="p-1  text-black">
              <h3>Sangeetha Rajan</h3>
            </div>
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
        <Nav class="navbar-nav ms-auto mb-lg-0">
        <Link activeClass="active" to="Home" spy={true} smooth={true}>
         Home
              </Link>
              <Link to="Skills" spy={true} smooth={true}>
                Skills
              </Link>
              <Link to="Projects" spy={true} smooth={true}>
                Projects

             
              </Link>
              <Link to="contact" spy={true} smooth={true}>
                <button className="button n-button">Contact</button>
              </Link>
           
        </Nav>
      </Navbar.Collapse>
    
  </Navbar>
 
</div>
 </div>
        

  );
}

export default Header

