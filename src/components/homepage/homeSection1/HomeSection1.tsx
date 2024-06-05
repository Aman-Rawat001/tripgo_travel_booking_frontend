import React, { useState } from "react";
import img from "../../../assets/headerimage.jpg";

const dummyData = [
  {
    imageURL: "https://example.com/image1.jpg",
    title: "Exciting Adventure in the Mountains",
    city: "Mountain Town",
    price: "$500",
    days: 5,
  },
  {
    imageURL: "https://example.com/image2.jpg",
    title: "Relaxing Beach Getaway Here Hello",
    city: "Beachside Resort",
    price: "$700",
    days: 7,
  },
  {
    imageURL: "https://example.com/image3.jpg",
    title: "Cultural Exploration in the City New",
    city: "Metropolis",
    price: "$400",
    days: 4,
  },
  {
    imageURL: "https://example.com/image4.jpg",
    title: "Safari Adventure in the Wilderness",
    city: "Safari Camp",
    price: "$900",
    days: 6,
  },
];

const HomeSection1 = () => {
  const [data, setData] = useState(dummyData);

  return (
    <>
      <div className="homeSection1 my-5 mt-10 bg-gray">
        <div className="section1Text ">
          <h4 className="text-4xl font-semibold">Discover Weekly</h4>
          <p className="my-3 mb-10">
            An enim nullam tempor sapien gravida donec enim ipsum
          </p>
        </div>
        <div className="imageContent flex items-center justify-between">
          {data.map((item, index) => {
            return (
              <div className="imageContentCard shadow-lg rounded-lg overflow-hidden mx-3 rounded-md">
                <div className="relative">
                  <img src={img} className="w-100% h-100%" />
                  <div className="timer flex items-center justify-between">
                    <div>
                      <svg
                        className="h-8 w-4 mr-2 text-green-500"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        {" "}
                        <circle cx="12" cy="12" r="10" />{" "}
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                    </div>
                    <div className="text-sm text-gray-500 text-green-500">
                      {item.days} days
                    </div>
                  </div>
                </div>
                <div className="px-4 py-2 mt-3">
                  <h4 className="text-lg font-semibold">{item.title}</h4>
                  <p className="text-sm text-gray-600">
                    <div className="flex items-center justify-left">
                      <div>
                        <svg
                          className="h-8 w-4 mr-1 text-red-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <div>{item.city}</div>
                    </div>
                  </p>
                </div>
                <div className="flex items-center justify-between  px-4 py-2">
                  <p className="text-lg font-semibold text-gray-800">
                    {item.price}{" "}
                    <span
                      className="text-sm"
                      style={{ color: "gray", textDecoration: "line-through" }}
                    >
                      $2900
                    </span>
                  </p>
                  <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    Explore
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-center my-8">
          <div>
            <button
              style={{
                backgroundColor: "white",
                color: "red",
                border: "1px solid red",
              }}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded "
            >
              Explore All
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSection1;
