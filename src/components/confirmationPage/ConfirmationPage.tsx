import React from "react";
import { Link } from "react-router-dom";

const ConfirmationPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
        <h1 className="text-2xl font-bold text-green-600">
          Booking Confirmed!
        </h1>
        <p className="text-gray-700 mt-4">Thank you for your booking.</p>
        <p className="text-gray-700">
          Your booking has been successfully confirmed.
        </p>

        <div className="mt-6">
          <p className="text-gray-600">We look forward to serving you.</p>
        </div>
        <Link to="/">
          <button className="mt-6 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors duration-300">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ConfirmationPage;
