import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import discountItemImage from "../assets/Image/DiscountItem.png";

const DiscountItem = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const handleShopNowClick = () => {
    navigate("/shop"); // Redirect to the shop page
  };

  return (
    <div className="relative w-full bg-[#F1F0FF] py-8 sm:py-12 lg:py-16 flex justify-center items-center">
      <div className="relative w-[90%] max-w-[1200px] bg-white border-[2px] border-[#E0E0E0] rounded-lg">
        <div className="flex flex-col items-center py-6 px-4 text-center">
          <h2 className="font-josefin text-[24px] sm:text-[36px] lg:text-[42px] text-[#151875] mb-4">
            Discount Item
          </h2>
          <div className="flex flex-wrap justify-center space-x-4">
            <button className="text-[#FB2E86] font-medium underline">
              Wood Chair
            </button>
            <button className="text-[#FB2E86] font-medium underline">
              Plastic Chair
            </button>
            <button className="text-[#FB2E86] font-medium underline">
              Sofa Collection
            </button>
          </div>
        </div>

        <div className="flex flex-wrap lg:flex-nowrap">
          <div className="flex-1 p-4 sm:p-8">
            <h3 className="text-[#151875] text-[20px] sm:text-[24px] lg:text-[28px] font-bold mb-2">
              20% Discount Of All Products
            </h3>
            <p className="text-[#FB2E86] text-[18px] sm:text-[20px] font-semibold mb-4">
              Eams Sofa Compact
            </p>
            <p className="text-sm sm:text-base text-[#888] mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
              feugiat habitasse nec, bibendum condimentum.
            </p>

            <ul className="grid grid-cols-2 gap-4 text-[#888] text-sm sm:text-base mb-6">
              <li>✔ Material expose like metals</li>
              <li>✔ Clear lines and geometric figures</li>
              <li>✔ Simple neutral colours</li>
              <li>✔ Material expose like metals</li>
            </ul>

            <button
              onClick={handleShopNowClick} // Attach click handler
              className="px-6 sm:px-8 py-2 sm:py-3 bg-[#FB2E86] text-white rounded-md hover:bg-[#D02175]"
            >
              Shop Now
            </button>
          </div>

          {/* Image Section */}
          <div className="flex-1 flex justify-center items-center relative p-4 sm:p-8">
            <img
              src={discountItemImage}
              alt="Eams Sofa"
              className="w-[100%] sm:w-[90%] md:w-[80%] max-w-[500px] relative z-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountItem;
