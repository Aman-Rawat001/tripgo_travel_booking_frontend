import React from "react";
import Navbar from "../navbar/Navbar";
import HeroScreen from "./heroScreen/HeroScreen";
import HomeSection1 from "./homeSection1/HomeSection1";

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
    </div>
  );
};

export default Homepage;
