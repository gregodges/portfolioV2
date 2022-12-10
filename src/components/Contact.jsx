import React from 'react';
import './contact.scss';
import { NavLink } from 'react-router-dom';
import resume from '../assets/CV_LEDEZ_GREGORY.pdf'

function Contact() {
  return (
    <div className="contact">
      <ul className="contact__ul">
        <li className="contact__ul__li"><a href="mailto:ledez.greg@gmail.com">LEDEZ.GREG@GMAIL.COM</a></li>
        <li className="contact__ul__li"><a target="_blank" href="https://github.com/gregodges" rel="noreferrer">GITHUB/GREGODGES</a></li>
        <li className="contact__ul__li"><span>06-40-55-71-42</span></li>
        <NavLink to="./infoalternance">
          <li className="contact__ul__li"><span>F.A.Q</span></li>
        </NavLink>
      </ul>
      <div className="contact__socials">
        <a target="_blank" href="https://www.linkedin.com/in/ledezgregory/">LinkedIn</a>
        <a target="_blank" href={resume} >Curriculum</a>
      </div>

    </div>
  );
}

export default Contact;
