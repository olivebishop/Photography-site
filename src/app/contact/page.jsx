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

      <div className="gallery  bg-black transition overflow-x-hidden relative scroll-smooth overflow-auto">
        {/* page transition */}
        <div className="cover fixed top-0 cover1"></div>
        <div className="cover fixed top-0 cover2"></div>
        <div className="cover fixed top-0 cover3"></div>

        <div>
          {/* navigation bar */}
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
              className="hidden lg:bg-transparent bg-black top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto"
              id="navigation"
            >
              <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto text-sm w-full lg:items-center items-start flex flex-col text-center lg:h-auto">
                <a
                  href="/"
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
                <h1 className="mode text-mono z-10 font-extrabold">Contacts</h1>
              </a>
              <a href="/experience" className="mode pt-3 z-10">
                Experience
              </a>
            </div>
            <a
              href="/about"
              className="fixed md:left-6 z-10 bottom-2 pt-3 text-right"
            >
              About
            </a>
            <a
              href=""
              className="fixed md:right-6 right-4 z-10 bottom-2 pt-3 text-right"
            >
              nife@yahoo.com
            </a>
          </main>
        </div>

        {/* fixed contacts section */}
        <div className="about-me m-1 grid md:grid-cols-2 gallery1 grid-cols-1 lg:grid-cols-2">
          <div className="about-info md:p-6 p-2 lg:pt-7">
            <h1 className="font-bold">NIFE</h1>
            <h1 className="md:text-3xl font-bold text-2xl js-show-on-scroll">
              PORTRAITS ARE MY FAVORITE THING TO DO. THERE'S SOMETHING BEAUTIFUL
              ABOUT CAPTURING A PERSON'S UNIQUENESS IN A PHOTOGRAPH.
            </h1>
          </div>
          <div className="about-image">
            <img
              className="w-full md:h-20 h-16 object-cover"
              src="/assets/cat.jfif"
              alt="Cat"
            />
          </div>
        </div>
        <div>
          <h1 className="text-8xl md:text-7xl lg:text-8xl leading-none font-bold md:text-left text-center">
            GET IN <br />TOUCH
          </h1>
        </div>
        <div className="about-me grid md:grid-cols-2 m-1 grid-cols-1 lg:grid-cols-2">
          <div className="about-info md:p-5 p-4 lg:pt-7">
            <div className="flex gap-3">
              <h1 className="font-bold text-3xl">Twitter</h1>
              <h1 className="text-3xl font-bold">Facebook</h1>
            </div>
            <h1 className="font-bold pt-4 text-6xl text-mono">08093176<br/>796.</h1>
            <h3 className="font-bold pt-3">Lagos Nigeria</h3>
            <h3 className="font-bold text-4xl pt-5">Question?</h3>
            <div className="pt-4">
              <form
                className="grid md:grid-cols-2 grid-cols-1"
                action="/action_page.php"
              >
                <div>
                  <label htmlFor="name">your name</label>
                  <input
                    className=" bg-transparent w-full md:w-25 border-b-2 border-wind"
                    type="text"
                    id="name"
                    name="name"
                    value=""
                  />
                  <br />
                </div>
                <div className="mt-4 md:mt-0">
                  <label className="" htmlFor="Email">Email:</label>
                  <input
                    className="md:w-25 w-full bg-transparent border-b-2 border-wind"
                    type="text"
                    id="message"
                    name="message"
                    value=""
                  />
                  <br />
                  <br />
                </div>
                <div>
                  <label className="" htmlFor="Email">message:</label>
                  <input
                    className="w-full bg-transparent border-b-2 border-wind"
                    type="text"
                    id="message"
                    name="message"
                    value=""
                  />
                  <br />
                  <br />
                </div>
                <div>
                  <input type="submit" value="Submit" />
                </div>
              </form>
            </div>
          </div>
          <div className="about-image">
            <img
              className="w-full md:h-20 h-16 object-cover"
              src="/assets/cat.jfif"
              alt="Cat"
            />
          </div>
        </div>
      </div>
    </>
  );
};


export default Home;
