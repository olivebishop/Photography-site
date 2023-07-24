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
        <title>NIFEMI portfolio</title>
      </Head>

      <div className="gallery transition overflow-x-hidden relative scroll-smooth overflow-auto">
        <div className="cover fixed top-0 cover1"></div>
        <div className="cover fixed top-0 cover2"></div>
        <div className="cover fixed top-0 cover3"></div>

        <div>
          <nav
            id="home"
            className="flex header items-center fixed w-full z-10 lg:p-6 lg:pt-2 flex-wrap"
          >
            <a href="#" className="p-2 mr-4 inline-flex items-center">
              <span className="text-4xl yup font-bold uppercase tracking-wide">
                N.A
              </span>
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
            <div
              className="hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto"
              id="navigation"
            >
              <div className="lg:inline-flex lg:bg-transparent bg-black lg:flex-row text-center lg:ml-auto lg:w-auto text-sm w-full lg:items-center items-start flex flex-col lg:h-auto">
                <a
                  href="#"
                  className="lg:inline-flex link lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
                >
                  <span>HOME</span>
                </a>
                <a
                  href="#about"
                  className="lg:inline-flex link lg:w-auto w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
                >
                  <span>ABOUT</span>
                </a>
                <a
                  href="/works"
                  className="lg:inline-flex lg:w-auto link w-full px-3 py-2 rounded text-gray-400 items-center justify-center hover:bg-gray-900 hover:text-white"
                >
                  <span>WORKS</span>
                </a>
              </div>
            </div>
          </nav>

          {/* fixed navigation */}
          <main className="lg:p-6 p-3 lg:pt-7 md:pt-7 pt-7">
            <div className="fixed top-7 md:left-6 z-10">
              <a href="/contact">
                <h1 className="mode  z-10 font-extrabold">Contacts</h1>
              </a>
              <a href="/experience" className="mode text-mono pt-3 z-10">
                Experience
              </a>
            </div>
            <a
              href="/about"
              className="fixed md:left-6 z-10 bottom-2 pt-3 text-right"
            >
              about
            </a>
          </main>
        </div>

        {/* experience */}
        <div className="grid md:grid-cols-3 grid-cols-1 p-3 gap-3 lg:p-2">
          <div className="image2 md:col-span-3 lg:col-span-2 ...">
            <h1 className="text-5xl font-bold md:text-8xl js-show-on-scroll">
              EXPERIENCE
            </h1>
          </div>

          <div className="relative lg:row-span-3 md:row-span-2 ...">
            <img
              className="lg:h-full object-cover h-16 md:h-full w-full -z-10"
              src="/assets/indian2.webp"
              alt="Indian"
            />

            <div className="flex flex-shrink bg-black w-full absolute bottom-0">
              <h1
                data-target="56"
                className="text-7xl md:text-right lg:text-left hover:text-red font-bold"
              >
                01
              </h1>
              <div className="p-5 pl-2 js-show-on-scroll">
                <h1 className="font-bold">MAN & PINK</h1>
                <p>2021.</p>
              </div>
            </div>
            {/* end of text container insider the container */}
          </div>

          <div className="image2 md:col-span-2 md:row-span-2 lg:p-0 md:p-0 p-4 ... bg-black">
            <img
              className="object-cover js-show-on-scroll lg:w-full md:h-19 w-full"
              src="/assets/cat.jfif"
              alt="Cat"
            />

            {/* flex container for the text */}
            <div className="flex flex-shrink">
              <h1
                className="text-7xl md:text-right lg:text-left hover:text-red font-bold"
              >
                02
              </h1>
              <div className="p-5">
                <h1 className="font-bold">BOY BLACK & WHITE</h1>
                <p>2021, commercial photography</p>
              </div>
            </div>
            {/* end of text container insider the container */}
          </div>
        </div>

        <div className="grid bg-black md:grid-cols-2 md:gap-6 p-3 md:p-5">
          <div className="image1 b">
            <img
              className="h-10 md:h-19 w-full object-cover"
              src="/assets/nife-dark.jpg"
              alt="Nife"
            />
            {/* flex container for the text */}
            <div className="flex flex-shrink">
              <h1
                className="text-7xl md:text-right lg:text-left hover:text-red font-bold"
              >
                03
              </h1>
              <div className="p-5 js-show-on-scroll">
                <h1 className="font-bold">BOY BLACK & WHITE</h1>
                <p>2021, photography</p>
              </div>
            </div>
            {/* end of text container insider the container */}
          </div>

          <div className="image2 md:pt-18">
            <img
              className="h-25 w-full object-cover js-show-on-scroll"
              src="/assets/girlsad.jfif"
              alt="Girl"
            />
            {/* flex container for the text */}
            <div className="flex flex-shrink">
              <h1
                className="text-7xl md:text-right lg:text-left hover:text-red font-bold"
              >
                04
              </h1>
              <div className="p-5">
                <h1 className="font-bold">BOY BLACK & WHITE</h1>
                <p>2021, photography</p>
              </div>
            </div>
            {/* end of text container insider the container */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
