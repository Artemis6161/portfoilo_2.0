import React from 'react'
import'./projects.css'

// import {ProjectImage} from "./projectimages"
import Title from "./projecttitle"
import proj1 from "../../img/location img.png"
import proj2 from "../../img/todo img.png"
import proj3 from "../../img/titactoe img.png"
import proj4 from "../../img/netflix img.png"
import proj5 from "../../img/fake store.png"
const projects = () => {
  const ProjectImage =[
    {
        id:1,
        img: proj1 ,
        title: "location",
        desc: " Mini web app to find your current Hemisphere.",
        link: "https://fir-c74d8.web.app/",
    },
    {
        id:2,
        img: proj2,
        title: "Todo List",
        desc: "A web app that is used to save your todo list.",
      link: "https://todo-f3444.web.app/",
    },
    {
        id:3,
        img: proj3,
        title: "TicTacToe",
        desc: "let's play tictactoe game......!",
      link: "https://tictactoe-dcff7.web.app/"
    },
    {
        id:4,
        img: proj4,
        title: "Netflix-Clone",
        desc: "A responsive netflix-clone web application.",
      link: "https://netflix-clone-93d11.web.app/",
    },
    {
      id:5,
      img: proj5,
      title: "E-commerce",
      desc: "it's time to shop",
    link: "https://fake-store-api-75ae5.web.app/",
  }


];
  return (
    <div className='Projectssecion' id="Projects">
    <h1 className="section-title">Some Things I’ve Built</h1>

<div className="project-container">
  {
    <div className="project_image">

    {
     ProjectImage.map((image,index)=>{
      return(

      
      <Title key={index} img={image.img}  title={image.title} desc={image.desc} link={image.link}/>
 
    
      )
    
    
})}
    </div>
  }
</div>



         
    </div>
  )
}

export default projects
