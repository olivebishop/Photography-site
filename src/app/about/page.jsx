import Head from 'next/head';

const Home = () => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Bebas+Neue&family=Cormorant+Garamond:wght@300&family=Monoton&family=Montserrat+Alternates:wght@100&family=Roboto+Flex:opsz,wght@8..144,100&family=Roboto:wght@100&family=Teko:wght@300&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/css/tailwind.css" />
        <script src="https://kit.fontawesome.com/3b9e2cc044.js" crossOrigin="anonymous"></script>
        <link href="https://fonts.googleapis.com/css?family=Raleway:800" rel="stylesheet" type="text/css" />
        <title>NIFEMI portfolio</title>
      </Head>

      <div className="gallery transition overflow-x-hidden relative scroll-smooth  overflow-auto">

        <div className="cover fixed top-0 cover1"></div>
        <div className="cover fixed top-0 cover2"></div>
        <div className="cover fixed top-0 cover3"></div>

        <div>
          {/* navigation bar */}
          <nav id="home" className="flex header items-center fixed w-full  z-10 lg:p-6 lg:pt-2 flex-wrap">
            <a href="#" className="p-2 mr-4  inline-flex  items-center">
              <span className="text-4xl yup  font-bold uppercase tracking-wide">N.A</span>
            </a>
            <button
              className="link inline-flex p-3 hover:bg-gray-900 rounded lg:hidden ml-auto hover:text-white outline-none nav-toggler"
              data-target="#navigation"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <div className="hidden md:bg-transparent bg-black top-navbar  w-full lg:inline-flex lg:flex-grow lg:w-auto" id="navigation">
              <div className="lg:inline-flex z-10 lg:flex-row text-center  lg:ml-auto lg:w-auto text-sm w-full lg:items-center items-start flex flex-col lg:h-auto">
                <a href="/" className="lg:inline-flex link lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white">
                  <span>HOME</span>
                </a>
                <a href="#about" className="lg:inline-flex link lg:w-auto w-full  px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white">
                  <span>ABOUT</span>
                </a>
                <a href="#skills" className="lg:inline-flex lg:w-auto link w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white">
                  <span>PORTRAITS</span>
                </a>
              </div>
            </div>
          </nav>

          {/* main page */}
          <main className="lg:p-6 p-3 lg:pt-7 md:pt-7 pt-7">
            <div className="fixed top-7 md:left-6 z-10">
              <a href="/contact">
                <h1 className="mode  z-10 font-extrabold">Contacts</h1>
              </a>
              <a href="/experience" className="mode pt-3 z-10">experienec</a>
            </div>
            <a href="/about" className="fixed md:left-6 z-10 bottom-2 pt-3 text-mono text-right">About</a>
          </main>
        </div>

        {/* ABOUT page */}
        <div className="about-me grid md:grid-cols-2  m-3 grid-cols-1 bg-black lg:grid-cols-2">
          <div className="about-image">
            <img className="w-full h-30  js-show-on-scroll object-cover" src="assets/nife-dark.jpg" alt="Nife Dark" />
          </div>
          <div className="about-info md:p-6 p-2 lg:pt-7">
            <h1 className="text-4xl font-bold js-show-on-scroll">ABOUT ME</h1>
            <h1 className="font-bold">NIFE</h1>
            <h1 className="lg:text-3xl text-2xl font-bold">
              I am Ayoola Oluwanifemi. A photographer and image retoucher. I am particular about monochromatic photography, and creating images that expresses the humanity of the moment.
            </h1>
          </div>
        </div>
      </div>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.1/gsap.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>
      <script src="index.js"></script>
    </>
  );
};

export default Home;
