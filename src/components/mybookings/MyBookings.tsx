import React, { useEffect, useState } from "react";
import "./mybookings.css"; // Ensure to import the CSS file with the fade-in animation
import axios from "axios";

interface bookings {
  bookingID: string;
  bookingPerson: string;
  bookingRooms: string;
  packageImage: string;
  packageID: string;
  packageName: string;
  userID: string;
}

const MyBookings: React.FC = () => {
  const [packagesData, setPackagesData] = useState<bookings[]>([]);

  useEffect(() => {
    const userData = localStorage.getItem("userData");
    if (userData) {
      const parsedUserData = JSON.parse(userData);
      // console.log("User data:", parsedUserData);
      axios
        .get(`http://localhost:5001/book/${parsedUserData.userId}`)
        .then((res) => {
          console.log(res.data);
          setPackagesData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
    }
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="relative w-full h-64 md:h-96 mt-[8rem]">
        <img
          src="https://demo.ovatheme.com/tripgo/wp-content/uploads/2022/07/destination-03-636x306.jpg"
          alt="Explore History & Culture in London - 5 Days"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center p-4">
          {packagesData.length === 0 ? (
            <h1 className="text-3xl md:text-5xl font-bold">
              Oops! No Bookings Found
            </h1>
          ) : (
            <h1 className="text-3xl md:text-5xl font-bold">My Bookings</h1>
          )}
        </div>
        <div className="absolute bottom-0 right-0 bg-white bg-opacity-75 p-2 m-2 rounded">
          <button className="text-blue-500">View Map</button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10">
        {packagesData.map((pkg, index) => (
          <div
            key={pkg.bookingID}
            className="border rounded-lg overflow-hidden shadow-lg flex flex-col justify-between fade-in"
            style={{ animationDelay: `${index * 0.3}s` }}
          >
            <div>
              <img
                src={pkg.packageImage}
                alt={pkg.packageImage}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">
                  {pkg.packageName}
                </h2>
                <p className="text-sm text-gray-600 mb-2">
                  Total Booking Rooms: {pkg.bookingRooms}
                </p>
                <p className="text-sm text-gray-600">
                  Total Booking Persons: {pkg.bookingPerson}
                </p>
              </div>
            </div>
            <div className="p-4 flex justify-end"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
