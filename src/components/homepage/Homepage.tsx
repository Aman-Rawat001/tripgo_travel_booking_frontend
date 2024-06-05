import React from "react";
import Navbar from "../navbar/Navbar";
import HeroScreen from "./heroScreen/HeroScreen";
import HomeSection1 from "./homeSection1/HomeSection1";
import HomeSection2 from "./homesection2/HomeSection2";
import counterImage from "../../assets/countingImage.png";
import counterImageMobile from "../../assets/countingImgMobile.png";
import "./homepage.css";
import PopularDestination from "./popularDestination/PopularDestination";
import Footer from "../footer/Footer";
import HomeSection3 from "./homesection3/homesection3";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <div>
        <HeroScreen />
        <div style={{ paddingLeft: "3rem", paddingRight: "3rem" }}>
          <HomeSection1 />
        </div>
      </div>
      <div
        style={{ paddingLeft: "3rem", paddingRight: "3rem" }}
        className="bg-[#F2FBFA]"
      >
        <HomeSection2 />
      </div>
      <img className="counterImage" src={counterImage} />
      <img className="counterImagemobile" src={counterImageMobile} />
      <PopularDestination />
      <div
        style={{ paddingLeft: "3rem", paddingRight: "3rem" }}
        className="bg-[#F2FBFA]"
      >
        <HomeSection3 />
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
