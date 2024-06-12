import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

type ItineraryItem = {
  day: string;
  title: string;
  activities: string;
};

type Package = {
  id: number;
  packageName: string;
  packageCountry: string;
  packageDuration: string;
  packageItenary: { [key: string]: { title: string; activities: string } };
  packagePrice: string;
  packageRating: string;
  packageImage: string;
  featured: boolean;
  packageDesc: string;
};

const PackageDetails: React.FC = () => {
  const [packageData, setPackageData] = useState<Package | null>(null);
  const [itinerary, setItinerary] = useState<ItineraryItem[]>([]);
  const { packageId } = useParams();
  const navigate = useNavigate();

  const handleBookingConfirmation = () => {
    navigate("/bookingconfirmation");
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/packages/${packageId}`)
      .then((res) => {
        const data = res.data as Package;
        setPackageData(data);

        // Transform the itinerary object into an array of objects
        const itineraryArray = Object.entries(data.packageItenary).map(
          ([day, details]) => ({
            day,
            title: details.title,
            activities: details.activities,
          })
        );

        setItinerary(itineraryArray);
      })
      .catch((error) => {
        console.error("Error fetching package data:", error);
      });
  }, [packageId]);

  if (!packageData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      {/* Header Section */}
      <div className="relative w-full h-64 md:h-96 mt-[8rem]">
        <img
          src={packageData.packageImage}
          alt={packageData.packageName}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center p-4">
          <h1 className="text-3xl md:text-5xl font-bold">
            {packageData.packageName}
          </h1>
        </div>
        <div className="absolute bottom-0 right-0 bg-white bg-opacity-75 p-2 m-2 rounded">
          <button className="text-blue-500">View Map</button>
        </div>
      </div>

      {/* Description Section */}
      <div className="mt-8 p-4">
        <p className="text-gray-700 mb-4">{packageData.packageDesc}</p>
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
                Title
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Activities
              </th>
            </tr>
          </thead>
          <tbody>
            {itinerary.map((item, index) => (
              <tr key={index}>
                <td className="border border-gray-300 px-4 py-2">{item.day}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.title}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {item.activities}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <button
          onClick={handleBookingConfirmation}
          className="w-[100%] bg-red-600 hover:bg-red-[#DC2626] text-white font-bold py-2 px-4 rounded"
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default PackageDetails;
