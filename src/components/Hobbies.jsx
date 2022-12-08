import React, { useEffect } from 'react';
import './hobbies.scss';
import { gsap } from 'gsap';
import { ScrollTrigger, ScrollToPlugin, CSSRulePlugin } from 'gsap/all';
import photo1 from '../assets/img/parallax/000008.png'
import photo2 from '../assets/img/parallax/1302-02a.png'
import photo3 from '../assets/img/parallax/1302-14a.png'
import photo4 from '../assets/img/parallax/1302-18a.png'
import photo5 from '../assets/img/parallax/1303-06a.png'
// import photo6 from '../assets/img/parallax/001004030016.png'
import photo7 from '../assets/img/parallax/001025280010.png'
import photo8 from '../assets/img/parallax/CNV000007.png'
import photo9 from '../assets/img/parallax/CNV000013.png'
import photo10 from '../assets/img/parallax/CNV000015.png'
import photo11 from '../assets/img/parallax/CNV000016.png'
import photo12 from '../assets/img/parallax/CNV000018.png'
import photo13 from '../assets/img/parallax/CNV000026.png'
import photo14 from '../assets/img/parallax/CNV000029&.png'
import photo15 from '../assets/img/parallax/CNV000030.png'
import photo16 from '../assets/img/parallax/G (3).png'
import photo17 from '../assets/img/parallax/G (66).png'
import photo18 from '../assets/img/parallax/G (106).png'
import photo19 from '../assets/img/parallax/G (120).png'
// import photo20 from '../assets/img/parallax/G.png'




function Hobbies() {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, CSSRulePlugin);
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  const test = () => {
    const sections = gsap.utils.toArray('.hobbies__panel');
    const hobbies = document.querySelector('.hobbies');

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: 'none',
      scrollTrigger: {
        trigger: '.hobbies',
        pin: true,
        scrub: 1,
        end: () => `+=${hobbies.offsetWidth}`,
      },

    });
    gsap.to('.callMe__title', {
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: '.callMe',
        scrub: true,
        start: 'top top',
        end: 'bottom center',
        toggleActions: 'play reverse reverse resume',
      },
    });
    gsap.to('.callMe__title', {
      position: 'fixed',
      scrollTrigger: {
        trigger: '.callMe',
        pin: true,
        scrub: true,
        start: 'top top',
        end: '+=200% center',
        toggleActions: 'play reverse reverse resume',
      },
    });
    gsap.to('.contact', {
      y: '0',
      scrollTrigger: {
        trigger: '.callMe',
        start: 'top top',
        end: 'bottom center',
        scrub: true,

      },
    });

    const photoFast = gsap.utils.toArray('.photoFast');
    const photoSlow = gsap.utils.toArray('.photoSlow');
    const photoMid = gsap.utils.toArray('.photoMid');
    const subs = gsap.utils.toArray('.hobbies__panel__sub');

    subs.forEach((sub) => {
      gsap.to(sub, {
        x: -1150,
        scrollTrigger: {
          trigger: '.hobbies__panel--pages',
          start: '80% 50%',
          end: '900% top',
          scrub: 2,
        },

      });
    });

    photoMid.forEach((pic) => {
      gsap.to(pic, {
        x: -650,
        scrollTrigger: {
          trigger: '.hobbies__panel--pages',
          start: '80% 50%',
          end: '900% top',
          scrub: 2,
        },

      });
    });

    photoSlow.forEach((pic) => {
      gsap.to(pic, {
        x: -200,
        scrollTrigger: {
          trigger: '.hobbies__panel--pages',
          start: '80% 50%',
          end: '900% top',
          scrub: 1,
        },

      });
    });

    photoFast.forEach((pic) => {
      gsap.to(pic, {
        x: -800,
        scrollTrigger: {
          trigger: '.hobbies__panel--pages',
          start: '80% 50%',
          end: '900% top',
          scrub: 0,
        },

      });
    });
  };

  useEffect(() => {
    setTimeout(() => {
      test();
    }, 3000);
  }, []);

  return (
    <div className="hobbies">
      <section className="hobbies__panel">
        <h2 className="hobbies__panel__title">I also like</h2>
      </section>
      <section className="hobbies__panel hobbies__panel--pages">
        <img className="hobbies__panel__photo photo1 photoFast" src={photo11} alt="" />
        <img className="hobbies__panel__photo photo2 photoMid" src={photo12} alt="" />
        <h2 className="hobbies__panel__sub sub1">Design</h2>
        <img className="hobbies__panel__photo photo3 photoSlow" src={photo14} alt="" />
        <img className="hobbies__panel__photo photo4 photoMid" src={photo9} alt="" />
        <h2 className="hobbies__panel__sub sub 2 ">Sport</h2>
        <img className="hobbies__panel__photo photo5 photoSlow" src={photo10} alt="" />
        <img className="hobbies__panel__photo photo6 photoFast" src={photo13} alt="" />
      </section>
      <section className="hobbies__panel">
        <img className="hobbies__panel__photo photo1 photoFast" src={photo2} alt="" />
        <img className="hobbies__panel__photo photo5 photoSlow" src={photo3} alt="" />
        <h2 className="hobbies__panel__sub sub1">Cinema</h2>
        <img className="hobbies__panel__photo photo3 photoSlow" src={photo4} alt="" />
        <img className="hobbies__panel__photo photo4 photoMid" src={photo5} alt="" />
        <h2 className="hobbies__panel__sub sub2">Photography</h2>
        <img className="hobbies__panel__photo photo2 photoFast" src={photo8} alt="" /> // ici
        <img className="hobbies__panel__photo photo6 photoMid" src={photo7} alt="" />
      </section>
      <section className="hobbies__panel">
        <img className="hobbies__panel__photo photo1 photoFast" src={photo16} alt="" />
        <img className="hobbies__panel__photo photo5 photoSlow" src={photo17} alt="" />
        <img className="hobbies__panel__photo photo3 photoSlow" src={photo18} alt="" />
        <h2 className="hobbies__panel__sub sub1">Tech</h2>
        <img className="hobbies__panel__photo photo4 photoMid" src={photo19} alt="" />
        <img className="hobbies__panel__photo photo2 photoFast" src={photo15} alt="" />
        <img className="hobbies__panel__photo photo6 photoMid" src={photo1} alt="" />
      </section>
      <section className="hobbies__panel test ">
        <h2 className="hobbies__panel__stillScrolling">STILL SCROLLING ?</h2>
      </section>

    </div>
  );
}

export default Hobbies;
