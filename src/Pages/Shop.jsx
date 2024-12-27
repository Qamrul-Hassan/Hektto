import React, { useState, useEffect, useContext } from "react";
import { FaThLarge, FaList, FaCartPlus, FaHeart, FaSearchPlus } from "react-icons/fa";
import ShopSideBar from "../Components/ShopSidebar";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import PageLayout from "../Components/PageLayout";
import { DataContext } from "../Components/DataContext"; // Import DataContext

const Shop = () => {
  const { products, addToCart, wishlist, toggleWishlist } = useContext(DataContext); // Get wishlist and toggleWishlist from DataContext
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(6);
  const [activeFilters, setActiveFilters] = useState({
    brand: [],
    discount: [],
    rating: [],
    categories: [],
    colors: [],
  });
  const [sortOption, setSortOption] = useState("price-low-high");
  const [viewType, setViewType] = useState("grid");
  const [loading, setLoading] = useState(true);
  const [likedProducts, setLikedProducts] = useState([]); // For tracking liked products
  const [zoomedProduct, setZoomedProduct] = useState(null); // For tracking zoomed product

  useEffect(() => {
    if (!Array.isArray(products)) {
      console.log("Products are not available or are not an array.");
      setLoading(false);
    } else {
      setLoading(false);
    }
  }, [products]);

  if (loading) {
    return <div>Loading...</div>; // Show loading state while products are being fetched
  }

  const sortedProducts = [...products].sort((a, b) => {
    if (sortOption === "price-low-high") return a.price - b.price;
    if (sortOption === "price-high-low") return b.price - a.price;
    return 0;
  });

  const filteredProducts = sortedProducts.filter((product) => {
    return (
      (activeFilters.brand.length === 0 || activeFilters.brand.includes(product.brand)) &&
      (activeFilters.rating.length === 0 || activeFilters.rating.includes(product.rating.rate))
    );
  });

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    return (
      <>
        {[...Array(fullStars)].map((_, index) => (
          <FaStar key={index} className="text-yellow-500" />
        ))}
        {halfStars > 0 && <FaStarHalfAlt className="text-yellow-500" />}
        {[...Array(emptyStars)].map((_, index) => (
          <FaRegStar key={index} className="text-yellow-500" />
        ))}
      </>
    );
  };

  const toggleLike = (productId) => {
    setLikedProducts((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]
    );
  };

  const toggleZoom = (productId) => {
    setZoomedProduct(zoomedProduct === productId ? null : productId);
  };

  return (
    <PageLayout pageTitle="Shop" subTitle="Home, Pages, Shop">
      <div className="flex flex-col lg:flex-row p-8 min-h-screen gap-6">
        <div className="lg:w-1/4">
          <ShopSideBar
            activeFilters={activeFilters}
            setActiveFilters={setActiveFilters}
          />
        </div>

        <div className="lg:w-3/4">
          <div className="bg-white p-4 rounded-lg shadow-md mb-6">
            <h2 className="text-lg font-bold mb-4">Ecommerce Accessories & Fashion Items</h2>
            <div className="flex flex-wrap justify-between items-center gap-4">
              <div className="flex items-center">
                <span className="font-medium mr-2">Per Page:</span>
                <select
                  className="border rounded px-3 py-1 text-sm"
                  value={productsPerPage}
                  onChange={(e) => {
                    setProductsPerPage(Number(e.target.value));
                    setCurrentPage(1);
                  }}
                >
                  <option value="6">6</option>
                  <option value="12">12</option>
                  <option value="24">24</option>
                </select>
              </div>
              <div className="flex items-center">
                <span className="font-medium mr-2">Sort By:</span>
                <select
                  className="border rounded px-3 py-1 text-sm"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                >
                  <option value="best-match">Best Match</option>
                  <option value="price-low-high">Price: Low to High</option>
                  <option value="price-high-low">Price: High to Low</option>
                </select>
              </div>
              <div className="flex items-center">
                <span className="font-medium mr-2">View:</span>
                <button
                  className={`p-2 rounded ${viewType === "grid" ? "bg-gray-200" : "hover:bg-gray-100"}`}
                  onClick={() => setViewType("grid")}
                >
                  <FaThLarge className="text-gray-600 text-lg" />
                </button>
                <button
                  className={`p-2 rounded ${viewType === "list" ? "bg-gray-200" : "hover:bg-gray-100"}`}
                  onClick={() => setViewType("list")}
                >
                  <FaList className="text-gray-600 text-lg" />
                </button>
              </div>
            </div>
          </div>

          <div
            className={`${viewType === "grid" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-6"}`}
          >
            {currentProducts.map((product) => (
              <div
                key={product.id}
                className={`bg-white shadow-md rounded-lg overflow-hidden ${viewType === "list" ? "flex" : ""}`}
              >
                <div className={`${viewType === "list" ? "flex-shrink-0 w-1/5" : "w-full"} p-2`}>
                  <Link to={`/product/${product.id}`}>
                    <img
                      src={product.image}
                      alt={product.title}
                      className={`w-full h-44 object-contain cursor-pointer transition-transform duration-300 ${
                        zoomedProduct === product.id ? "transform scale-125" : ""
                      }`}
                      onClick={() => toggleZoom(product.id)} // Toggle zoom on click
                    />
                  </Link>
                </div>

                <div className={`${viewType === "list" ? "flex-grow p-4 flex flex-col" : "p-4"}`}>
                  <div className="flex items-center justify-start gap-5 mb-2">
                    <h3 className="text-lg font-bold text-gray-800">{product.title}</h3>
                  </div>

                  <div className="flex items-center justify-start gap-4 mb-2">
                    <span className="text-lg font-semibold text-blue-500">${product.price}</span>
                    {product.discount && (
                      <span className="text-sm line-through text-red-500 ml-2">
                        ${product.price + product.discount}
                      </span>
                    )}
                  </div>

                  <div className="flex gap-1 text-yellow-500 mb-4">
                    {renderStars(product.rating.rate)} {/* Render stars here */}
                  </div>

                  <div className="flex gap-3 items-center mt-auto">
                    <button
                      className="text-white bg-red-600 p-2 rounded-full cursor-pointer"
                      onClick={() => addToCart(product)} // Add product to cart
                    >
                      <FaCartPlus />
                    </button>
                    <button
                      className={`p-2 rounded-full cursor-pointer border-2 ${
                        wishlist.includes(product.id)
                          ? "bg-red-600 border-red-600 text-white"
                          : "border-red-600 text-red-600"
                      }`}
                      onClick={() => toggleWishlist(product.id)} // Toggle wishlist functionality
                    >
                      <FaHeart />
                    </button>
                    <button
                      className="p-2 rounded-full cursor-pointer bg-blue-600 text-white"
                      onClick={() => toggleZoom(product.id)} // Toggle zoom on image
                    >
                      <FaSearchPlus />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center gap-3 mt-6">
            {Array.from({ length: Math.ceil(filteredProducts.length / productsPerPage) }).map((_, index) => (
              <button
                key={index + 1}
                onClick={() => paginate(index + 1)}
                className={`px-4 py-2 border rounded-md ${currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-white text-blue-500"}`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Shop;
