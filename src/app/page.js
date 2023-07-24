'use client'
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

    // Rest of your code for Swiper and other animations...
  }, []);

  const handleImageChange = (image) => {
    console.log("Clicked on image:", image);
    const bgchange = document.getElementById("bg-change");
    bgchange.style.backgroundImage = `url(assets/${image}.jfif)`;
    bgchange.style.transition = "all 2s";
  };
  

  return (
    <div
      id="bg-change"
      style={{ backgroundImage: 'url(assets/indian4.jpg)' }}
      className="gallery bg-cover bg-center object-none transition overflow-x-hidden relative scroll-smooth overflow-auto"
    >
      {/*page transition animation*/}
      <div style={{ backgroundImage: 'url(assets/blues.jfif)' }} className="cover bg-center object-none fixed top-0 cover1"></div>
      <div style={{ backgroundImage: 'url(assets/indian.jpg)' }} className="cover bg-center object-none fixed top-0 cover2"></div>
      <div style={{ backgroundImage: 'url(assets/girlonafro.jpeg)' }} className="cover bg-contain object-cover fixed top-0 cover3"></div>
      {/*end of page transition animation*/}

      <div className="">
        {/*navigation bar*/}
        <nav id="home" className="flex header items-center fixed w-full z-10 lg:p-6 lg:pt-2 flex-wrap">
          <a href="#" className="p-2 mr-4 inline-flex items-center">
            <span className="text-4xl yup font-bold uppercase tracking-wide">X.Graphik</span>
          </a>
          <button className="link inline-flex p-3 hover:bg-gray-900 rounded lg:hidden ml-auto hover:text-white outline-none nav-toggler" data-target="#navigation">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
          </button>
          <div className="hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto" id="navigation">
            <div className="lg:inline-flex lg:bg-transparent bg-black lg:flex-row text-center lg:ml-auto lg:w-auto text-sm w-full lg:items-center items-start flex flex-col lg:h-auto">
              <a href="#home" className="lg:inline-flex link lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white">
                <span>HOME</span>
              </a>
              <a href="/about" className="lg:inline-flex link lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white">
                <span>ABOUT</span>
              </a>
              <a href="/works" className="lg:inline-flex lg:w-auto link w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white">
                <span>WORKS</span>
              </a>
            </div>
          </div>
        </nav>
        {/* ... */}
      </div>

      {/*main page*/}
      <main className="lg:p-6 lg:pt-18 md:pt-18 p-2">
        <div className="fixed top-7 md:left-6 z-10">
          <a href="#">
            <h1 className="mode text-mono z-10 font-extrabold">Contact</h1>
          </a>
          <a href="/experience" className="mode pt-3 z-10">Experience</a>
        </div>
        {/*fixed onclick texts for image changer*/}
        <a href="/about" className="fixed md:left-6 z-10 bottom-2 pt-3 text-right">About</a>
        <div className="m z-10 font-bold fixed md:right-6 right-5 cursor-pointer bottom-2">
          <p id="click1" className="mode1 pt-4 hover:text-red" onClick={() => handleImageChange('blues')}>01</p>
          <p id="click2" className="mode1 pt-4 hover:text-red" onClick={() => handleImageChange('girlsad')}>02</p>
          
        </div>

        {/*about intro content*/}
        <div className="md:mt-0 mt-20 mb-20 lg:mb-5 md:mb-7">
          <h1 className="font-bold text-center">PHOTOGRAPHY</h1>
          <div className="lg:text-8xl md:text-7xl text-6xl text-center font-bold">
            <p>GRANDEX</p>
          </div>

          <div className="grid justify-center text-center relative p-5">
            <img id="style" className="w-20 hover:animate-spin" src="assets/rotate.PNG" />
            <a href="/works" className="absolute text-xs top-7 left-0 right-0 link2">
              MY WORKS
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Portfolio;
