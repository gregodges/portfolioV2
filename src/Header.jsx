import React, { useState, useEffect, useRef } from 'react';
import './header.scss'
import { NavLink } from 'react-router-dom';



const Header = () => {




  return (
    <div  className='header'>
      <h1 className='header__title'>
      <div className="upperLetter">
      <span className="header__title__letter">H</span>
      <span className="header__title__letter">e</span>
      <span className="header__title__letter">l</span>
      <span className="header__title__letter">l</span>
      <span className="header__title__letter">o,</span>
      </div>
      <div className="lowerLetter">
      <span className="header__title__letter">H</span>
      <span className="header__title__letter">e</span>
      <span className="header__title__letter">l</span>
      <span className="header__title__letter">l</span>
      <span className="header__title__letter">o,</span>
      </div>

      </h1>
      <p className='header__description'>Je m'appelle Greg, futur developpeur web fullstack, en formation à la <span className='header__description-wild'>Wild Code School</span>.
         Je recherche une <NavLink to='/infoalternance'> <span className='header__description-alternance'>alternance</span> </NavLink> à partir de Mars 2023.</p>
    </div>
  );
};

export default Header;