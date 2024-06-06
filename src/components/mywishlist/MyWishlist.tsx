import React, { useState } from "react";

type Package = {
  id: number;
  title: string;
  location: string;
  image: string;
  description: string;
};

const dummyPackages: Package[] = [
  {
    id: 1,
    title:
      "London Extravaganza: A Captivating 3-Day Journey through Royal Majesty, Artistic Splendors, and Urban Marvels",
    location: "London",
    image: "https://via.placeholder.com/400x200", // Replace with actual image URL
    description:
      "London Extravaganza: A Captivating 3-Day Journey through Royal Majesty, Artistic Splendors, and Urban Marvels",
  },
  {
    id: 2,
    title:
      "Sydney Spectacular: A 5-Day Voyage through Harbor Charms, Coastal Wonders, and Urban Delights",
    location: "Sydney",
    image: "https://via.placeholder.com/400x200", // Replace with actual image URL
    description:
      "Sydney Spectacular: A 5-Day Voyage through Harbor Charms, Coastal Wonders, and Urban Delights",
  },
  {
    id: 3,
    title:
      "Chennai Essence Revealed: A 10-Day Cultural Odyssey through South Indian Heritage and Coastal Splendors",
    location: "Chennai",
    image: "https://via.placeholder.com/400x200", // Replace with actual image URL
    description:
      "Chennai Essence Revealed: A 10-Day Cultural Odyssey through South Indian Heritage and Coastal Splendors",
  },
];

const MyWishlist: React.FC = () => {
  const [packages, setPackages] = useState(dummyPackages);

  const handleDeleteWishlist = (pkg: any) => {
    setPackages(packages.filter((ele) => ele.id !== pkg.id));
  };

  return (
    <div className="container mx-auto p-4">
      <div className="relative w-full h-64 md:h-96 mt-[8rem]">
        <img
          src="https://demo.ovatheme.com/tripgo/wp-content/uploads/2022/07/destination-03-636x306.jpg"
          alt="Explore History & Culture in London - 5 Days"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center p-4">
          <h1 className="text-3xl md:text-5xl font-bold">My Wishlist </h1>
        </div>
        <div className="absolute bottom-0 right-0 bg-white bg-opacity-75 p-2 m-2 rounded">
          <button className="text-blue-500">View Map</button>
        </div>
      </div>
      {packages.length === 0 ? (
        <h1 className="text-3xl font-semibold text-center mb-4 mt-[8rem] underline">
          Oops! No Items Found.
        </h1>
      ) : (
        <>
          <h1 className="text-3xl font-semibold text-center mb-4 mt-[8rem] underline">
            These Are The Packages You Liked
          </h1>
          <p className="text-center mb-8 text-gray-600">
            Book them now to enjoy discounts
          </p>
        </>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className="border rounded-lg overflow-hidden shadow-lg flex flex-col justify-between"
          >
            <div>
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">{pkg.title}</h2>
                <p className="text-sm text-gray-600 mb-2">{pkg.location}</p>
                <p className="text-sm text-gray-600">{pkg.description}</p>
              </div>
            </div>
            <div className="p-4 flex justify-end">
              <button
                onClick={() => handleDeleteWishlist(pkg)}
                className="text-red-600 hover:text-red-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyWishlist;
