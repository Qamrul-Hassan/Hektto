

import chair1 from "../assets/Image/Top1.png";
import chair2 from "../assets/Image/Top2.png";
import chair3 from "../assets/Image/Top3.png";
import chair4 from "../assets/Image/Top1.png";

const TopCategories = () => {
  const categories = [
    { img: chair1, name: "Mini LCW Chair", price: "$56.00" },
    { img: chair2, name: "Modern Sofa", price: "$150.00" },
    { img: chair3, name: "Ergonomic Chair", price: "$120.00" },
    { img: chair4, name: "Wooden Table", price: "$75.00" },
  ];

  return (
    <div className="top-categories bg-[#F6F7FB] shadow-lg p-8 sm:p-16 lg:p-24 rounded-md">
      <h2 className="text-center text-2xl sm:text-3xl lg:text-4xl font-bold text-[#151875] mb-8 mt-4 font-josefin">
        Top Categories
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center p-4 bg-white rounded-lg shadow group"
          >
            
            <div className="w-[180px] sm:w-[200px] lg:w-[240px] h-[180px] sm:h-[200px] lg:h-[240px] bg-[#F1F0FF] rounded-full overflow-hidden relative group">
              <img
                src={item.img}
                alt={`Category ${index + 1}`}
                className="w-full h-full object-cover group-hover:opacity-80 transition-all"
              />
              <div className="absolute inset-0 border-y-4 border-transparent group-hover:border-blue-500 group-hover:border-l-8 border-r-8 transition-all"></div>
              <div className="absolute bottom-0 left-0 w-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="px-4 py-1 bg-[#08D15F] text-white text-xs font-medium rounded-t-full hover:bg-green-700 transition duration-300">
                  View Shop
                </button>
              </div>
            </div>

            
            <div className="text-center mt-4">
              <h3 className="text-sm sm:text-base lg:text-lg font-medium text-[#151875]">
                {item.name}
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-[#151875]">
                {item.price}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCategories;
