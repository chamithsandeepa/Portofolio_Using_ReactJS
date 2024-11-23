import React, { useState } from 'react';
import './navbar.css';
import logo from '../../images/logo.jpg';
import { Link } from 'react-scroll';
import ContactMailIcon from '@mui/icons-material/ContactMail';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
        <nav className="navbar">
        <img src={logo} alt="" className='logo'/> 
        <div className="dekstopMenu">
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500}  className="dekstopMenuListItem">Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-70} duration={500} className="dekstopMenuListItem">About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-50} duration={500} className="dekstopMenuListItem">Portofolio</Link>
            <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-45} duration={500} className="dekstopMenuListItem">Clients</Link>
        </div>
        <button className="dekstopMenuBtn" onClick={() => {
          document.getElementById('contact').scrollIntoView({behavior:'smooth'});
        }}>
              <ContactMailIcon className="dekstopMenuImg" /> Contact Me</button>


            <img src="" alt="Menu" className='mobMenu' onClick={() =>setShowMenu(!showMenu)}/>
            <div className="navMenu" style={{ display: false ? 'flex' : 'none' }}>
    <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="ListItem" onClick={() => setShowMenu(false)}>Home</Link>
    <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-70} duration={500} className="ListItem" onClick={() => setShowMenu(false)}>About</Link>
    <Link activeClass="active" to="works" spy={true} smooth={true} offset={-50} duration={500} className="ListItem" onClick={() => setShowMenu(false)}>Portfolio</Link>
    <Link activeClass="active" to="clients" spy={true} smooth={true} offset={-45} duration={500} className="ListItem" onClick={() => setShowMenu(false)}>Clients</Link>
    <Link activeClass="active" to="contact" spy={true} smooth={true} offset={0} duration={500} className="ListItem" onClick={() => setShowMenu(false)}>Contact</Link>
</div>


    </nav>
  )
}

export default Navbar