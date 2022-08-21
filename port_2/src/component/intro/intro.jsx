import React from 'react'
import './intro.css'
import FloatingDiv from '../FloatingDiv/FloatingDiv'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import Boy from '../../img/boy.png'
import Crown from '../../img/crown.png'
import Glassesimoji from '../../img/glassesimoji.png'
import Sa from '../../img/Sang res.pdf'
import Typewriter from "typewriter-effect";

import img from "../../img/yellow 3.jpg"

// import img3 from "../../img/3.webp"
function Intro() {
  return (
    <div className="intro" id="Home">
      <div className="i-left">
        <div className="i-name">
          <span>Hy! I Am</span>
        <span>Sangeetha Rajan</span>
        
         

<span>

              <Typewriter
      options={{
        strings: [
          "Developer",
          "Frontend Developer",
          "I design and Code simple yet beautiful websites.",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    /></span>
  </div>
        <a href={Sa} target="_blank">
          <button className="button i-button">Hire me</button></a>

      </div>
      <div className="img">

      <img src={img } alt="img" />

    
      </div>
      {/* <div className="i-right">
                       <img src={Vector1 } alt="" />
                       <img src={Vector2} alt="" />
                       <img src={Boy} alt="" />
                       <img src={Glassesimoji} alt="" />
                       <div style={{top: '18rem', left: '0rem'}}>
                         <FloatingDiv image={Crown} txt1='web' txt2='Developr'/>
                       </div>
                       <div className="blur" style={{ background:"rgb(238 210 255)", right:'-100rem'}}>
            </div>
            <div className='blur' style={{
              background: '#c1F5FF',
              top:'17rem',
              width: '21rem',
              height:'11rem',
              left:'-9rem'
            }}>
            </div>
                    </div> */}
    </div>

  )
}

export default Intro

