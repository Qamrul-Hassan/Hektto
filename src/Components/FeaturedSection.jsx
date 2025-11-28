import React, { useRef } from 'react';
import Slider from "react-slick";
import product1 from "../assets/Image/image-1.png";
import product2 from "../assets/Image/image-2.png";
import product3 from "../assets/Image/image-3.png";
import product4 from "../assets/Image/image-4.png";
import { FaCartPlus, FaHeart, FaSearchPlus } from "react-icons/fa";
import "./FeaturedSection.css";



const sliderSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true, 
  centerMode: true,
  centerPadding: "10px",
  focusOnSelect: true,  
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        centerPadding: "20px",
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        centerPadding: "20px",
      },
    },
  ],
};

const FeaturedSection = () => {
  const sliderRef = useRef(null);

  const handleNext = () => {
    sliderRef.current.slickNext();
  };

  const handlePrev = () => {
    sliderRef.current.slickPrev();
  };

  const products = [
    {
      id: 1,
      image: product1,
      title: "Cantilever Chair",
      code: "Code - Y523201",
      price: "$42.00",
      colors: [
        { code: "#05E6B7" },
        { code: "#F701A8" },
        { code: "#00009D" },
      ],
    },
    {
      id: 2,
      image: product2,
      title: "Modern Sofa",
      code: "Code - M853402",
      price: "$58.00",
      colors: [
        { code: "#05E6B7" },
        { code: "#F701A8" },
        { code: "#00009D" },
      ],
    },
    {
      id: 3,
      image: product3,
      title: "Minimalist Chair",
      code: "Code - T621104",
      price: "$35.00",
      colors: [
        { code: "#05E6B7" },
        { code: "#F701A8" },
        { code: "#00009D" },
      ],
    },
    {
      id: 4,
      image: product4,
      title: "Elegant Chair",
      code: "Code - L978003",
      price: "$68.00",
      colors: [
        { code: "#05E6B7" },
        { code: "#F701A8" },
        { code: "#00009D" },
      ],
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-12">
        <div className="text-center mb-8">
          <h2 className="mb-2 leading-normal font-josefin text-3xl font-bold text-gray-800">
            Featured Products
          </h2>
          <p className="text-gray-600 leading-relaxed">Check out our top picks for you</p>
        </div>

        <Slider ref={sliderRef} {...sliderSettings} className="custom-slider">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white shadow-lg rounded-lg overflow-hidden relative transition duration-700 hover:shadow-xl custom-card"
            >
              <div className="bg-gray-100 h-60 flex items-center justify-center relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-48 object-contain"
                />
                <button className="absolute bottom-0 transform translate-y-full group-hover:translate-y-0 bg-[#08D15F] text-white text-sm px-4 py-2 rounded transition duration-700">
                  View Details
                </button>
              </div>

              <div className="p-6 transition duration-700 group-hover:bg-[#2F1AC4] group-hover:text-white">
                <h3 className="text-lg font-bold text-gray-800 group-hover:text-white transition duration-700 leading-normal">
                  {product.title}
                </h3>
                <p className="text-gray-500 text-sm mt-2 mb-1 group-hover:text-white transition duration-700 leading-relaxed">
                  {product.code}
                </p>

                <div className="flex mt-1 mb-3">
                  {product.colors.map((color, index) => (
                    <span
                      key={index}
                      className="inline-block w-3 h-1 mr-1"
                      style={{ backgroundColor: color.code }}
                    ></span>
                  ))}
                </div>

                <p className="text-gray-800 font-semibold text-lg group-hover:text-white transition duration-700 leading-normal">
                  {product.price}
                </p>

                <div className="absolute top-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition duration-700">
                  <div className="text-[#6fcfef] text-xl hover:text-[#2F1AC4] cursor-pointer">
                    <FaCartPlus />
                  </div>
                  <div className="text-pink-500 text-xl hover:text-[#2F1AC4] cursor-pointer">
                    <FaHeart />
                  </div>
                  <div className="text-[#6fcfef] text-xl hover:text-[#2F1AC4] cursor-pointer">
                    <FaSearchPlus />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        <div className="flex justify-center mt-4 space-x-4">
         
          <button
            onClick={handlePrev}
            className="w-8 h-1 border-t-4 border-pink-500 border-solid"
          ></button>
          <button
            onClick={handleNext}
            className="w-8 h-1 border-t-4 border-pink-500 border-solid"
          ></button>
           <button
            onClick={handleNext}
            className="w-8 h-1 border-t-4 border-pink-500 border-solid"
          ></button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
