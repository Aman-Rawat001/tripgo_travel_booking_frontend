import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

type Package = {
  id: number;
  title: string;
  location: string;
  duration: string;
  price: string;
  rating: string;
  image: string;
  featured: boolean;
  description: string;
};

const PackageDetails: React.FC = () => {
  const { packageId } = useParams();
  // console.log("param:" + packageId);
  const navigate = useNavigate();

  const handleBookigConfirmation = () => {
    navigate("/bookingconfirmation");
  };

  useEffect(() => {
    axios.get(`http://localhost:8080/packages/${packageId}`).then((res) => {
      console.log(res.data);
    });
  }, []);

  return (
    <div className="container mx-auto p-4">
      {/* Header Section */}
      <div className="relative w-full h-64 md:h-96 mt-[8rem]">
        <img
          src="https://demo.ovatheme.com/tripgo/wp-content/uploads/2022/07/destination-03-636x306.jpg"
          alt="Explore History & Culture in London - 5 Days"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center p-4">
          <h1 className="text-3xl md:text-5xl font-bold">
            Explore History & Culture in London - 5 Days
          </h1>
        </div>
        <div className="absolute bottom-0 right-0 bg-white bg-opacity-75 p-2 m-2 rounded">
          <button className="text-blue-500">View Map</button>
        </div>
      </div>

      {/* Description Section */}
      <div className="mt-8 p-4">
        <p className="text-gray-700 mb-4">
          Kick off the itinerary with a ride around town on the Hop-on, Hop-off
          Bus, which stops at popular attractions like Big Ben, Piccadilly
          Circus, and the London Eye. Then you'll day-trip to Windsor Castle,
          moving on to Kensington Palace on day three. After a luxurious
          Afternoon Tea at the Savoy Hotel, learn about Black history in Brixton
          on a walking tour. Wrap up the trip with a visit to Hampton Court
          Palace, a tour of the British Museum, and a relaxed rooftop film
          screening with a local crowd at sunset.
        </p>
      </div>

      {/* Itinerary Section */}
      <div className="mt-8 p-4">
        <h2 className="text-2xl font-bold mb-4">Brief Itinerary</h2>
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Day
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Highlights
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Overnight
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Day 1</td>
              <td className="border border-gray-300 px-4 py-2">
                Arrive in London & Explore on Hop-on, Hop-off Bus
              </td>
              <td className="border border-gray-300 px-4 py-2">London</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Day 2</td>
              <td className="border border-gray-300 px-4 py-2">
                Day trip to Windsor Castle
              </td>
              <td className="border border-gray-300 px-4 py-2">London</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Day 3</td>
              <td className="border border-gray-300 px-4 py-2">
                Visit Kensington Palace & Have Afternoon Tea at the Savoy Hotel
              </td>
              <td className="border border-gray-300 px-4 py-2">London</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Day 4</td>
              <td className="border border-gray-300 px-4 py-2">
                Learn about Black history in Brixton
              </td>
              <td className="border border-gray-300 px-4 py-2">London</td>
            </tr>
            <tr>
              <td className="border border-gray-300 px-4 py-2">Day 5</td>
              <td className="border border-gray-300 px-4 py-2">
                Visit Hampton Court Palace & Tour of the British Museum
              </td>
              <td className="border border-gray-300 px-4 py-2">London</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <button
          onClick={handleBookigConfirmation}
          className="w-[100%] bg-red-600 hover:bg-red-[#DC2626] text-white font-bold py-2 px-4 rounded"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default PackageDetails;
