import { Fade } from "react-awesome-reveal";
import slider1 from "../assets/slider1.jpg";
import slider2 from "../assets/slider2.jpg";
import slider3 from "../assets/slider3.jpg";

const Banner = () => {
  return (
    <>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <div
            className="hero bg-cover bg-center md:min-h-screen"
            style={{
              backgroundImage: `url(${slider1})`,
            }}
          >
            <div className="hero-overlay  bg-opacity-30"></div>
            <div className="hero-content  text-neutral-content text-center">
              <div className="font-Bebas">
                <Fade direction="up">
                  <p className="md:text-4xl text-xl py-2 text-white">
                    Summer Special Edition
                  </p>
                </Fade>
                <Fade direction="down">
                  <h1 className="mb-5 md:text-9xl text-4xl tracking-widest text-white font-bold">
                    BELK ACTIVE
                  </h1>
                </Fade>
                <Fade direction="up">
                  <button className="btn bg-black border-none text-white hover:bg-orange-600 text-xl tracking-wide rounded-none">
                    Shop Now
                  </button>
                </Fade>
              </div>
            </div>
          </div>
          <div className="hidden md:flex absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <div
              className="hero bg-cover bg-center md:min-h-screen"
              style={{
                backgroundImage: `url(${slider2})`,
              }}
            >
              <div className="hero-overlay  bg-opacity-30"></div>
              <div className="hero-content  text-neutral-content text-center">
                <div className="font-Bebas">
                  <Fade direction="up">
                    <p className="md:text-4xl text-xl py-2 text-white">
                      thought the work
                    </p>
                  </Fade>
                  <Fade direction="down">
                    <h1 className="mb-5 md:text-9xl text-4xl tracking-widest text-white font-bold">
                      PROJECT ROCK
                    </h1>
                  </Fade>
                  <Fade direction="up">
                    <button className="btn bg-black border-none text-white hover:bg-orange-600 text-xl tracking-wide rounded-none">
                      Shop Now
                    </button>
                  </Fade>
                </div>
              </div>
            </div>
            <div className="hidden md:flex absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div className="hidden md:flex absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <div
              className="hero bg-cover bg-center md:min-h-screen"
              style={{
                backgroundImage: `url(${slider3})`,
              }}
            >
              <div className="hero-overlay  bg-opacity-30"></div>
              <div className="hero-content  text-neutral-content text-center">
                <div className="font-Bebas">
                  <Fade direction="up">
                    <p className="md:text-4xl text-xl py-2 text-white">
                      Support for every sports
                    </p>
                  </Fade>
                  <Fade direction="down">
                    {" "}
                    <h1 className="mb-5 md:text-9xl text-4xl tracking-widest text-white font-bold">
                      STAND OUT
                    </h1>
                  </Fade>
                  <Fade direction="up">
                    <button className="btn bg-black border-none text-white hover:bg-orange-600 text-xl tracking-wide rounded-none">
                      Shop Now
                    </button>
                  </Fade>
                </div>
              </div>
            </div>
            <div className="hidden md:flex absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div className="hidden md:flex absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
