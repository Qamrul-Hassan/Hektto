import React, { useState, useEffect, useContext } from "react";
import { FaThLarge, FaList, FaCartPlus, FaHeart, FaSearchPlus, FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import ShopSideBar from "../Components/ShopSidebar";
import PageLayout from "../Components/PageLayout";
import { DataContext } from "../Components/DataContext";

const Shop = () => {
  const { products, addToCart, wishlist, toggleWishlist } = useContext(DataContext);
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
  const [zoomedProduct, setZoomedProduct] = useState(null);
  const [cartStatus, setCartStatus] = useState({});
  const [alertMessages, setAlertMessages] = useState({});

  const filteredAndSortedProducts = () => {
    if (!Array.isArray(products)) return [];
    
    let sortedProducts = [...products];
    if (sortOption === "price-low-high") sortedProducts.sort((a, b) => a.price - b.price);
    if (sortOption === "price-high-low") sortedProducts.sort((a, b) => b.price - a.price);

    return sortedProducts.filter((product) => {
      return (
        (!activeFilters.brand.length || activeFilters.brand.includes(product.brand)) &&
        (!activeFilters.rating.length || activeFilters.rating.includes(Math.round(product.rating.rate)))
      );
    });
  };

  const currentProducts = () => {
    const allProducts = filteredAndSortedProducts();
    const indexOfLast = currentPage * productsPerPage;
    const indexOfFirst = indexOfLast - productsPerPage;
    return allProducts.slice(indexOfFirst, indexOfLast);
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;

    return (
      <>
        {[...Array(fullStars)].map((_, idx) => (
          <FaStar key={idx} className="text-yellow-500" />
        ))}
        {halfStars > 0 && <FaStarHalfAlt className="text-yellow-500" />}
        {[...Array(emptyStars)].map((_, idx) => (
          <FaRegStar key={idx} className="text-yellow-500" />
        ))}
      </>
    );
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    setCartStatus({ ...cartStatus, [product.id]: true });
    setAlertMessages({
      ...alertMessages,
      [product.id]: { msg: "Item added to cart!", type: "cart" },
    });
    setTimeout(() => {
      setAlertMessages((prev) => {
        const updatedMessages = { ...prev };
        delete updatedMessages[product.id];
        return updatedMessages;
      });
    }, 3000);
  };

  const handleToggleWishlist = (product) => {
    toggleWishlist(product.id);
    const isAdded = wishlist.includes(product.id);
    setAlertMessages({
      ...alertMessages,
      [product.id]: { msg: isAdded ? "Item removed from wishlist!" : "Item added to wishlist!", type: "wishlist" },
    });
    setTimeout(() => {
      setAlertMessages((prev) => {
        const updatedMessages = { ...prev };
        delete updatedMessages[product.id];
        return updatedMessages;
      });
    }, 3000);
  };

  const totalPages = Math.ceil(filteredAndSortedProducts().length / productsPerPage);

  return (
    <PageLayout pageTitle="Shop" subTitle="Home, Pages, Shop">
      <div className="flex flex-col lg:flex-row p-8 min-h-screen gap-6">
        <div className="lg:w-1/4">
          <ShopSideBar activeFilters={activeFilters} setActiveFilters={setActiveFilters} />
        </div>

        <div className="lg:w-3/4">
          <div className="bg-white p-4 rounded-lg shadow-md mb-6">
            <h2 className="text-xl font-bold mb-4 text-[#1D3178]">Ecommerce Accessories & Fashion Items</h2>
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

          <div className={`${viewType === "grid" ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" : "space-y-6"}`}>
            {currentProducts().map((product) => (
              <div key={product.id} className={`bg-white shadow-md rounded-lg overflow-hidden ${viewType === "list" ? "flex" : ""}`}>
                <div className={`${viewType === "list" ? "flex-shrink-0 w-1/5" : "w-full"} p-2`}>
                  <Link to={`/product/${product.id}`}>
                    <img
                      src={product.image}
                      alt={product.title}
                      className={`w-full h-44 object-contain cursor-pointer transition-transform duration-300 ${
                        zoomedProduct === product.id ? "transform scale-125" : ""
                      }`}
                      onClick={() => setZoomedProduct(zoomedProduct === product.id ? null : product.id)}
                    />
                  </Link>
                </div>
                <div className={`${viewType === "list" ? "flex-grow p-4 flex flex-col" : "p-4"}`}>
                  <h3 className="text-lg font-bold text-gray-800">{product.title}</h3>
                  <div className="flex items-center justify-start gap-4 mb-2">
                    <span className="text-lg font-semibold text-blue-500">${product.price}</span>
                    {product.discount && (
                      <span className="text-sm line-through text-pink-500">${product.price + product.discount}</span>
                    )}
                  </div>
                  <div className="flex gap-1 text-yellow-500 mb-4">{renderStars(product.rating.rate)}</div>

                  {/* Icons */}
                  <div className="flex items-center gap-3">
                    <button
                      className={`p-2 rounded-full ${cartStatus[product.id] ? "bg-pink-600 text-white" : "bg-white text-pink-600 border-2 border-pink-600"}`}
                      onClick={() => handleAddToCart(product)}
                    >
                      <FaCartPlus />
                    </button>
                    <button
                      className={`p-2 rounded-full border-2 ${wishlist.includes(product.id) ? "bg-pink-600 border-pink-600 text-white" : "border-pink-600 text-pink-600"}`}
                      onClick={() => handleToggleWishlist(product)}
                    >
                      <FaHeart />
                    </button>
                    <button className="p-2 rounded-full bg-blue-600 text-white" onClick={() => setZoomedProduct(product.id)}>
                      <FaSearchPlus />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Alert Messages */}
          <div className="fixed top-0 left-1/2 transform -translate-x-1/2 z-50 space-y-2">
            {Object.keys(alertMessages).map((productId) => {
              const alert = alertMessages[productId];
              return (
                <div
                  key={productId}
                  className={`bg-${alert.type === "cart" ? "pink" : "pink"}-500 text-white p-4 rounded-md shadow-lg transition-opacity duration-1000 opacity-100`}
                  style={{
                    opacity: alert ? 1 : 0,
                    transition: "opacity 3s ease-out", // Fade out effect after 3 seconds
                  }}
                >
                  {alert.msg}
                </div>
              );
            })}
          </div>

          {/* Pagination */}
          <div className="flex justify-center gap-3 mt-6">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx + 1}
                onClick={() => setCurrentPage(idx + 1)}
                className={`px-4 py-2 border rounded-md ${
                  currentPage === idx + 1 ? "bg-blue-600 text-white" : "bg-white text-blue-600"
                }`}
              >
                {idx + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Shop;
