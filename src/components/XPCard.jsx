import React from 'react';
import './XPCard.scss'
const XPCard = ({ data }) => {
  return (

      <div  className="xpCard">
          <h5 className='xpCard__title'>{data.title}</h5>
          <div className="xpCard__pills">
          <span className="xpCard__pills__company">{data.entreprise}</span> 
          <span className="xpCard__pills__years">{data.years}</span>
          </div>
          <img className='xpCard__icon' src="src/assets/img/star (5).png" alt="" />
          <p className="xpCard__description">{data.txt}</p>
          <div className="xpCard__skills__container">
          <p className='xpCard__skills underline'> Skills développées :</p>
          {data.skills.map((skill,id)=>(
            <li className='xpCard__skills' key={id}>{skill}</li>))}
            </div>
        </div>
  );
};

export default XPCard;