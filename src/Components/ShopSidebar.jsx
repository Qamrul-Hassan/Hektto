import { FaFilter, FaStar, FaCircle } from "react-icons/fa";
import PropTypes from "prop-types";

// Default filters (brand kept to prevent Shop.jsx crash)
const defaultFilters = {
  brand: [],
  discount: [],
  rating: [],
  categories: [],
  colors: [],
};

const ShopSideBar = ({ activeFilters = defaultFilters, setActiveFilters }) => {
  // Handle filter changes immutably
  const handleFilterChange = (category, value) => {
    setActiveFilters((prev) => {
      return {
        ...prev,
        [category]: prev[category].includes(value)
          ? prev[category].filter((v) => v !== value)
          : [...prev[category], value],
      };
    });
  };

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg max-w-xs w-full">
      {/* ----------------- DISCOUNT ----------------- */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold border-b-2 pb-2 mb-4 text-blue-500">
          Discount
        </h3>
        <div className="flex flex-col space-y-2">
          {["10% Off", "20% Off", "30% Off", "50% Off"].map((discount) => (
            <label
              key={discount}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={activeFilters.discount.includes(discount)}
                onChange={() => handleFilterChange("discount", discount)}
              />
              <span>{discount}</span>
            </label>
          ))}
        </div>
      </div>

      {/* ----------------- RATING ----------------- */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold border-b-2 pb-2 mb-4 text-blue-500">
          Rating
        </h3>
        <div className="flex flex-col space-y-2">
          {[5, 4, 3, 2, 1].map((rating) => (
            <label
              key={rating}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={activeFilters.rating.includes(rating)}
                onChange={() => handleFilterChange("rating", rating)}
              />
              <div className="flex items-center space-x-1">
                {[...Array(rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-500" />
                ))}
              </div>
            </label>
          ))}
        </div>
      </div>

      {/* ----------------- CATEGORIES ----------------- */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold border-b-2 pb-2 mb-4 text-blue-500">
          Categories
        </h3>
        <div className="flex flex-col space-y-2">
          {["Electronics", "Fashion", "Home", "Books"].map((category) => (
            <label
              key={category}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={activeFilters.categories.includes(category)}
                onChange={() => handleFilterChange("categories", category)}
              />
              <span>{category}</span>
            </label>
          ))}
        </div>
      </div>

      {/* ----------------- COLORS ----------------- */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold border-b-2 pb-2 mb-4 text-blue-500">
          Colors
        </h3>
        <div className="flex gap-4">
          {["Blue", "Red", "Black"].map((color) => (
            <label
              key={color}
              className="flex items-center cursor-pointer gap-1"
            >
              <input
                type="checkbox"
                checked={activeFilters.colors.includes(color)}
                onChange={() => handleFilterChange("colors", color)}
              />
              <FaCircle className={`text-${color.toLowerCase()}-500`} />
              <span>{color}</span>
            </label>
          ))}
        </div>
      </div>

      {/* ----------------- CLEAR FILTERS ----------------- */}
      <div className="text-center">
        <button
          onClick={() =>
            setActiveFilters({
              brand: [],
              discount: [],
              rating: [],
              categories: [],
              colors: [],
            })
          }
          className="w-full py-2 px-4 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition-all flex justify-center items-center"
        >
          <FaFilter className="mr-2" /> Clear All Filters
        </button>
      </div>
    </div>
  );
};

ShopSideBar.propTypes = {
  activeFilters: PropTypes.shape({
    brand: PropTypes.array.isRequired,
    discount: PropTypes.array.isRequired,
    rating: PropTypes.array.isRequired,
    categories: PropTypes.array.isRequired,
    colors: PropTypes.array.isRequired,
  }).isRequired,
  setActiveFilters: PropTypes.func.isRequired,
};

export default ShopSideBar;
