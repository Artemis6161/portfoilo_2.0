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
import { Container, Row, Col } from "react-bootstrap";

import {
 
    FaInstagram,
    FaLinkedin,
    FaGithub,
   
  } from "react-icons/fa";

const footer = () => {
  return (
    <div className="footer" >
    
     <div className="f-icons">
      <a href="https://www.linkedin.com/in/sangeetha-rj-283106198/" target="_blank"><FaLinkedin   size="3rem"/></a>
      <a href="https://github.com/Artemis6161" target="_blank"><FiGithub size="3rem"/></a>
      <a href="https://www.instagram.com/spiceitupwithsan61/" target="_blank">< FaInstagram size="3rem"/></a>
    </div>
    <div className="int">
    Designed & Built by Sangeetha Rajan

</div>


    {/* <div className="btn">
              

              <Nav.Item className="fork-btn">
              <Nav.Link
                href="https://github.com/Artemis6161/portfoilo_2.0/tree/master/port_2"
                target="_blank"
                rel="noreferrer"
                className="fork-btn-inner">


                        <CgGitFork style={{ fontSize: "1.2em" }} size="30px" color= '#242D49'/>{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} size="30px"color= '#242D49' />
               
              </Nav.Link>
            </Nav.Item>
        
            </div> */}
           
  </div>

  
);
};

export default footer


// import Button from 'react-bootstrap/Button';
//  import './footer.css'
// import Card from 'react-bootstrap/Card';
// import Nav from "react-bootstrap/Nav";
// import { CgGitFork } from "react-icons/cg";
// import {
 
//     FaInstagram,
//     FaLinkedin,
//     FaGithub,
   
//   } from "react-icons/fa";
//   import {  FiGithub,FiLinkedin } from "react-icons/fi"
// import {
//   AiFillStar,

// } from "react-icons/ai";
// function HeaderAndFooterExample() {
//   return (
//     <Card className="text-center">
//       {/* <Card.Header>Featured</Card.Header> */}
//       <Card.Body>
//       <Nav.Item className="btn">
//       <Nav.Link
//              href="https://www.linkedin.com/in/sangeetha-rj-283106198/"
//                target="_blank"
//                rel="noreferrer"
//                  className="fork-btn-inner">

// <FaLinkedin   size="3rem"/>
                      
               
//                </Nav.Link>
//                <Nav.Link
//              href="https://github.com/Artemis6161"
//                target="_blank"
//                rel="noreferrer"
//                  className="fork-btn-inner">

// <FiGithub size="3rem"/>
                      
               
//                </Nav.Link>
//                <Nav.Link
//              href="https://www.instagram.com/spiceitupwithsan61/"
//                target="_blank"
//                rel="noreferrer"
//                  className="fork-btn-inner">
// < FaInstagram size="3rem"/>
                      
               
//                </Nav.Link>
             
//                </Nav.Item>


//         <Card.Text>
//         Designed & Built by Sangeetha Rajan.
//         </Card.Text>
//         <Nav.Item className="fork-btn">
//              <Nav.Link
//              href="https://github.com/Artemis6161/portfoilo_2.0/tree/master/port_2"
//                target="_blank"
//                rel="noreferrer"
//                  className="fork-btn-inner">


//                         <CgGitFork style={{ fontSize: "1.2em" }} size="30px" color= '#242D49'/>{" "}
//                 <AiFillStar style={{ fontSize: "1.1em" }} size="30px"color= '#242D49' />
               
//                </Nav.Link>
//             </Nav.Item>
//       </Card.Body>
//       {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
//     </Card>
//   );
// }

// export default HeaderAndFooterExample;