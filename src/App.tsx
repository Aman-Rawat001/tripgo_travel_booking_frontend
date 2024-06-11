import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./components/homepage/Homepage";
import { Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Footer from "./components/footer/Footer";
import SignUp from "./components/signup/SignUp";
import Packages from "./components/packages/Packages";
import PackageDetails from "./components/packages/packageDetails/PackageDetails";
import MyWishlist from "./components/mywishlist/MyWishlist";
import MyBookings from "./components/mybookings/MyBookings";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import FAQ from "./components/FAQ/Faq";
import ConfirmationPage from "./components/confirmationPage/ConfirmationPage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/packages/:id" element={<PackageDetails />} />
        <Route path="/mywishlist" element={<MyWishlist />} />
        <Route path="/mybookings" element={<MyBookings />} />
        <Route path="/bookingconfirmation" element={<ConfirmationPage />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
