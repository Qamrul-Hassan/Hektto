import React, { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaCartPlus, FaHeart, FaSearchPlus } from "react-icons/fa";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import PageLayout from "../Components/PageLayout";
import { DataContext } from "../Components/DataContext";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, addToCart, toggleWishlist, wishlist } = useContext(DataContext);

  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [activeTab, setActiveTab] = useState("description");
  const [isZoomed, setIsZoomed] = useState(false);
  const [cartMessage, setCartMessage] = useState("");
  const [wishlistMessage, setWishlistMessage] = useState("");
  const [isInCart, setIsInCart] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    if (!products || products.length === 0) return;

    const selectedProduct = products.find((item) => item.id === parseInt(id));
    setProduct(selectedProduct);

    if (selectedProduct) {
      const related = products.filter(
        (item) => item.category === selectedProduct.category && item.id !== selectedProduct.id
      );
      setRelatedProducts(related.slice(0, 4));
    }
  }, [id, products]);

  useEffect(() => {
    if (product) {
      setIsLiked(wishlist.includes(product.id));
    }
  }, [wishlist, product]);

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

  const handleAddToCart = () => {
    addToCart(product);
    setIsInCart(true);
    setCartMessage("Cart: Item added");
    setTimeout(() => setCartMessage(""), 2000);
  };

  const handleToggleWishlist = () => {
    toggleWishlist(product.id);
    setWishlistMessage(isLiked ? "Item removed from wishlist" : "Item added to wishlist");
    setTimeout(() => setWishlistMessage(""), 2000);
  };

  return (
    <PageLayout pageTitle="Product Details">
      <div className="p-4 md:p-8">
        <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-md">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Thumbnails */}
            <div className="w-full md:w-1/4 flex flex-row md:flex-col gap-4">
              {[...Array(3)].map((_, index) => (
                <img
                  key={index}
                  src={product.image}
                  alt={product.title}
                  className="w-1/4 md:w-full h-24 object-contain cursor-pointer"
                />
              ))}
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
                <span className="text-lg font-semibold text-blue-500">${product.price}</span>
                <span className="text-sm line-through text-red-500">
                  ${(product.price * 1.2).toFixed(2)}
                </span>
              </div>
              <div className="flex space-x-1 text-yellow-500 mt-2">{renderStars(rating)}</div>

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
                  className={`p-2 rounded-full cursor-pointer ${
                    isInCart ? "bg-pink-600 text-white" : "bg-white text-pink-600 border border-pink-600"
                  }`}
                  onClick={handleAddToCart}
                >
                  <FaCartPlus />
                </button>
                <button
                  className={`p-2 rounded-full cursor-pointer border-2 ${
                    isLiked ? "bg-pink-500 border-pink-500 text-white" : "border-pink-500 text-pink-500"
                  }`}
                  onClick={handleToggleWishlist}
                >
                  <FaHeart />
                </button>
                <button
                  className="text-gray-600 bg-white p-2 rounded-full border cursor-pointer hover:bg-gray-100"
                  onClick={() => setIsZoomed(!isZoomed)}
                >
                  <FaSearchPlus />
                </button>
              </div>

              {cartMessage && <p className="text-pink-500 mt-2">{cartMessage}</p>}
              {wishlistMessage && <p className="text-pink-500 mt-2">{wishlistMessage}</p>}
            </div>
          </div>

          {/* Related Products */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-gray-800">Related Products</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
              {relatedProducts.map((relatedProduct) => (
                <div key={relatedProduct.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                  <img src={relatedProduct.image} alt={relatedProduct.title} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <h4 className="text-xl font-semibold text-gray-800">{relatedProduct.title}</h4>
                    <p className="text-gray-600 mt-2">${relatedProduct.price}</p>
                    <button
                      className="text-white bg-blue-500 py-2 px-4 rounded-full mt-4"
                      onClick={() => navigate(`/product/${relatedProduct.id}`)}
                    >
                      View Product
                    </button>
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
