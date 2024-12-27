import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ShopGrid = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(response => {
        console.log(response.data.products); // Ensure you're getting products and images
        setProducts(response.data.products);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div>
      <div className="common-header">
        <h1>Shop Grid Default</h1>
      </div>

      <div className="grid-container grid grid-cols-4 gap-4 p-6">
        {/* Check if we have products and render the grid */}
        {products.length > 0 ? (
          products.map((product) => (
            <div key={product.id} className="product-card p-4 bg-white shadow-md rounded">
              {/* Ensure this URL is valid */}
              <img
                src={product.images[0]}  {/* Accessing the first image */}
                alt={product.name}
                className="w-full h-auto"
                onError={(e) => e.target.src = 'fallback-image.jpg'} // Optional fallback
              />
              <h2 className="text-lg font-bold mt-2">{product.name}</h2>
              <p>{product.description}</p>
              <p>${product.price}</p>
            </div>
          ))
        ) : (
          <p>Loading products...</p> // In case products are not loaded
        )}
      </div>
    </div>
  );
};

export default ShopGrid;
