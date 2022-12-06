import React, { useEffect, useState } from 'react';
import './XP.scss';
import { gsap } from 'gsap';
import { ScrollTrigger, ScrollToPlugin, CSSRulePlugin } from 'gsap/all';
import { XPProSub, XPProMain } from '../data';
import xpCard from './XPCard'
import XPCard from './XPCard';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, CSSRulePlugin);
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function XP() {
  const [xpPro, setXpPro] = useState();
  const [xpSub, setXpSub] = useState();
  const cardFade = () => {
    const card = gsap.utils.toArray('.xpCard');
    card.forEach((item) => {
      const tl = gsap.timeline({

        scrollTrigger: {
          trigger: item,
          start: 'top 90%',
          end: 'bottom 1%',
          scrub: .3
        },
      });
      tl.to(item, {
        opacity: 1,
        scale: 1,
      })
        .to(item, {
          opacity: 0,
          scale: 0,
          y:50
        });
    });
  };

  useEffect(() => {
    setTimeout(() => {
      setXpPro(XPProMain);
      setXpSub(XPProSub);
      cardFade();
    }, 1000);
  }, []);

  return (
    <div className="workXp">
    <h2  className="workXp__title ">&::before</h2>
      {XPProMain
        .map((el, id) => (
          <XPCard key={id} data={el}/>
        ))}
    </div>
  );
}

export default XP;
