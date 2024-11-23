import React, { useRef } from 'react'
import './contact.css'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import XIcon from '@mui/icons-material/X'
import InstagramIcon from '@mui/icons-material/Instagram'
import emailjs from '@emailjs/browser';
import micro from '../../images/micro.png'
import meta from '../../images/meta.jpg'
import pixabay from '../../images/pixabay.png'
import google from '../../images/google.jpg'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_fyxpyhr', 'template_agels3r', form.current, {
        publicKey: 'fDVjHcyIU1uAH2c4G',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert('Email Sent!!!')
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section id="contactPage">
        <div id="clients">
            <h1 className="contactPageTitle">My Clients</h1>
            <p className="clientDesc">I have had the opertunity to work with a diverse group of companies.</p>
            <div className="clientImgs">
                <img src={micro} alt="" className="clientImg" />
                <img src={meta} alt="" className="clientImg" />
                <img src={pixabay} alt="" className="clientImg" />
                <img src={google} alt="" className="clientImg" />
            </div>
        </div>
        <div id='contact'>
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Please fill out the form below to discuss any work opportunities</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
              <input type="text" className="name" placeholder='Your Name' name='user_name'/>
              <input type="email" className="email" placeholder='Your Email' name='user_email'/>
              <textarea className='msg' name="message" rows="5" placeholder='Your Message'></textarea>
              <button type='submit' value='Send' className="submitBtn">Submit</button>
              <div className="links">
                <a href="https://www.facebook.com" target="_blank">
                  <FacebookIcon className="link" />
                </a>
                <a href="http://linkedin.com/in/chamithsandeepa" target="_blank">
                  <LinkedInIcon className="link" />
                </a>
                <a href="https://twitter.com" target="_blank">
                  <XIcon className="link" />
                </a>
                <a href="https://www.instagram.com/chamith_sandeepa_00" target="_blank">
                  <InstagramIcon className="link" />
                </a>
              </div>
            </form>
        </div>
    </section>
  )
}

export default Contact