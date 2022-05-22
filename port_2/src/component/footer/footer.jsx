import React from 'react'
import './footer.css'
import {  FiGithub,FiLinkedin } from "react-icons/fi"
import { IoLogoLinkedin } from "react-icons/io5"
import Wave from '../../img/wave.png'
import {
 
    FaInstagram,
    FaLinkedin,
    FaGithub,
   
  } from "react-icons/fa";
const footer = () => {
  return (
    <div className="footer">
    <img src={Wave} alt="" style={{ width: "100%" }} />
    <div className="f-content">
      <span>sangeetharajan112@gmail.com</span>
      <div className="f-icons">
      <a href="https://www.linkedin.com/in/sangeetha-rj-283106198/" target="_blank"><FaLinkedin color="#ffff" size="2rem"/></a>
      <a href="https://github.com/Artemis6161" target="_blank"><FaGithub color="#ffff" size="2rem"/></a>
      <a href="https://www.instagram.com/spiceitupwithsan61/" target="_blank">< FaInstagram color="#ffff" size="2rem"/></a>
      </div>
    </div>
  </div>
);
};

export default footer
