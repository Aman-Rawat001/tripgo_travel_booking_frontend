import React from "react";
import "./heroscreen.css";

const HeroScreen = () => {
  return (
    <div className="heroscreen flex justify-center items-center h-screen">
      <div className="text-center" style={{ backdropFilter: "blur(0px)" }}>
        <p className="upperPara text-3xl">Discover the</p>
        <p
          className="lowerPara text-7xl mb-5"
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
  );
};

export default HeroScreen;
