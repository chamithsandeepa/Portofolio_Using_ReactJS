import React from 'react';
import './intro.css';
import bg1 from '../../images/bg1.png';
import { Link } from 'react-scroll';
import PhoneIcon from '@mui/icons-material/Phone';

const Intro = () => {
  return (
    <section id='intro'>
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">Chamith</span> <br />Website Designer</span>
            <p className="introPara">I am a skilled web designer with experience in creating <br /> visually appealing and user friendly websites.</p>
            <Link><button className="btn"><PhoneIcon className="btnImg" />Hire Me</button></Link>
        </div>
        <img src={bg1} alt="profile" className="bg" />
    </section>
  )
}

export default Intro;