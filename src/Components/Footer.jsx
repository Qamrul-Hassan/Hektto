import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [showButton, setShowButton] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSignup = () => {
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    navigate("/create-account");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#F1F0FF] text-gray-700 py-8">
      <div className="container mx-auto px-4 lg:px-20">
        <div className="flex flex-wrap justify-between">
          {/* Sign Up Section */}
          <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
            <h1 className="font-bold text-xl text-black">Hekto</h1>
            <div className="mt-4 flex items-center">
              <input
                type="email"
                placeholder="Enter Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-[60%] px-4 py-2 rounded-md text-gray-600 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <button
                className="w-[30%] mt-2 lg:mt-0 bg-pink-500 hover:bg-pink-600 text-white font-normal py-2 px-2 rounded-md ml-1 transition-all"
                onClick={handleSignup}
              >
                Sign Up
              </button>
            </div>
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
            <div className="mt-4">
              <p className="font-medium text-gray-600">Contact Info</p>
              <p className="text-sm text-gray-500 mt-1">
                17 Princess Road, London, UK
              </p>
            </div>
          </div>

          {/* Categories Section */}
          <div className="w-full lg:w-1/4 mb-6 lg:mb-0 px-10">
            <h2 className="font-semibold text-lg text-black mb-4">Categories</h2>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Laptops & Computers</li>
              <li>Cameras & Photography</li>
              <li>Smart Phones & Tablets</li>
              <li>Video Games & Consoles</li>
              <li>Waterproof Headphones</li>
            </ul>
          </div>

          {/* Customer Care Section */}
          <div className="w-full lg:w-1/4 mb-6 lg:mb-0 px-10">
            <h2 className="font-semibold text-lg text-black mb-4">Customer Care</h2>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>My Account</li>
              <li>Discount</li>
              <li>Returns</li>
              <li>Orders History</li>
              <li>Order Tracking</li>
            </ul>
          </div>

          {/* Pages Section */}
          <div className="w-full lg:w-1/4 px-10">
            <h2 className="font-semibold text-lg text-black mb-4">Pages</h2>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Blog</li>
              <li>Browse the Shop</li>
              <li>Category</li>
              <li>Pre-Built Pages</li>
              <li>Visual Composer Elements</li>
              <li>WooCommerce Pages</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 flex justify-between items-center text-sm text-gray-500">
          <p>©Qamrul Hassan - All Rights Reserved</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-pink-500">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-pink-500">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-pink-500">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 bg-pink-500 text-white p-3 rounded-full shadow-lg hover:bg-pink-600 transition-all"
        >
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
};

export default Footer;
