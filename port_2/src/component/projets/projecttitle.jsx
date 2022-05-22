import React, { useState }from 'react'

const  Title = ({ img, title, desc, link}) => {
    const[show, setShow] = useState(false);
  return (
  
    <a href={link}  target="_blank">
       <div className='project'
      onMouseEnter={()=>setShow(true)} 
    onMouseLeave={()=>setShow(false)}>
{show ?(
  <div>
   < h4 >{title}</h4>
  <p>{desc}</p>
   </div>
) : (
  <img src={img} alt=""/>)

}

      </div>
      </a>

    
  )}


export default Title;
