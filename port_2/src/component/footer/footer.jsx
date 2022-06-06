import React from 'react'
import './footer.css'
import {  FiGithub,FiLinkedin } from "react-icons/fi"
import { IoLogoLinkedin } from "react-icons/io5"
import { ImBlog } from "react-icons/im";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Wave from '../../img/wave.png'
import { CgGitFork } from "react-icons/cg";
import {
  AiFillStar,

} from "react-icons/ai";


import {
 
    FaInstagram,
    FaLinkedin,
    FaGithub,
   
  } from "react-icons/fa";
const footer = () => {
  return (
    <div className="footer">
  <img src={Wave} alt="" style={{ width: "100%",height: "20rem"  }} />
    <div className="f-content">
      <span>sangeetharajan112@gmail.com</span>
      <div className="f-icons">
      <a href="https://www.linkedin.com/in/sangeetha-rj-283106198/" target="_blank"><FaLinkedin color="#ffff" size="2rem"/></a>
      <a href="https://github.com/Artemis6161" target="_blank"><FaGithub color="#ffff" size="2rem"/></a>
      <a href="https://www.instagram.com/spiceitupwithsan61/" target="_blank">< FaInstagram color="#ffff" size="2rem"/></a>
      </div>

    </div>

    <div className="int">
    <p>Designed & Built by Sangeetha Rajan
</p>

    </div>
    <div className="btn">
              
{/*                
      <a  href="https://github.com/Artemis6161/portfoilo_2.0/tree/master/port_2"  target="_blank">
   <br/>
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} /></a> */}
              {/* </button> */}
              <Nav.Item className="fork-btn">
              <Nav.Link
                href="https://github.com/Artemis6161/portfoilo_2.0/tree/master/port_2"
                target="_blank"
                rel="noreferrer"
                className="fork-btn-inner"
                
              >
                        <CgGitFork style={{ fontSize: "1.2em" }} size="30px" color= 'white'/>{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} size="30px"color= 'white' />
              </Nav.Link>
            </Nav.Item>
            </div>
  </div>
 
);
};

export default footer
