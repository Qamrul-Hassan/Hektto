// src/Pages/Customers.jsx
import React from 'react';
import PageLayout from '../Components/PageLayout';
import customer1 from '../assets/Image/Client-1.png';
import customer2 from '../assets/Image/Client-2.png';
import customer3 from '../assets/Image/Client-1.png';
import { FaStar } from 'react-icons/fa'; // Importing Font Awesome star icon

const Customers = () => {
  const reviews = [
    {
      name: 'John Doe',
      image: customer1,
      review: 'Great products, amazing customer service! I am very satisfied with my purchase.',
      rating: 5,
    },
    {
      name: 'Jane Smith',
      image: customer2,
      review: 'The shipping was fast, and the product quality exceeded my expectations.',
      rating: 4,
    },
    {
      name: 'Michael Johnson',
      image: customer3,
      review: 'Highly recommend this store! They offer excellent deals and quality products.',
      rating: 5,
    },
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FaStar
          key={i}
          className={`inline-block ${i <= rating ? 'text-yellow-500' : 'text-gray-300'}`} // Filled stars are yellow, empty stars are gray
        />
      );
    }
    return stars;
  };

  return (
    <PageLayout pageTitle="Customer Reviews">
      <h1 className="text-4xl font-semibold text-center text-gray-800 mb-12">Customer Reviews</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out hover:shadow-xl"
          >
            <div className="flex items-center justify-center mb-6">
              <img
                src={review.image}
                alt={review.name}
                className="w-20 h-20 rounded-full border-4 border-yellow-500 shadow-md"
              />
            </div>
            <h3 className="text-xl font-bold text-center text-gray-800 mb-2">{review.name}</h3>
            <div className="flex justify-center mb-4">
              {renderStars(review.rating)}
            </div>
            <p className="text-gray-600 text-center">{review.review}</p>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default Customers;
