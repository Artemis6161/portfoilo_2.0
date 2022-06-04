import React from 'react'
import Navbar from './component/navebar/navebar'
import Nav from './component/nav/nav'
import Intro from './component/intro/intro'
import Social from './component/social/social'
import Contact from './component/contact/contact'
import Footer from './component/footer/footer'
import Skills from './component/skills/skills'
import Projects from './component/projects/projects'
import './App.css'
function App() {
  return (
 <div className='App'>
   <Nav/>
{/* <Navbar/> */}
<Social/>
< Intro/>
<Skills/>
<Projects/>
< Contact/>
<Footer/>
 </div>

    
  )
}

export default App

