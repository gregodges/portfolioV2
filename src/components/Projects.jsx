import React, { useEffect, useState } from 'react';
import './projects.scss';
import { gsap } from 'gsap';
import { ScrollTrigger, ScrollToPlugin, CSSRulePlugin } from 'gsap/all';
import ProjetCard from './ProjetCard';
import data from '../data';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, CSSRulePlugin);
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function Projects() {
  const [projects, setProjects] = useState([]);
  const cardFade = () => {
    const cards = gsap.utils.toArray('.projetCard');
    cards.forEach((card, index) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
          toggleActions: 'play none none resume',
          end: '68% 68%',

        },
      });
      tl.to(card, {
        opacity: 1,
        y: 0,
        duration: 0.6,
      });
    });
  };
  const projectTitlefade = () => {
    gsap.timeline().to('.projects__title', {
      opacity: 1,
      y: 0,
      scrollTrigger: {
        trigger: ' .projects__title',
        start: 'top 70%',
        end: 'center 60%',
        scrub: 0,
        toggleActions: 'play none none pause',

      },
    });
  };

  useEffect(() => {
    setProjects(data);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      cardFade();
      projectTitlefade();
    }, 1000);
  }, []);

  return (
    <div id="projects" className="projects">
      <h2 className="projects__title">projets</h2>
      <div className="projects__card__container">
        {projects.map((proj, id) => (
          <ProjetCard key={id} projet={proj} />
        ))}
      </div>

    </div>
  );
}

export default Projects;
