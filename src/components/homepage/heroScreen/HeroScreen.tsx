import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./heroscreen.css";

const HeroScreen = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    // pauseOnHover: true,
  };

  return (
    <div className="heroscreen-container h-screen">
      <Slider {...settings}>
        <div className="heroscreen-slide1 pt-[15rem]">
          <div className="text-center" style={{ backdropFilter: "blur(0px)" }}>
            <p className="upperPara text-3xl">Discover the hidden Gems</p>
            <p
              className="lowerPara text-5xl text-7xl mb-5"
              style={{
                color: "white",
                textShadow: "2px 2px black",
                fontWeight: "600",
              }}
            >
              Most Engaging Places
            </p>
          </div>
        </div>
        <div className="heroscreen-slide2 pt-[15rem]">
          <div className="text-center" style={{ backdropFilter: "blur(0px)" }}>
            <p className="upperPara text-3xl">Explore the World</p>
            <p
              className="lowerPara  lg:text-7xl text-5xl mb-5"
              style={{
                color: "white",
                textShadow: "2px 2px black",
                fontWeight: "600",
              }}
            >
              Hidden Gems Located In World
            </p>
          </div>
        </div>
        <div className="heroscreen-slide3 pt-[15rem]">
          <div className="text-center" style={{ backdropFilter: "blur(0px)" }}>
            <p className="upperPara text-3xl">Explore the World</p>
            <p
              className="lowerPara text-5xl text-7xl mb-5"
              style={{
                color: "white",
                textShadow: "2px 2px black",
                fontWeight: "600",
              }}
            >
              Hidden Gems Located In World
            </p>
          </div>
        </div>
        {/* Add more slides as needed */}
      </Slider>
    </div>
  );
};

export default HeroScreen;
