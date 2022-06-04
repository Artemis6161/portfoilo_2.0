import React,{useRef} from 'react'
import './navebar.css'
import { Link } from "react-scroll";
import {MdMenu} from "react-icons/md";
import {MdClose} from "react-icons/md";
import {GiHamburgerMenu} from "react-icons/gi";


function Navbar(){
  const navRef = useRef();
const  showNavebar = () => {
  navRef.current.classList.toggle("responsive_nav");
}

  return (
    <header>
    <h3>Sangeetha Rajan</h3>
    <nav ref={navRef}>
    
  <ul className='navItems' >
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
          
          {/* <GiHamburgerMenu/> */}
        </Link>
      </li>
     
               
            </ul>
            <button className='nav-btn nav-close-btn' onClick={showNavebar}>
            <MdClose/>
          </button>
             
              </nav>
              <button  className='nav-btn' onClick={showNavebar}>
            
        <GiHamburgerMenu/>
              </button>
              </header>
           
           

  
      

         
    
 
  )
}

export default Navbar

{/*                  
            
             <div className="n-button">



              <Link to="contact" spy={true} smooth={true}>
        <button className="button n-button">Contact</button>
        </Link>
        </div> */}