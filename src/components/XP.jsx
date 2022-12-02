import React, { useEffect, useState } from 'react';
import './XP.scss'
import { XPProMain } from '../data';
import { XPProSub } from '../data';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ScrollToPlugin } from "gsap/all";
import { CSSRulePlugin } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, CSSRulePlugin);
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const XP = () => {
  const [xpPro, setXpPro] = useState();
  const [xpSub, setXpSub] = useState();
  const cardFade = () => {
    let card = gsap.utils.toArray('.test')
    card.forEach((item)=>{

      const testo = gsap.timeline({

        scrollTrigger:{
          trigger:item,
          start:'top 90%',
          end:'bottom 10%',
          scrub:true,
        }
       });
       testo.to(item,{
         opacity:1,
         scale:1
       })
       .to(item,{
         opacity:0,
         scale:0
       })
    })
 

  }
  useEffect(()=>{
    setTimeout(() => {
      setXpPro(XPProMain);
      setXpSub(XPProSub);
      cardFade()
    }, 1000);
  },[])


  return (
    <div className='workXp'>
      {XPProMain
      .map((el)=> (
        <h5 className='test'>{el.title}</h5>
      ))
      }
    </div>
  );
};

export default XP;