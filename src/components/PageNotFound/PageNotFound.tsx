import React from "react";
import { Link } from "react-router-dom";
import notFoundImage from "../../assets/404.png";

const PageNotFound = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <img
          src={notFoundImage}
          alt="Page Not Found"
          className="w-64 h-64 object-cover mb-8"
        />
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Page Not Found
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Sorry, the page you are looking for does not exist.
        </p>
        <Link to="/">
          <button
            style={{ backgroundColor: "#DC2626" }}
            className="px-6 py-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition duration-300"
          >
            Go to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
