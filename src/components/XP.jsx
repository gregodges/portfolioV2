import React, { useEffect, useState } from 'react';
import './XP.scss';
import { gsap } from 'gsap';
import { ScrollTrigger, ScrollToPlugin, CSSRulePlugin } from 'gsap/all';
import { XPProMain } from '../data';
import XPCard from './XPCard';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, CSSRulePlugin);
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function XP() {
  const [xpPro, setXpPro] = useState();
  const windowX = window.innerWidth;

  const cardFadeDesktop = () => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.xpCard',
        start: 'top 60%',
        end: 'bottom 1%',
      },
    });
    tl.to('.xpCard', {
      opacity: 1,
      stagger: 0.2,
    });
  };

  const cardFade = () => {
    const card = gsap.utils.toArray('.xpCard');
    card.forEach((item) => {
      const tl = gsap.timeline({

        scrollTrigger: {
          trigger: item,
          start: 'top 90%',
          end: 'bottom 1%',
          scrub: 0.3,
        },
      });
      tl.to(item, {
        opacity: 1,
        scale: 1,
      })
        .to(item, {
          opacity: 0,
          scale: 0,
          y: 50,
        });
    });
  };
  {
    windowX < 800

      ? useEffect(() => {
        setTimeout(() => {
          setXpPro(XPProMain);

          cardFade();
        }, 1000);
      }, [])

      : useEffect(() => {
        setTimeout(() => {
          setXpPro(XPProMain);
          cardFadeDesktop();
        }, 1000);
      }, []);
  }

  return (
    <div className="workXp">
      <h2 className="workXp__title ">Before </h2>
      <div className="workXp__card__container">
        {XPProMain
          .map((el, id) => (
            <XPCard key={id} data={el} />
          ))}
      </div>
    </div>
  );
}

export default XP;
