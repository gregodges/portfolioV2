import React, { useEffect, useState } from 'react';
import './projects.scss'
import data from '../data'
import ProjetCard from './ProjetCard';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ScrollToPlugin } from "gsap/all";
import { CSSRulePlugin } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, CSSRulePlugin);
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);






const Projects = () => {
  const [projects, setProjects] = useState([]);
  const cardFade = () => {
  let cards = gsap.utils.toArray(".projetCard");
cards.forEach((card, index)=>{
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: card,
      start:"top 70%",
      toggleActions:"play none none resume",
      end: "68% 68%",
      }
  });
  tl.to(card, {
    opacity:1,
    y:0
    });
  });
    }
const projectTitlefade = () =>{
  gsap.timeline().to('.projects__title', {
    opacity:1,
    y:0,
    scrollTrigger:{
      trigger: ' .projects__title',
      start:'top 70%',
      end : 'center 60%',
      scrub: 0,
      toggleActions: 'play none none pause'

    }
  })
}
   


  useEffect(()=>{
    setProjects(data)
  },[])


  useEffect(()=>{
    setTimeout(() => {
      cardFade()
      projectTitlefade()
    }, 1000);
  },[])


  return (
    <div id='projects' className='projects'>
  <h2 className='projects__title'>projets</h2>
      {projects.map((proj, id)=>(
        <ProjetCard key={id} projet={proj}/>
      ))}
      
    </div>
  );
};

export default Projects;