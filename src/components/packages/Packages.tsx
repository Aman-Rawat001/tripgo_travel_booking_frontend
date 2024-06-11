import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./packages.css"; // Import the CSS file
import axios from "axios";

// type Package = {
//   id: number;
//   title: string;
//   location: string;
//   duration: string;
//   price: string;
//   rating: string;
//   image: string;
//   featured: boolean;
//   description: string;
// };

// const packages: Package[] = [
//   {
//     id: 1,
//     title: "Ecotourism Sabah sightseeing tours - 2 hours",
//     location: "Sabah, Malaysia",
//     duration: "2 hours",
//     price: "$10.00",
//     rating: "4.5",
//     image: "https://via.placeholder.com/400x200", // Replace with actual image URL
//     featured: true,
//     description:
//       "The Caucasus Mountains are a mountain range at the intersection of Asia and Europe",
//   },
//   {
//     id: 2,
//     title: "Copenhagen City Tours - 4 Hours",
//     location: "Copenhagen, Denmark",
//     duration: "4 hours",
//     price: "$15.00",
//     rating: "4.5",
//     image: "https://via.placeholder.com/400x200", // Replace with actual image URL
//     featured: true,
//     description:
//       "The Caucasus Mountains are a mountain range at the intersection of Asia and Europe",
//   },
//   {
//     id: 3,
//     title: "Copenhagen to Helsinki - 7 Days",
//     location: "Copenhagen, Denmark",
//     duration: "7 days",
//     price: "$339.99",
//     rating: "5.0",
//     image: "https://via.placeholder.com/400x200", // Replace with actual image URL
//     featured: false,
//     description:
//       "Copenhagen, Denmark's capital, sits on the coastal islands of Zealand and Amager",
//   },
//   {
//     id: 4,
//     title: "Copenhagen to Helsinki - 7 Days",
//     location: "Copenhagen, Denmark",
//     duration: "7 days",
//     price: "$339.99",
//     rating: "5.0",
//     image: "https://via.placeholder.com/400x200", // Replace with actual image URL
//     featured: false,
//     description:
//       "Copenhagen, Denmark's capital, sits on the coastal islands of Zealand and Amager",
//   },
// ];

interface packages {  
  
packageID: string,
packageImage: string,
  packageName: string,
packagePrice: string,
packageDuration: string,
packageDesc: string,
packageCountry: string;
packageRating: number;


}

const Packages: React.FC = () => {
  const [packages, setPackages] = useState<packages[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPackages = packages.filter(
    (pkg) =>
      pkg.packageName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pkg.packageCountry.toLowerCase().includes(searchQuery.toLowerCase())
  );


  useEffect(()=>{
    axios.get("http://localhost:8080/packages").then((res)=>{
      console.log(res.data);
      setPackages(res.data)
    }).catch((err)=>{
    console.log(err)
    })
  },[])

  return (
    <div className="container mx-auto p-4 animate-fadeIn">
      <div className="relative w-full h-64 md:h-96 mt-[8rem]">
        <img
          src="https://demo.ovatheme.com/tripgo/wp-content/uploads/2022/07/destination-03-636x306.jpg"
          alt="Explore History & Culture in London - 5 Days"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center p-4">
          <h1 className="text-3xl md:text-5xl font-bold animate-bounce">
            All Packages
          </h1>
        </div>
        <div className="absolute bottom-0 right-0 bg-white bg-opacity-75 p-2 m-2 rounded">
          <button className="text-blue-500">View Map</button>
        </div>
      </div>

      <div className="mt-8">
        <label className="font-semibold p-2">Search Your Packages:</label>
        <input
          type="text"
          placeholder="Search packages..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="rounded border p-2 w-full mx-auto shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-transform duration-300 transform focus:scale-105"
        />
      </div>

      <h1 className="text-2xl font-semibold mb-4 mt-[8rem] underline">
        {filteredPackages.length} Tours found
      </h1>

      <div className="space-y-4">
        {filteredPackages.map((pkg) => (
          <div
            key={pkg.packageID}
            className="border rounded-lg overflow-hidden shadow-lg flex flex-col md:flex-row transform transition-all duration-500 hover:scale-105"
          >
            <div className="relative flex-shrink-0 w-full md:w-1/3">
              <img
                src={pkg.packageImage}
                alt={pkg.packageName}
                className="w-full h-48 object-cover"
              />
          
                <div className="absolute top-0 left-0 bg-red-500 text-white p-1 text-xs font-semibold uppercase">
                  Featured
                </div>
             
            </div>
            <div className="p-4 flex flex-col justify-between w-full md:w-2/3">
              <div>
                <h2 className="text-xl font-semibold mb-2">{pkg.packageName}</h2>
                <p className="text-sm text-gray-600 mb-1">{pkg.packageCountry}</p>
                <p className="text-sm text-gray-600 mb-1">{pkg.packageDuration}</p>
                <p className="text-sm font-bold text-gray-600 mb-1">
                  {pkg.packagePrice}
                </p>
                <p className="text-sm text-yellow-600 mb-1">
                  {pkg.packageRating} stars
                </p>
                <p className="text-sm text-gray-600 mb-4">{pkg.packageDesc}</p>
              </div>
              <Link to={`/packages/${pkg.packageID}`}>
                <button className="mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition-colors duration-300">
                  Explore
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Packages;
