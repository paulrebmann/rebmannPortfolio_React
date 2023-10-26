import React from 'react'
import './intro.css'
import bg from '../../assets/image.png'
import {Link} from 'react-scroll';
import contactImg from '../../assets/contact.png';

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I'm <span className="introName">Paul</span><br/>Website Designer</span>
            <p className="introPara">I'm a skilled webdesigner with experience in creating <br/>visualisiation of every website. Other skills are App Development and Data Analyse. </p>
            <Link><button className="btn"><img src={contactImg} alt="HireMe" className='btnImg'/>Hire me</button></Link>
        </div>
        <img src={bg} alt="profile" className="bg" />
    </section>
  )
}

export default Intro

