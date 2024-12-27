import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaCartPlus, FaHeart, FaSearchPlus } from "react-icons/fa";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import PageLayout from "../Components/PageLayout";
import { DataContext } from "../Components/DataContext";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, addToCart, toggleWishlist, wishlist } = useContext(DataContext); // Get toggleWishlist and wishlist from context
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [activeTab, setActiveTab] = useState("description");
  const [isZoomed, setIsZoomed] = useState(false); // State for zoom effect

  useEffect(() => {
    const fetchProduct = () => {
      const product = products.find((item) => item.id === parseInt(id));
      setProduct(product);
    };

    const fetchRelatedProducts = () => {
      if (product) {
        const related = products.filter(
          (item) => item.category === product.category && item.id !== product.id
        );
        setRelatedProducts(related.slice(0, 4)); // Limit to 4 related products
      }
    };

    fetchProduct();
    fetchRelatedProducts();
  }, [id, product, products]);

  if (!product) return <div>Loading...</div>;

  const rating = product.rating.rate;

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

  const isLiked = wishlist.includes(product?.id); // Check if product is in wishlist

  return (
    <PageLayout pageTitle="Product Details">
      <div className="p-4 md:p-8">
        <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Thumbnails */}
            <div className="w-full md:w-1/4 flex flex-row md:flex-col gap-4">
              <img
                src={product.image}
                alt={product.title}
                className="w-1/4 md:w-full h-24 object-contain cursor-pointer"
              />
              <img
                src={product.image}
                alt={product.title}
                className="w-1/4 md:w-full h-24 object-contain cursor-pointer"
              />
              <img
                src={product.image}
                alt={product.title}
                className="w-1/4 md:w-full h-24 object-contain cursor-pointer"
              />
            </div>

            {/* Main Image */}
            <div className="w-full md:w-1/2">
              <img
                src={product.image}
                alt={product.title}
                className={`w-full h-auto object-cover transition-transform duration-300 ${
                  isZoomed ? "transform scale-125" : ""
                }`}
              />
            </div>

            {/* Product Info */}
            <div className="w-full md:w-1/4 flex flex-col justify-between">
              <h1 className="text-xl md:text-2xl font-bold text-gray-800">{product.title}</h1>
              <div className="flex flex-wrap items-center justify-between mt-4">
                <span className="text-lg font-semibold text-blue-500">
                  ${product.price}
                </span>
                {product.price < product.price * 1.2 && (
                  <span className="text-sm line-through text-red-500">
                    ${(product.price * 1.2).toFixed(2)}
                  </span>
                )}
              </div>
              <div className="flex space-x-1 text-yellow-500 mt-2">
                {renderStars(rating)}
              </div>

              <p className="text-gray-600 mt-4">{product.description}</p>

              <div className="flex gap-2 mt-4">
                <span className="font-medium">Colors:</span>
                <div className="flex space-x-2">
                  <span className="w-6 h-6 bg-yellow-400 rounded-full cursor-pointer"></span>
                  <span className="w-6 h-6 bg-red-500 rounded-full cursor-pointer"></span>
                  <span className="w-6 h-6 bg-blue-700 rounded-full cursor-pointer"></span>
                </div>
              </div>

              <div className="flex gap-3 items-center mt-6">
                <button
                  className="text-white bg-red-600 p-2 rounded-full cursor-pointer"
                  onClick={() => addToCart(product)} // Add product to cart
                >
                  <FaCartPlus />
                </button>
                <button
                  className={`p-2 rounded-full cursor-pointer border-2 ${
                    isLiked
                      ? "bg-red-600 border-red-600 text-white"
                      : "border-red-600 text-red-600"
                  }`}
                  onClick={() => toggleWishlist(product.id)} // Toggle wishlist state
                >
                  <FaHeart />
                </button>
                <button
                  className="text-gray-600 bg-white p-2 rounded-full border cursor-pointer hover:bg-gray-100"
                  onClick={() => setIsZoomed(!isZoomed)} // Toggle zoom effect
                >
                  <FaSearchPlus />
                </button>
              </div>
            </div>
          </div>

          {/* Product Tabs */}
          <div className="mt-8">
            <div className="flex space-x-8">
              <button
                className={`text-lg font-medium ${
                  activeTab === "description" ? "text-blue-500" : "text-gray-600"
                }`}
                onClick={() => setActiveTab("description")}
              >
                Description
              </button>
              <button
                className={`text-lg font-medium ${
                  activeTab === "reviews" ? "text-blue-500" : "text-gray-600"
                }`}
                onClick={() => setActiveTab("reviews")}
              >
                Reviews
              </button>
            </div>

            <div className="mt-4">
              {activeTab === "description" ? (
                <p className="text-gray-600">{product.description}</p>
              ) : (
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">Reviews</h3>
                  <p className="text-gray-600 mt-4">
                    No reviews yet. Be the first to write a review!
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Related Products */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-gray-800">Related Products</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
              {relatedProducts.map((relatedProduct) => (
                <div
                  key={relatedProduct.id}
                  className="bg-white shadow-lg rounded-lg overflow-hidden"
                >
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="text-xl font-semibold text-gray-800">
                      {relatedProduct.title}
                    </h4>
                    <p className="text-gray-600 mt-2">${relatedProduct.price}</p>
                    <div className="mt-4">
                      <button
                        className="text-white bg-blue-500 py-2 px-4 rounded-full"
                        onClick={() => navigate(`/product/${relatedProduct.id}`)}
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ProductDetails;
