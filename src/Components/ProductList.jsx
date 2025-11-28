import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ShopList = () => {
  const [products, setProducts] = useState([]); // State to store product data
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [error, setError] = useState(null); // State to manage errors

  useEffect(() => {
    // Fetch product data from FakeStore API
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data); // Store the product data in state
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((err) => {
        setError(err.message); // Set error message if the fetch fails
        setLoading(false); // Set loading to false if an error occurs
      });
  }, []); // Empty array ensures the effect runs only once when the component mounts

  if (loading) {
    return <p>Loading...</p>; // Show loading text while data is being fetched
  }

  if (error) {
    return <p>Error: {error}</p>; // Display error message if there's an error
  }

  return (
    <div>
      <h1>Shop List</h1>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-cover mb-4"
            />
            <h2 className="text-lg font-bold">{product.title}</h2>
            <p>{product.description}</p>
            <p className="text-xl text-green-600 mt-2">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopList;
