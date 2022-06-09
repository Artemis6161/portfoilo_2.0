import React from 'react'
import { IoLogoLinkedin } from "react-icons/io5"
import {  FiGithub,FiLinkedin } from "react-icons/fi"
import "./social.css"
import { Nav, Navbar,Container,Button } from 'react-bootstrap'
import { Link } from "react-router-dom";
import {
 
    FaInstagram,
    FaLinkedin,
    FaGithub,
   
  } from "react-icons/fa";

const social = () => {

  const socialMedia= [
   { email: 'sangeetha6161@gmail.com'}
  ]
  return (
      <div className="social">
  <div className="header_socials">
      <a href="https://www.linkedin.com/in/sangeetha-rj-283106198/" target="_blank"><FiLinkedin  color="#242D49" size="1rem"/></a>
      <a href="https://github.com/Artemis6161" target="_blank"><FiGithub color="#242D49" size="1rem"/></a>
      <a href="https://www.instagram.com/spiceitupwithsan61/" target="_blank">< FaInstagram color="#242D49" size="1rem"/></a>
     
  </div>
  <div className="scroll_down">
  {/* <Nav.Link
                href="sangeetha6161@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="fork-btn-inner1"
                
              > */}
<p >sangeetharajan112@gmail.com</p>
              {/* </Nav.Link> */}

  </div>
  </div>
      
   
  )
}

export default social
