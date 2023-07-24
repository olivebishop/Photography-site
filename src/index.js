import React, { useEffect } from 'react';
import gsap from 'gsap';
import Swiper from 'swiper';

const Portfolio = () => {
  useEffect(() => {
    // GSAP animations
    gsap.from('.header', { duration: 1, y: '-100%', ease: 'bounce' });
    gsap.from('.link', { duration: 2, opacity: 0, stagger: 0.4 });
    gsap.from('.right', { duration: 1, delay: 0.5, x: '100%' });
    gsap.from('.left', { duration: 1, delay: 0.5, x: '-100%' });

    // Hamburger toggle (assuming you have a state for toggling the menu in your component)
    const navTogglers = document.querySelectorAll('.nav-toggler');
    navTogglers.forEach((navToggler) => {
      const target = navToggler.getAttribute('data-target');
      navToggler.addEventListener('click', () => {
        document.querySelector(target).animate({ height: 'toggle' });
      });
    });

    // Swiper initialization
    const slider = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      spaceBetween: 150,
      centeredSlides: true,
      mousewheel: true,
    });

    slider.on('slideChange', () => {
      gsap.to('.slide-text span', 0.2, { y: '-100px' });
      gsap.to('.slide-number span', 0.2, { x: '-100px' });
      gsap.to('.swiper-slide-active', 0.5, { scale: 0.85 });
    });

    slider.on('slideChangeTransitionEnd', () => {
      gsap.to('.slide-text span', 0.2, { y: 0, delay: 0.5 });
      gsap.to('.slide-text span', 0, { y: '100px' });

      gsap.to('.slide-number span', 0.2, { x: 0, delay: 0.7 });
      gsap.to('.slide-number span', 0, { x: '100px' });

      gsap.to('.swiper-slide-active', 0.5, { scale: 1, ease: Power4.easeOut });

      gsap.to('.swiper-slide-active .slide-text', 0, { autoAlpha: 1 });
      gsap.to('.swiper-slide-active .slide-number', 0, { autoAlpha: 1 });

      gsap.to('.swiper-slide-next .slide-text', 0, { autoAlpha: 0 });
      gsap.to('.swiper-slide-prev .slide-text', 0, { autoAlpha: 0 });

      gsap.to('.swiper-slide-next .slide-number', 0, { autoAlpha: 0 });
      gsap.to('.swiper-slide-prev .slide-number', 0, { autoAlpha: 0 });
    });

    gsap.to('.swiper-slide-next .slide-text', 0, { autoAlpha: 0 });
    gsap.to('.swiper-slide-prev .slide-text', 0, { autoAlpha: 0 });

    gsap.to('.swiper-slide-next .slide-number', 0, { autoAlpha: 0 });
    gsap.to('.swiper-slide-prev .slide-number', 0, { autoAlpha: 0 });

    gsap.to('.swiper-slide', 0, { scale: 0.85 });

    gsap.to('.swiper-slide-active', 0, { scale: 1 });
  }, []);

  return (
    <div>
      {/* Your JSX code for the Portfolio component */}
      {/* ... */}
    </div>
  );
};

export default Portfolio;
