import React from "react";
import "./populardestination.css";
import redBanner from "../../../assets/RedBanner.png";

const PopularDestination = () => {
  return (
    <div className="popularDestinationParent pt-10">
      <div className="popularDestination py-10 bg-[#F2FBFA]">
        <div className="content text-center">
          <h3 className="text-4xl font-semibold">Popular Destinations</h3>
          <p className="text-gray-500 mt-4">
            An enim nullam tempor gravida donec enim congue magna at pretium
            purus pretium ligula
          </p>
          <p className="text-gray-500">
            rutrum luctus risusd diam eget risus varius blandit sit amet non
            magna.
          </p>
        </div>
        <div className="cardsContainer my-10 flex flex-col md:flex-row justify-center items-center">
          <div className="leftcard">
            <img
              src="https://demo.ovatheme.com/tripgo/wp-content/uploads/2022/07/destination-01.jpg"
              alt="Destination 1"
              className="rounded-lg mb-2 md:mb-0 md:mr-2 hover:shadow-md transition duration-300 ease-in-out"
            />
          </div>
          <div className="rightCard">
            <div>
              <img
                src="https://demo.ovatheme.com/tripgo/wp-content/uploads/2022/07/destination-03-636x306.jpg"
                alt="Destination 2"
                className="rounded-lg mb-2 md:mb-0 md:mr-2 hover:shadow-md transition duration-300 ease-in-out"
              />
            </div>
            <div className="flex flex-col md:flex-row">
              <img
                src="https://demo.ovatheme.com/tripgo/wp-content/uploads/2022/07/destination-02-306x306.jpg"
                alt="Destination 3"
                className="rounded-lg mb-2 md:mb-0 md:mr-2 md:flex-auto hover:shadow-md transition duration-300 ease-in-out"
              />
              <img
                src="https://demo.ovatheme.com/tripgo/wp-content/uploads/2022/07/destination-4-306x306.jpg"
                alt="Destination 4"
                className="rounded-lg md:flex-auto hover:shadow-md transition duration-300 ease-in-out"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="redBanner w-[100%]">
        <img src={redBanner} />
      </div>
    </div>
  );
};

export default PopularDestination;
