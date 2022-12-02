import React, {useEffect} from 'react';
import Header from '../Header';
import Projects from '../components/Projects';
import XP from '../components/XP';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ScrollToPlugin } from "gsap/all";
import { CSSRulePlugin } from 'gsap/all';
import '../header.scss';



const Home = () => {

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, CSSRulePlugin);
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  const alternanceBefore = CSSRulePlugin.getRule(".header__description-alternance::before")
  const headerTl =  gsap.timeline();
  
  const letterTitle = () =>{
    
    headerTl
    .to('.header__title__letter',
    
    {
      y: -150,
      opacity:1,
      stagger:0.03,
      duration:1.5,
      ease:'power4.inOut'
    }
    )
    .to('.header__description',
    
    {
      opacity: 1,
      y:-60,
      duration:.7
    }, '-=.60'
    )
    .to(alternanceBefore,
      {
        transform: 'scaleX(1)',
      }
      )   
    }

   
    

    
    useEffect(()=>{
      letterTitle()
      gsap.to('.header',{
        backgroundColor:'#bae4e5',
        y:'-100',
        opacity:0,
        scrollTrigger:{
          trigger:'.header',
          start: 'bottom bottom',
          end:'bottom top',
          scrub:true,
          pin:true,
        }
      })

    },[])

    
    return (
      <div>
      <Header/>
      <Projects/>
      <XP/>
    </div>
  );
};

export default Home;