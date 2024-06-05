import React from "react";
import "./heroscreen.css";

const HeroScreen = () => {
  return (
    <div className="heroscreen flex justify-center items-center h-screen">
      <div className="text-center" style={{ backdropFilter: "blur(5px)" }}>
        <p className="upperPara text-3xl">Discover the</p>
        <p className="lowerPara text-7xl mb-5">Most Engaging Places</p>
      </div>
    </div>
  );
};

export default HeroScreen;
