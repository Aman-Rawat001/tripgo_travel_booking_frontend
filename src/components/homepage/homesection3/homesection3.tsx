import React from "react";
import "../homesection2/homesection2.css";

const HomeSection3 = () => {
  return (
    <>
      <div className="homesection2 py-[10rem] bg-[#F2FBFA]">
        <div className="content">
          <h3 className="text-center text-4xl font-semibold">
            Find Travel Perfection
          </h3>
          <p className="text-center text-gray-500 mt-4">
            An enim nullam tempor gravida donec enim congue magna at pretium
            purus pretium ligula
          </p>
          <p className="text-center text-gray-500 ">
            rutrum luctus risusd diam eget risus varius blandit sit amet non
            magna.
          </p>
        </div>
        <div className="cardsContainer my-10">
          <div
            className="card"
            style={{ padding: "1rem", paddingBottom: "5rem" }}
          >
            <div className="iconDiv" style={{ border: "none" }}>
              <img
                style={{ borderRadius: "5%" }}
                src="https://demo.ovatheme.com/tripgo/wp-content/uploads/2022/07/blog-05-768x500.jpg"
              />
            </div>
            <p className="font-semibold text-lg my-2 text-center">
              Introducing This Amazing Tour
            </p>
            <p className="text-center text-gray-600">
              Fully layered dolor sit amet, consectetur adipisicing elit.
              Facere, nobis, id expedita dolores officiis laboriosam.
            </p>
          </div>
          <div
            className="card md:mx-8 my-5 md:my-0"
            style={{ padding: "1rem", paddingBottom: "5rem" }}
          >
            <div className="iconDiv" style={{ border: "none" }}>
              <img
                style={{ borderRadius: "5%" }}
                src="https://demo.ovatheme.com/tripgo/wp-content/uploads/2022/07/blog-06-768x500.jpg"
              />
            </div>
            <p className="font-semibold text-lg my-2 text-center">
              How To Travel With Paper Map
            </p>
            <p className="text-center text-gray-600">
              Fully layered dolor sit amet, consectetur adipisicing elit.
              Facere, nobis, id expedita dolores officiis laboriosam.
            </p>
          </div>
          <div
            className="card"
            style={{ padding: "1rem", paddingBottom: "5rem" }}
          >
            <div className="iconDiv" style={{ border: "none" }}>
              <img
                style={{ borderRadius: "5%" }}
                src="https://demo.ovatheme.com/tripgo/wp-content/uploads/2022/07/blog-07-768x500.jpg"
              />
            </div>
            <p className="font-semibold text-lg my-2 text-center">
              Pack Wisely Before Traveling
            </p>
            <p className="text-center text-gray-600">
              Fully layered dolor sit amet, consectetur adipisicing elit.
              Facere, nobis, id expedita dolores officiis laboriosam.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSection3;
