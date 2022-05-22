import React from 'react'
import { IoLogoLinkedin } from "react-icons/io5"
import {  FiGithub,FiLinkedin } from "react-icons/fi"
import "./social.css"
import { Link } from "react-router-dom";
import {
 
    FaInstagram,
    FaLinkedin,
    FaGithub,
   
  } from "react-icons/fa";

const social = () => {
  return (
      <div className="social">
  <div className="header_socials">
      <a href="https://www.linkedin.com/in/sangeetha-rj-283106198/" target="_blank"><FiLinkedin  color="#242D49" size="1rem"/></a>
      <a href="https://github.com/Artemis6161" target="_blank"><FiGithub color="#242D49" size="1rem"/></a>
      <a href="https://www.instagram.com/spiceitupwithsan61/" target="_blank">< FaInstagram color="#242D49" size="1rem"/></a>
     
  </div>
  <div className="scroll_down">
<p>sangeetharajan112@gmail.com</p>
  </div>
  </div>
      
   
  )
}

export default social
