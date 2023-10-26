import React from 'react'
import './contact.css'
import Client1 from '../../assets/client1.png'
import Client2 from '../../assets/client2.png'
import Client3 from '../../assets/client3.png'
import Client4 from '../../assets/client4.png'
import Icon1 from '../../assets/icon1.png'
import Icon2 from '../../assets/icon2.png'
import Icon3 from '../../assets/icon3.png'
import Icon4 from '../../assets/icon4.png'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_plu07gi', 'template_9dgpemv', form.current, 'Ob-wrkI3_KN3rtIPJ1GnL')
          .then((result) => {
              console.log(result.text);
              alert('Email Send !')
              e.target.reset();
          }, (error) => {
              console.log(error.text);
          });
      };

  return (
    <section id="contactPage">
        <div id="clients">
            <h1 className="contactPageTitle">My Clients</h1>
            <p className="clientDesc">I work on a diverse sprid of projects.</p>
            <div className="clientImgs">
                <img src={Client1} alt="Client1" className="clientImg" />
                <img src={Client2} alt="Client2" className="clientImg" />
                <img src={Client3} alt="Client3" className="clientImg" />
                <img src={Client4} alt="Client4" className="clientImg" />
            </div>
        </div>
        <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
            <form className="contactForm" ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder='Your Name' name='your_name'/>
                <input type="email" className="email" placeholder='Your Email' name='your_email'/>
                <textarea className='msg' name="message"  rows="5" placeholder='Your message'></textarea>
                <button type='submit' value='send' className="submitBtn">Submit</button>
                <div className="links">
                    <img src={Icon1} alt="Icon" className="link" />
                    <img src={Icon2} alt="Icon" className="link" />
                    <img src={Icon3} alt="Icon" className="link" />
                    <img src={Icon4} alt="Icon" className="link" />
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact
