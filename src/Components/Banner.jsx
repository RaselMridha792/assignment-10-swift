import { Carousel } from "react-responsive-carousel";
import slider1 from "../assets/slider1.jpg";
import slider2 from "../assets/slider2.jpg";
import slider3 from "../assets/slider3.jpg";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Default styles

const Banner = () => {
  return (
    <div className="lg:h-[750px] mt-16">
      <Carousel
        showArrows={true}
        autoPlay={true}
        interval={3000}
        infiniteLoop={true}
        dynamicHeight={true}
        showThumbs={false} // Hides the thumbnail navigation
        showStatus={false}
      >
        <div>
          {/* <img className="lg:h-[800px] object-cover" src={slider2} alt="Slider 2" /> */}
          <div
            className="hero bg-cover bg-center lg:h-[750px] "
            style={{
              backgroundImage: `url(${slider2})`,
            }}
          >
            <div className="hero-overlay bg-opacity-30"></div>
            <div className="hero-content  text-neutral-content text-center">
              <div className="font-Bebas">
                <h1 className="mb-5 md:text-9xl text-4xl tracking-widest text-white font-bold">
                  YOU ARE ONLY <br /> YOUR{" "}
                  <span className="text-orange-500">LIMIT</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div>
          {/* <img className="lg:h-[800px] object-cover" src={slider2} alt="Slider 2" /> */}
          <div
            className="hero bg-cover bg-center lg:min-h-[750px] "
            style={{
              backgroundImage: `url(${slider1})`,
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content  text-neutral-content text-center">
              <div className="font-Bebas">
                <h1 className="mb-5 md:text-9xl text-4xl tracking-widest text-white font-bold">
                  RUN FAST <span className="text-orange-500"> RUN SLOW</span>{" "}
                  <br />
                  <span className="text-orange-500"> RUN FAIR </span> RUN CLOSE
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div>
          {/* <img className="lg:h-[800px] object-cover" src={slider2} alt="Slider 2" /> */}
          <div
            className="hero bg-cover bg-center lg:min-h-[750px] "
            style={{
              backgroundImage: `url(${slider3})`,
            }}
          >
            <div className="hero-overlay  bg-opacity-30"></div>
            <div className="hero-content  text-neutral-content text-center">
              <div className="font-Bebas">
                <h1 className="mb-5 md:text-9xl text-4xl tracking-widest text-white font-bold">
                  TAKE A WALK TO <br />{" "}
                  <span className="text-orange-500">WILD</span> SLIDE
                </h1>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
