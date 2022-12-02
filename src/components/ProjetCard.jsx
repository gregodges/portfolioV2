import React, { useEffect } from 'react';
import './projetCard.scss'



const ProjetCard = ({ projet }) => {
 
  return (
    <div className='projetCard'>
    <span className='projetCard__id'>{projet.id}</span>
      <a target="_blank" href={projet.github}>
      <h4>{projet.title}</h4>
      <img src={projet.photo} alt="github link" />
      </a>
      <p>{projet.txt}</p>
      <div className="stacks">
      {projet.stack
      .map((el, id)=>(
        <span key={id} className="stack">{el}</span>
      ))}
      </div>
    </div>
  );
};

export default ProjetCard;