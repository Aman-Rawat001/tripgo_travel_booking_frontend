import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-12">
      <div className="container mx-auto flex flex-wrap justify-center">
        <div className="w-full lg:w-1/4 px-4 mb-8">
          <img
            src="https://demo.ovatheme.com/tripgo/wp-content/uploads/2022/07/logo-black.svg"
            alt="Logo"
            className="h-8 mb-4"
          />
          <p className="text-sm leading-relaxed">
            There are many variations of passages of Lorem the Ipsum available
            but it is the majority of suffered that a alteration in that some
            dummy text.
          </p>
        </div>
        <div className="w-full lg:w-1/4 px-4 mb-8">
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <p>Customer Support</p>
          <p>Privacy & Policy</p>
          <p>Contact Channels</p>
        </div>
        <div className="w-full lg:w-1/4 px-4 mb-8">
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <p>Our Story</p>
          <p>Travel Blogs</p>
          <p>Work With Us</p>
        </div>
        <div className="w-full lg:w-1/4 px-4 mb-8">
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p>455 West Orchard Street Kings Mountain, NC 280867</p>
          <p>call: +088 (006) 992-99-10</p>
          <p>Email: example@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
