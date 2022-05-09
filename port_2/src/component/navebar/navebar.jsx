import React from 'react'
import './navebar.css'
const navebar = () => {
  return (
    <div>
      <div className="n-wrapper">
          <div className="n-left">
          <div className="n-name">Sangeetha Rajan <br />
              <span>toggle</span>
          </div>
          </div>
          <div className="n-right">
              <div className="n-list">
                  <ul>
                      <li>Home</li>
                      <li>Skills</li>
                      <li>Projects</li>
                     
                  </ul>
              </div>
              <button className="button">Say Hi</button>


          </div>
      </div>
    </div>
  )
}

export default navebar

