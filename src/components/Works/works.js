import React from 'react'
import './works.css'
import Portfolio1 from '../../assets/portfolio1.jpg';
import Portfolio2 from '../../assets/portfolio2.jpg';
import Portfolio3 from '../../assets/portfolio3.jpg';
import Portfolio4 from '../../assets/portfolio4.jpg';
import Portfolio5 from '../../assets/portfolio5.jpg';
import Portfolio6 from '../../assets/portfolio6.jpg';


const Works = () => {
  return (
    <section id="works">
        <h2 className="worksTitle">My Portfolio</h2>
        <span className="worksDescript">I take pride in paying attention to the smallest details.</span>
        <div className="worksImgs">
            <img src={Portfolio1} alt="Portfolio1" className="worksImg" />
            <img src={Portfolio2} alt="Portfolio2" className="worksImg" />
            <img src={Portfolio3} alt="Portfolio3" className="worksImg" />
            <img src={Portfolio4} alt="Portfolio4" className="worksImg" />
            <img src={Portfolio5} alt="Portfolio5" className="worksImg" />
            <img src={Portfolio6} alt="Portfolio6" className="worksImg" />
        </div>
        <button className="workBtn">See More</button>
    </section>
  )
}

export default Works;
