import React from 'react'
import './skills.css'
import UIDesign from '../../images/UIDesign.jpg';
import WebDesign from '../../images/WebDesign.jpg';
import AppDesign from '../../images/UIDesign.jpg';

const Skills = () => {
  return (
    <section id='skills'>
        <span className="skillTitle">What I do</span>
        <span className="skillDesc">I am a skilled and passionate web designer with experience is creating visually appealing and user-friend websites. I have a strong understanding of designing and a keen eye for detail. I am proficient in HTML, CSS, and JavaScript as well as design software such as Adobe Photoshop and Illustrator.</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={UIDesign} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>UI/UX Design</h2>
                    <p>Crafting intuitive and visually appealing interfaces that enhance user experience and ensure seamless interaction with digital products.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={WebDesign} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Website Design</h2>
                    <p>Designing responsive and user-friendly websites that combine aesthetic appeal with functionality to deliver engaging online experiences.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={AppDesign} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>App Design</h2>
                    <p>Developing sleek and functional app interfaces tailored to user needs, ensuring smooth navigation and optimized performance.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills