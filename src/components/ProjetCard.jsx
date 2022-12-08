import React, { useEffect } from 'react';
import './projetCard.scss';
import sparkle from '../assets/img/sparkle.png';

function ProjetCard({ projet }) {
  return (
    <div className="projetCard">
      <img className="projetCard__sparkle" src={sparkle} alt="icon" />
      <a target="_blank" href={projet.github} rel="noreferrer">
        <h4>{projet.title}</h4>
        <img className="projetCard__img" src={projet.photo} alt="projet" />
      </a>
      <p>{projet.txt}</p>
      <div className="stacks">
        {projet.stack
          .map((el, id) => (
            <span key={id} className="stack">{el}</span>
          ))}
      </div>
    </div>
  );
}

export default ProjetCard;
