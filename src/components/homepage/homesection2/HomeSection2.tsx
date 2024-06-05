import React from "react";
import "./homesection2.css";

const HomeSection2 = () => {
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
          <div className="card">
            <div className="iconDiv">
              <svg
                className="h-8 w-8 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </div>
            <p className="font-semibold text-lg my-2 text-center">
              Share your travel preference
            </p>
            <p className="text-center text-gray-600">
              Fully layered dolor sit amet, consectetur adipisicing elit.
              Facere, nobis, id expedita dolores officiis laboriosam.
            </p>
          </div>
          <div className="card md:mx-8 my-5 md:my-0">
            <div className="iconDiv">
              <svg
                className="h-8 w-8 text-red-500"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <circle cx="7" cy="17" r="2" /> <circle cx="17" cy="17" r="2" />{" "}
                <path d="M5 17h-2v-6l2-5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5" />
              </svg>
            </div>
            <p className="font-semibold text-lg my-2 text-center">
              We’ll give you recommendations
            </p>
            <p className="text-center text-gray-600">
              Fully layered dolor sit amet, consectetur adipisicing elit.
              Facere, nobis, id expedita dolores officiis laboriosam.
            </p>
          </div>
          <div className="card">
            <div className="iconDiv">
              <svg
                className="h-8 w-8 text-red-500"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                {" "}
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <path d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" />
              </svg>
            </div>
            <p className="font-semibold text-lg my-2 text-center">
              Tell us what you want to do
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

export default HomeSection2;
