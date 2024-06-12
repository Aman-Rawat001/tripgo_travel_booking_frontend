import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./packages.css"; // Import the CSS file
import axios from "axios";

interface packages {
  packageID: string;
  packageImage: string;
  packageName: string;
  packagePrice: string;
  packageDuration: string;
  packageDesc: string;
  packageCountry: string;
  packageRating: number;
}

const Packages: React.FC = () => {
  const [packages, setPackages] = useState<packages[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [wishlist, setWishlist] = useState<string[]>([]);

  const filteredPackages = packages.filter(
    (pkg) =>
      pkg.packageName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pkg.packageCountry.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    axios
      .get("http://localhost:8080/packages")
      .then((res) => {
        console.log(res.data);
        setPackages(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleWishlistClick = (packageID: string) => {
    console.log("clicked");
    const userData = localStorage.getItem("userData");

    if (wishlist.includes(packageID)) {
      setWishlist((prevWishlist) =>
        prevWishlist.filter((id) => id !== packageID)
      );
      if (userData) {
        const parsedUserData = JSON.parse(userData);
        axios
          .delete(
            `http://localhost:5008/api/wishlists/${parsedUserData.userId}/${packageID}`
          )
          .then((res) => {
            console.log(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    } else {
      setWishlist((prevWishlist) => [...prevWishlist, packageID]);
      if (userData) {
        const parsedUserData = JSON.parse(userData);
        axios
          .post(
            `http://localhost:5008/api/wishlists/${parsedUserData.userId}/${packageID}`,
            {}
          )
          .then((res) => {
            console.log(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    }
  };

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
            className="border rounded-lg overflow-hidden shadow-lg flex flex-col md:flex-row transform transition-all duration-500 hover:scale-105 relative"
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
                <h2 className="text-xl font-semibold mb-2">
                  {pkg.packageName}
                </h2>
                <p className="text-sm text-gray-600 mb-1">
                  {pkg.packageCountry}
                </p>
                <p className="text-sm text-gray-600 mb-1">
                  {pkg.packageDuration}
                </p>
                <p className="text-sm font-bold text-gray-600 mb-1">
                  {pkg.packagePrice}
                </p>
                <p className="text-sm text-yellow-600 mb-1">
                  {pkg.packageRating} stars
                </p>
                <p className="text-sm text-gray-600 mb-4">{pkg.packageDesc}</p>
              </div>
              <div className="flex justify-between items-center">
                <Link to={`/packages/${pkg.packageID}`}>
                  <button className="mt-4 bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700 transition-colors duration-300">
                    Explore
                  </button>
                </Link>
                <svg
                  onClick={() => handleWishlistClick(pkg.packageID)}
                  xmlns="http://www.w3.org/2000/svg"
                  fill={wishlist.includes(pkg.packageID) ? "red" : "none"}
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6 text-red-600 cursor-pointer ml-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Packages;
