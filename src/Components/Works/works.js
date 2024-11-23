import React from 'react'
import './works.css'
import Portofolio1 from '../../images/portofolio1.jpg'
import Portofolio2 from '../../images/portofolio2.jpg'
import Portofolio3 from '../../images/portofolio3.jpg'
import Portofolio4 from '../../images/portofolio4.jpg'
import Portofolio5 from '../../images/portofolio5.jpg'
import Portofolio6 from '../../images/portofolio6.jpg'

const Works = () => {
  return (
    <section id='works'>
        <h2 className="worksTitle">My Portofolio</h2>
        <span className="worksDesc">I take the pride in paying attention to the smallest details and</span>
        <div className="worksImgs">
            <img src={Portofolio1} alt="" className="worksImg" />
            <img src={Portofolio2} alt="" className="worksImg" />
            <img src={Portofolio3} alt="" className="worksImg" />
            <img src={Portofolio4} alt="" className="worksImg" />
            <img src={Portofolio5} alt="" className="worksImg" />
            <img src={Portofolio6} alt="" className="worksImg" />
        </div>
        <button className="worksBtn">See More</button>
    </section>
  )
}

export default Works