import React, { useEffect } from 'react';
import './projetCard.scss';

function ProjetCard({ projet }) {
  return (
    <div className="projetCard">
      <img className="projetCard__sparkle" src="src/assets/img/sparkler (2).png" alt="" />
      {/* <span className="projetCard__id">{projet.id}</span> */}
      <a target="_blank" href={projet.github} rel="noreferrer">
        <h4>{projet.title}</h4>
        <img className="projetCard__img" src={projet.photo} alt="github link" />
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
