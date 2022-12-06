import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger, ScrollToPlugin, CSSRulePlugin } from 'gsap/all';
import XP from '../components/XP';
import Projects from '../components/Projects';
import Header from '../Header';
import '../header.scss';
import Hobbies from '../components/Hobbies';
import StillScroll from '../components/CallMe'
import Contact from '../components/Contact';

const Home = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, CSSRulePlugin);
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  const alternanceBefore = CSSRulePlugin.getRule('.header__description-alternance::before');
  const windowX = window.innerWidth;
  
  const letterTitle = () => {


    const headerTl = gsap.timeline();
    headerTl
      .to(
        '.header__title__letter',
        {
          y: -250, 
          opacity: 1,
          stagger: 0.03,
          duration: 1.5,
          ease: 'power4.inOut',
        },
      )
      .to(
        '.header__description',

        {
          opacity: 1,
          y: -60,
          duration: 0.7,
        },
        '-=.60',
      )
      .to(
        alternanceBefore,
        {
          transform: 'scaleX(1)',
        },
      );
  };

  const letterTitleMobile = () => {
    const headerTl = gsap.timeline();
    headerTl
      .to(
        '.header__title__letter',
        {
          y: -150, 
          opacity: 1,
          stagger: 0.03,
          duration: 1.5,
          ease: 'power4.inOut',
        },
      )
      .to(
        '.header__description',

        {
          opacity: 1,
          y: -60,
          duration: 0.7,
        },
        '-=.60',
      )
      .to(
        alternanceBefore,
        {
          transform: 'scaleX(1)',
        },
      );
  };
  const bgChangeHeader = () => {
    gsap.to('.header', {
      backgroundColor: '#d0f1f1',
      y: '-100',
      opacity: 0,
      scrollTrigger: {
        trigger: '.header',
        start: 'bottom bottom',
        end: 'bottom top',
        scrub: true,
        pin: true,
      },
    });
  }
  
  const bgChangeXP = () => {
    const tl = gsap.timeline({
      scrollTrigger:{
        trigger:'.workXp',
        start:'top 20%',
        end :'top 1%',
        scrub:1
      }
    })
    tl.to('.projects', {
      backgroundColor:'#ffd8e3' 
    })
    .to('.workXp',{
      backgroundColor:'#ffd8e3' 
    }, 0)
    .to('.workXp__title',{
      x:0,
      opacity:1      
    })
    
    
  }

  const bgChangeHobbies = () => {
    const tl = gsap.timeline({
      scrollTrigger:{
        trigger:'.hobbies',
        start:'-=200 70%',
        end :'top 1%',
        scrub:1,
      }
    })
    tl.to('.workXp', {
      backgroundColor:'#FFFFC2'
    })
    .to('.hobbies',{
      backgroundColor:'#FFFFC2' 
    }, 0)
    
  }
  const hobbiesTitleFade = () =>{
    const tl = gsap.timeline({
      scrollTrigger:{
        trigger:'.hobbies',
        start: 'top 40%',
        end:'top 40%',

      }
    });
    tl.to('.hobbies__panel__title',{
      opacity:1,
      duration:1.5,
      y:0
    })
  }
  const hobbiesBgFade = () =>{
    const tl = gsap.timeline({
      scrollTrigger:{
        trigger:'.hobbies',
        start: 'bottom top',
        end:'+=200% top',
        scrub:true,

        markers:false
      }
    });
    tl.to('.hobbies__panel',{
      backgroundColor: 'rgb(32, 32, 32)'
    })
   
  }


  {windowX < 560 ? 
    useEffect(() => {
      letterTitleMobile();
      bgChangeHeader()
      bgChangeXP()
      bgChangeHobbies()
      hobbiesTitleFade()
      hobbiesBgFade()
    }, [])
    : 

    useEffect(() => {
      letterTitle();
      bgChangeHeader()
      bgChangeXP()
      bgChangeHobbies()
      hobbiesTitleFade()
      hobbiesBgFade()
    }, []);
    

  }

  return (
    <div>
      <Header />
      <Projects />
      <XP />
      <Hobbies/>
      <StillScroll/>
      <Contact/>
    </div>
  );
}

export default Home;
