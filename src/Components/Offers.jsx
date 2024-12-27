

import DeliveryImage from "../assets/Image/delivery.png";
import CashbackImage from "../assets/Image/cashback.png";
import PremiumImage from "../assets/Image/premium.png";
import ServiceImage from "../assets/Image/24.png";

const Offers = () => {
  return (
    <div className="relative w-full py-12 px-4 sm:py-16 sm:px-6 lg:py-20 lg:px-16 bg-white shadow-lg">
      
      <h2 className="text-center mb-8 text-2xl sm:text-3xl font-bold text-gray-800" style={{ fontFamily: "Josefin Sans" }}>
        What Shopex Offers
      </h2>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        
        <div className="bg-white shadow-lg p-6 sm:p-8 rounded-lg text-center">
          <div className="mb-4">
            <img src={DeliveryImage} alt="Free Shipping" className="mx-auto w-10 h-14 sm:w-12 sm:h-16" />
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-[#151875] mb-2" style={{ fontFamily: "Josefin Sans" }}>
            Free Shipping
          </h3>
          <p className="text-xs sm:text-sm text-gray-500">
            Get free shipping on all orders above $50.
          </p>
        </div>

        
        <div className="bg-white shadow-lg p-6 sm:p-8 rounded-lg text-center">
          <div className="mb-4">
            <img src={CashbackImage} alt="24/7 Support" className="mx-auto w-14 h-14 sm:w-16 sm:h-16" />
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-[#151875] mb-2" style={{ fontFamily: "Josefin Sans" }}>
            24/7 Support
          </h3>
          <p className="text-xs sm:text-sm text-gray-500">
            We’re here to help you anytime with our 24/7 support team.
          </p>
        </div>

        
        <div className="bg-white shadow-lg p-6 sm:p-8 rounded-lg text-center">
          <div className="mb-4">
            <img src={PremiumImage} alt="Special Offers" className="mx-auto w-14 h-14 sm:w-16 sm:h-16" />
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-[#151875] mb-2" style={{ fontFamily: "Josefin Sans" }}>
            Special Offers
          </h3>
          <p className="text-xs sm:text-sm text-gray-500">
            Unlock special offers and discounts on selected products.
          </p>
        </div>

        
        <div className="bg-white shadow-lg p-6 sm:p-8 rounded-lg text-center">
          <div className="mb-4">
            <img src={ServiceImage} alt="High-Quality Products" className="mx-auto w-14 h-14 sm:w-16 sm:h-16" />
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-[#151875] mb-2" style={{ fontFamily: "Josefin Sans" }}>
            High-Quality Products
          </h3>
          <p className="text-xs sm:text-sm text-gray-500">
            Shop premium products curated just for you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Offers;
