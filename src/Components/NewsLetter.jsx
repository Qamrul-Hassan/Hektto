import React from "react";
import backgroundImage from "../assets/Image/Rectangle.png";

const NewsLetter = () => {
  return (
    <div
      className="relative w-full bg-cover bg-no-repeat h-[240px] sm:h-[300px] lg:h-[346px]"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-8 lg:px-16 text-center">
        <h2 className="font-josefin text-xl sm:text-2xl lg:text-[42px] leading-[1.2] text-[#151875] mb-4">
          Get Latest Update By Subscribe Our Newsletter
        </h2>
        <button className="px-6 sm:px-8 py-2 sm:py-3 bg-[#FB2E86] text-sm sm:text-base lg:text-lg text-white rounded-md hover:bg-pink-600 transition-all">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
