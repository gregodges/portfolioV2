import React, { useEffect } from 'react';
import './hobbies.scss'
import Fake from './CallMe';

import { gsap } from 'gsap';
import { ScrollTrigger, ScrollToPlugin, CSSRulePlugin } from 'gsap/all';


const Hobbies = () => {
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, CSSRulePlugin);
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const test = () =>{

let sections = gsap.utils.toArray(".hobbies__panel");
let hobbies = document.querySelector('.hobbies')

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1 ),
  ease:'none',
  scrollTrigger: {
    trigger: ".hobbies",
    pin: true,
    scrub: 1,
    end: () => "+="  + hobbies.offsetWidth
  }
  
})
gsap.to('.callMe__title',{
  opacity:1,
  duration:1,
  scrollTrigger:{
    trigger:'.callMe',
    scrub:true,
    start:'top top',
    end:'bottom center',
     toggleActions:'play reverse reverse resume', 
  }
})
gsap.to('.callMe__title',{
  position:'fixed',
  scrollTrigger:{
    trigger:'.callMe',
    pin:true,
    scrub:true,
    start:'top top',
    end:'+=200% center',
     toggleActions:'play reverse reverse resume', 
  }
})
gsap.to('.contact',{
  y:'0',
  scrollTrigger:{
    trigger:'.callMe',
    start:'top top',
    end:'bottom center',
    scrub:true,

  }
})



const photoFast = gsap.utils.toArray('.photoFast')
const photoSlow = gsap.utils.toArray('.photoSlow')
const photoMid = gsap.utils.toArray('.photoMid')

photoMid.forEach((pic)=>{
  gsap.to(pic,{
    x:-650,
    scrollTrigger:{
      trigger:'.hobbies__panel--pages',
      start:'80% 50%',
      end:'900% top',
      scrub:2
    }
  
  })
})

photoSlow.forEach((pic)=>{
  gsap.to(pic,{
    x:-200,
    scrollTrigger:{
      trigger:'.hobbies__panel--pages',
      start:'80% 50%',
      end:'900% top',
      scrub:1
    }
  
  })
})

photoFast.forEach((pic)=>{
  gsap.to(pic,{
    x:-800,
    scrollTrigger:{
      trigger:'.hobbies__panel--pages',
      start:'80% 50%',
      end:'900% top',
      scrub:0
    }
  
  })
})
;}

useEffect(()=>{
  setTimeout(() => {
  test()

    
  }, 3000);
},[])


  return (
    <div className='hobbies'>
    <section className='hobbies__panel'>
      <h2 className='hobbies__panel__title'>Me Myself et Je</h2>
    </section>
    <section className='hobbies__panel hobbies__panel--pages'>
        <img className='hobbies__panel__photo photo1 photoFast' src="src/assets/img/CNV000016.png" alt="" />
        <img className='hobbies__panel__photo photo2 photoMid' src="src/assets/img/CNV000018.png" alt="" />
        <img className='hobbies__panel__photo photo3 photoSlow' src="src/assets/img/CNV000029&.png" alt="" />
        <img className='hobbies__panel__photo photo4 photoMid' src="ssrc/assets/img/CNV000013.png" alt="" />
        <img className='hobbies__panel__photo photo5 photoSlow' src="src/assets/img/CNV000015.png" alt="" />
        <img className='hobbies__panel__photo photo6 photoFast' src="src/assets/img/CNV000026.png" alt="" />
    </section>
    <section className='hobbies__panel'>
    <img className='hobbies__panel__photo photo1 photoFast' src="src/assets/img/1302-02a.JPG" alt="" />
        <img className='hobbies__panel__photo photo5 photoSlow' src="ssrc/assets/img/1302-14a.JPG" alt="" />
        <img className='hobbies__panel__photo photo3 photoSlow' src="src/assets/img/1302-18a.JPG" alt="" />
        <img className='hobbies__panel__photo photo4 photoMid' src="src/assets/img/1303-06a.JPG" alt="" />
        <img className='hobbies__panel__photo photo2 photoFast' src="src/assets/img/000008.JPG" alt="" />
        <img className='hobbies__panel__photo photo6 photoMid' src="src/assets/img/001025280010.jpg" alt="" />
    </section>
    <section className='hobbies__panel'>
    <img className='hobbies__panel__photo photo1 photoFast' src="src/assets/img/G (3).jpg" alt="" />
        <img className='hobbies__panel__photo photo5 photoSlow' src="src/assets/img/G (66).jpg" alt="" />
        <img className='hobbies__panel__photo photo3 photoSlow' src="src/assets/img/G (106).jpg" alt="" />
        <img className='hobbies__panel__photo photo4 photoMid' src="src/assets/img/G (120).jpg" alt="" />
        <img className='hobbies__panel__photo photo2 photoFast' src="src/assets/img/CNV000030.png" alt="" />
        <img className='hobbies__panel__photo photo6 photoMid' src="src/assets/img/CNV000026.png" alt="" />
    </section>
    <section className='hobbies__panel test '>
      <h2 className='hobbies__panel__stillScrolling'>STILL SCROLLING ?</h2>
    </section>
  
    
      
    </div>
  );
};

export default Hobbies;