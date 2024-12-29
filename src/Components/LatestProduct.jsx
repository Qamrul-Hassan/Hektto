import { useContext } from "react"; 
import PropTypes from "prop-types";
import { DataContext } from "../Components/DataContext"; // Adjust the import path as per your project structure
import Sale from "../assets/Image/Sale.png";

const ProductCard = ({ product }) => (
  <div className="bg-white shadow-md rounded-md relative p-4">
    <div className="absolute top-[20px] left-[20px] transform rotate-[-18deg]">
      <img
        src={Sale}
        alt="Sale Tag"
        className="w-[85px] h-[57px] object-contain"
      />
    </div>

    <img
      src={product.image}
      alt={product.title}
      className="w-[180px] h-[180px] object-contain mx-auto mt-4"
    />

    <div className="mt-4 flex flex-col items-center gap-2">
      <h3 className="text-lg font-medium text-[#151875]">{product.title}</h3>
      <p className="text-sm text-gray-500">Category: {product.category}</p>
    </div>

    <div className="mt-4 flex justify-between items-center">
      <span className="text-lg font-bold text-[#151875]">${product.price}</span>

      <span className="text-sm text-[#FB2448] line-through">
        ${(product.price * 1.5).toFixed(2)}
      </span>
    </div>
  </div>
);

ProductCard.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category: PropTypes.string,
  }).isRequired,
};

const LatestProduct = () => {
  const { products, loadingProducts } = useContext(DataContext); // Use DataContext

  if (loadingProducts) {
    return (
      <div className="text-center py-12">
        <p className="text-lg text-gray-500">Loading latest products...</p>
      </div>
    );
  }

  // Limit to 8 products
  const limitedProducts = products.slice(0, 8);

  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 xl:px-20">
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="mb-4 font-josefin text-2xl md:text-3xl font-bold text-gray-800">
          Latest Products
        </h2>
        <div className="flex justify-center gap-4 text-[#FB2448] text-sm md:text-base">
          <span className="border-b-2 border-[#FB2448]">New Arrival</span>
          <span className="text-gray-500">Best Seller</span>
          <span className="text-gray-500">Featured</span>
          <span className="text-gray-500">Special Offer</span>
        </div>
      </div>

      {/* Products Grid */}
      <div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {limitedProducts.map((product) => (
            <div key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestProduct;
