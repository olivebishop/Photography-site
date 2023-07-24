"use client"
import React, { useEffect } from 'react';
import gsap from 'gsap';
import Swiper from 'swiper';

//import './'; // Import the Swiper CSS
import '../../../public/css/gsap.css'; // Import the gsap CSS


const TokyoStreetGallery = () => {
  useEffect(() => {
    // GSAP animations
    // Add your GSAP animations here if needed
    // For example:
    // gsap.from('.header', { duration: 1, y: '-100%', ease: 'bounce' });

    // Swiper initialization
    new Swiper('.swiper-container', {
      // Add your Swiper configuration here
      slidesPerView: 'auto',
      spaceBetween: 30,
      centeredSlides: true,
      mousewheel: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }, []);

  return (
    <div className="bg-black">
      <div className="transition overflow-x-hidden relative scroll-smooth overflow-auto">
        <div className="cover fixed top-0 cover1"></div>
        <div className="cover fixed top-0 cover2"></div>
        <div className="cover fixed top-0 cover3"></div>

        <div className="image-bg object-none">
          <nav id="home" className="flex header items-center fixed w-full z-10 lg:p-6 lg:pt-2 flex-wrap">
            <a href="#" className="p-2 mr-4 inline-flex items-center">
              <span className="text-4xl yup text-white font-bold uppercase tracking-wide">N.A</span>
            </a>
            <button
              className="link inline-flex p-3 hover:bg-gray-900 rounded lg:hidden ml-auto text-white outline-none nav-toggler"
              data-target="#navigation"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div className="hidden bg-black top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto" id="navigation">
              <div className="lg:inline-flex z-10 lg:flex-row text-white text-center lg:ml-auto lg:w-auto text-sm w-full lg:items-center items-start flex flex-col lg:h-auto">
                <a
                  href="#"
                  className="lg:inline-flex link lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
                >
                  <span>HOME</span>
                </a>
                <a
                  href="#about"
                  className="lg:inline-flex link lg:w-auto w-full  px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
                >
                  <span>ABOUT</span>
                </a>
                <a
                  href="#skills"
                  className="lg:inline-flex lg:w-auto link w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
                >
                  <span>PORTRAITS</span>
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <div className="wrapper">
        <div className="fixed top-7 left-3 z-10 md:left-6">
          <a href="contacts.html">
            <h1 className="mode text-mono font-extrabold">Contacts</h1>
          </a>
          <a href="/experience" className="mode pt-3 text-white z-10">
            Experience
          </a>
        </div>
        <a href="/about" className="fixed text-white left-3 md:left-6 z-10 bottom-2 pt-3 text-right">
          About
        </a>

        {/* BG TEXT */}
        <div className="bg-text absolute">
          <h1 className="text-center text-transparent">NIFEMI-AYOOLA</h1>
        </div>

        {/* SLIDER */}
        <div className="swiper-container mt-7 w-full absolute">
          <div className="swiper-wrapper">
            {/* Replace the content below with your images and data */}
            <div className="swiper-slide w-25 lg:w-35">
              <div className="slide-number">
                <p>
                  <span>001</span>
                </p>
              </div>
              <div className="slide-text">
                <h4>
                  <span>tokyotr3</span>
                </h4>
              </div>
              <div className="slide-img w-full h-full object-contain bg-cover"></div>
            </div>
            {/* ... Add more slides as needed */}
            
          </div>
          {/* Add pagination if needed */}
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </div>
  );
};

export default TokyoStreetGallery;
