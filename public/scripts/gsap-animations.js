import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

document.addEventListener('DOMContentLoaded', () => {
  gsap.from('header', { duration: 1, y: -50, opacity: 0 });
  gsap.from('.hero-text', { duration: 1, x: -100, opacity: 0 });
  gsap.from('.hero img', { duration: 1, x: 100, opacity: 0 });

  const sections = document.querySelectorAll('main section');
  sections.forEach((section, index) => {
    gsap.from(section, { 
      duration: 1, 
      x: index % 2 === 0 ? -100 : 100, 
      opacity: 0, 
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });
  });
});
