import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0); // Assuming initial cart count is 0

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-[100%] z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0">
            <Link
              to="/"
              className="flex items-center text-gray-800 text-lg font-semibold"
            >
              <img
                src="https://demo.ovatheme.com/tripgo/wp-content/uploads/2022/07/logo-black.svg"
                alt="Logo"
                className="h-8 mr-2"
              />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                to="/"
                className="flex items-center text-gray-800 text-lg font-semibold"
              >
                Home
              </Link>
              <Link
                to="/packages"
                className="text-gray-800 hover:text-red-600 px-3 py-2 rounded-md  font-medium"
              >
                Packages
              </Link>
              <Link
                to="/mybookings"
                className="text-gray-800 hover:text-red-600 px-3 py-2 rounded-md  font-medium"
              >
                My Bookings
              </Link>
              <Link
                to="/mywishlist"
                className="text-gray-800 hover:text-red-600 px-3 py-2 rounded-md  font-medium"
              >
                My Wishlist
              </Link>
              <a
                href="/"
                className="text-gray-800 hover:text-red-600 px-3 py-2 rounded-md  font-medium"
              >
                FAQ's
              </a>
            </div>
          </div>

          <div className="hidden md:flex">
            <div className="relative py-2 ms-2">
              <div className="t-0 absolute left-3">
                <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
                  3
                </p>
              </div>
              <div>
                <Link to="/mywishlist">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="file: mt-4 h-6 w-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    />
                  </svg>
                </Link>
              </div>
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-600 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                  {cartCount}
                </span>
              )}
            </div>
            <div className="ml-4 flex items-center md:ml-6">
              <span className="text-gray-800 px-4 py-2 rounded-md  font-medium">
                <Link to="/login"> Login</Link>
              </span>
              <Link to="/signup">
                <button className="ml-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md  font-medium">
                  Sign Up
                </button>
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <div className="relative py-2 me-2">
              <div className="t-0 absolute left-3">
                <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
                  3
                </p>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="file: mt-4 h-6 w-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </div>
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-red-600 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                  {cartCount}
                </span>
              )}
            </div>
            <button
              onClick={toggleNavbar}
              className="text-gray-800 inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition-transform duration-300 transform"
            >
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
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
      </div>
      <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="/"
            className="text-gray-800 text-lg hover:text-red-600 block px-3 py-2 rounded-md  font-medium"
          >
            Home
          </a>
          <a
            href="/"
            className="text-gray-800 text-lg hover:text-red-600 block px-3 py-2 rounded-md  font-medium"
          >
            Packages
          </a>
          <a
            href="/"
            className="text-gray-800 text-lg hover:text-red-600 block px-3 py-2 rounded-md  font-medium"
          >
            My Bookings
          </a>
          <a
            href="/"
            className="text-gray-800 text-lg hover:text-red-600 block px-3 py-2 rounded-md  font-medium"
          >
            Wishlist
          </a>
          <a
            href="/"
            className="text-gray-800 text-lg hover:text-red-600 block px-3 py-2 rounded-md  font-medium"
          >
            FAQ's
          </a>
          <div className="mt-4 flex justify-center">
            <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md  font-medium">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
