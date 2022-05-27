import React from 'react'
import "./skills.css"
import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoReact,
  IoLogoJavascript,
  IoLogoGithub,
  IoLogoPython,
  IoLogoFirebase
 } from "react-icons/io5"
import {  DiGit,
  } from "react-icons/di"
  import {   FaBootstrap,
  } from "react-icons/fa"
  import {   SiJquery,
  } from "react-icons/si"
const skills = () => {
  return (
  
      <div className="services" id="Skills">
          <div className="awesome">
<span> SKILLS</span>
<div className='font2'>
<h1 className='font'>Front End</h1>
<h1 className="font">others</h1>
</div></div>

<div className="skill">
 <div className=" flex topic">
 <div class="flex-items">HTML 5</div>
      <div class="flex-items">CSS 3</div>
      <div class="flex-items">Bootstrap</div>
      <div className="icon1">
      <div class="flex-items">Github</div>
      <div class="flex-items">Git</div>
      </div></div>
      <div className="flex topic">
< IoLogoHtml5 className="topic1"  size="100px"color= '#e34c26'/>

<IoLogoCss3 className="topic1"  size="100px"color= '#1572B6'/>

<  FaBootstrap className="topic1"  size="100px"color= '#F7DF1E'/>
<div className="icon">
<IoLogoGithub  className="topic1" size="100px"/>
          <DiGit  className="topic1" size="120px"color= '#1572B6'/></div>
</div>
</div>
<div className="top">
<div className="skill">
 <div className=" flex topic">
 <div class="flex-items">Java Script</div>
      <div class="flex-items">React</div>
      <div class="flex-items">Jquery</div>
      <div className="icon1">
      <div class="flex-items">Python</div>
      <div class="flex-items">Firebase</div>
      </div></div>
      <div className="flex topic">
      < IoLogoJavascript className="topic1" size="100px"color= '#F7DF1E'/>
          <IoLogoReact className="topic1" size="100px"color= '#61DAFB'/>
          < SiJquery  className="topic1" size="100px"color= '#61DAFB'/>
          <div className="icon">
          < IoLogoPython  className="topic1"size="100px"color= '#4584b6'/>
          <IoLogoFirebase  className="topic1"size="100px"color= '#FFCB2B'/></div>
</div>
</div>
</div>


      </div>
    
  )
}

export default skills
