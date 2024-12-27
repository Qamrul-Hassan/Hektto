import React from "react";
import { FaFilter, FaStar, FaCircle } from "react-icons/fa";

const ShopSideBar = ({ activeFilters, setActiveFilters }) => {
  // Handle filter changes
  const handleFilterChange = (filterCategory, filterValue) => {
    setActiveFilters((prevState) => {
      const updatedFilters = { ...prevState };
      if (updatedFilters[filterCategory].includes(filterValue)) {
        updatedFilters[filterCategory] = updatedFilters[filterCategory].filter(
          (value) => value !== filterValue
        );
      } else {
        updatedFilters[filterCategory].push(filterValue);
      }
      return updatedFilters;
    });
  };

  return (
    <div className="bg-white p-6 shadow-lg rounded-lg max-w-xs w-full">
      <div className="mb-6">
        <h3 className="text-lg font-semibold border-b-2 pb-2 mb-4 text-blue-500">Brand</h3>
        <div>
          {["Nike", "Adidas", "Puma", "Reebok"].map((brand) => (
            <label key={brand} className="block cursor-pointer flex items-center space-x-2">
              <input
                type="checkbox"
                className="mr-2"
                checked={activeFilters.brand.includes(brand)}
                onChange={() => handleFilterChange("brand", brand)}
                aria-label={`Filter by ${brand}`}
              />
              <span>{brand}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold border-b-2 pb-2 mb-4 text-blue-500">Discount</h3>
        <div>
          {["10% Off", "20% Off", "30% Off", "50% Off"].map((discount) => (
            <label key={discount} className="block cursor-pointer flex items-center space-x-2">
              <input
                type="checkbox"
                className="mr-2"
                checked={activeFilters.discount.includes(discount)}
                onChange={() => handleFilterChange("discount", discount)}
                aria-label={`Filter by ${discount}`}
              />
              <span>{discount}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold border-b-2 pb-2 mb-4 text-blue-500">Rating</h3>
        <div>
          {[5, 4, 3, 2, 1].map((rating) => (
            <label key={rating} className="block cursor-pointer flex items-center space-x-2">
              <input
                type="checkbox"
                className="mr-2"
                checked={activeFilters.rating.includes(rating)}
                onChange={() => handleFilterChange("rating", rating)}
                aria-label={`Filter by ${rating} star rating`}
              />
              {[...Array(rating)].map((_, i) => (
                <FaStar key={i} className="text-yellow-500 inline" />
              ))}
            </label>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold border-b-2 pb-2 mb-4 text-blue-500">Categories</h3>
        <div>
          {["Electronics", "Fashion", "Home", "Books"].map((category) => (
            <label key={category} className="block cursor-pointer flex items-center space-x-2">
              <input
                type="checkbox"
                className="mr-2"
                checked={activeFilters.categories.includes(category)}
                onChange={() => handleFilterChange("categories", category)}
                aria-label={`Filter by category: ${category}`}
              />
              <span>{category}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold border-b-2 pb-2 mb-4 text-blue-500">Colors</h3>
        <div className="flex gap-4">
          {["Blue", "Red", "Black"].map((color) => (
            <label key={color} className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="mr-2"
                checked={activeFilters.colors.includes(color)}
                onChange={() => handleFilterChange("colors", color)}
                aria-label={`Filter by color: ${color}`}
              />
              <FaCircle className={`text-${color.toLowerCase()}-500`} />
              <span>{color}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="text-center">
        <button
          onClick={() => setActiveFilters({ brand: [], discount: [], rating: [], categories: [], colors: [] })}
          className="w-full py-2 px-4 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition-all"
        >
          <FaFilter className="mr-2 inline" />
          Clear All Filters
        </button>
      </div>
    </div>
  );
};

export default ShopSideBar;
