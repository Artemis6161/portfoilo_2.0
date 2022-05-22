import React from 'react'
import './navebar.css'
import { Link } from "react-scroll";
const navebar = () => {
  return (
 
      <div className="n-wrapper">
          <div className="n-left">
          <div className="n-name">Sangeetha Rajan</div>
          <span>toggle</span>
          </div>
         
          <div className="n-right">
              <div className="n-list">
                  <ul style={{listStyleType: 'none'}}>
                      <li>

                         <Link activeClass="active" to="Home" spy={true} smooth={true}>
                Home
              </Link>
                          </li>
                      <li>
                      <Link to="Skills" spy={true} smooth={true}>
                Skills
              </Link>
                          </li>
                          <li>
              <Link to="Projects" spy={true} smooth={true}>
                Projects
              </Link>
            </li>
                     
                  </ul>
              </div>
              <Link to="contact" spy={true} smooth={true}>
        <button className="button n-button">Contact</button>
        </Link>
            
            

          </div>
      </div>
 
  )
}

export default navebar

