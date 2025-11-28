
import TrendingImage from "../assets/Image/Trending.png";

const UniqueSection = () => {
  return (
    <div className="relative w-full h-auto bg-[#F1F0FF] flex flex-col lg:flex-row items-center py-10 px-4 lg:px-16">
      
      <div className="flex-1 flex justify-center mb-8 lg:mb-0">
        <img
          src={TrendingImage}
          alt="Trending Sofa"
          className="h-auto w-[80%] sm:w-[60%] lg:w-[400px] object-cover"
        />
      </div>

  
      <div className="flex-1 px-4 sm:px-8 lg:px-28 space-y-6 text-center lg:text-left">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A1242] font-josefin">
          Unique Features Of Latest & Trending Products
        </h2>
        <ul className="space-y-4 text-sm sm:text-base lg:text-lg text-[#1A1242] font-lato">
          <li className="flex items-center justify-center lg:justify-start space-x-3">
            <span className="w-4 h-4 rounded-full bg-pink-500"></span>
            <span>All frames constructed with hardwood solids and laminates</span>
          </li>
          <li className="flex items-center justify-center lg:justify-start space-x-3">
            <span className="w-4 h-4 rounded-full bg-blue-500"></span>
            <span>
              Reinforced with double wood dowels, glue, screw - nails corner blocks and
              machine nails
            </span>
          </li>
          <li className="flex items-center justify-center lg:justify-start space-x-3">
            <span className="w-4 h-4 rounded-full bg-green-500"></span>
            <span>Arms, backs and seats are structurally reinforced</span>
          </li>
        </ul>
        <div className="flex flex-col items-center lg:items-start mt-8 space-y-2">
          <button className="px-6 py-3 text-white bg-pink-500 rounded-md hover:bg-pink-600 font-lato">
            Add To Cart
          </button>
          <p className="text-sm sm:text-lg font-medium text-[#1A1242] font-lato">
            B&B Italian Sofa{" "}
            <span className="font-bold text-pink-500">$32.00</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UniqueSection;
