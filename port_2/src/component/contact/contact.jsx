import React,{useContext, useRef, useState} from 'react'
import emailjs from '@emailjs/browser';
import'./contact.css'
const Contact = () => {
    const form = useRef();
    const [done, setDone] = useState(false)
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_008pd0o', 'template_6hno2cw', form.current, 'yYYiwzq93FS2gVXxb')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
  
      <div className="contact-form" id="contact">
<div className="w-left">
    <div className="awesome">
        <span>Get in touch</span>
        <span>Contact me</span>
        <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
    </div>
</div>
<div className="c-right">
    <form ref={form} onSubmit={sendEmail}>
    <input type="text" name="user_name" className='user' placeholder='Name'/>
    <input type="text" name="user_email" className='user' placeholder='Email'/>
    <textarea type="message" name="message" className='user' placeholder='message'/>
    <input type="submit" value="send" className='button'/>
    <span>{done && "Thanks for Contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>

</div>
 </div>
   
  )
}

export default Contact
