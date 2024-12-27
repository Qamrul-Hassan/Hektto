import React from 'react';

import Blog1Image from '../assets/Image/Frame1.png';
import Blog2Image from '../assets/Image/Frame2.png';
import Blog3Image from '../assets/Image/Frame3.png';

const LatestBlog = () => {
 
  const blogs = [
    {
      id: 1,
      author: 'SaberAli',
      date: '21 August, 2020',
      title: 'Top essential Trends in 2021',
      description: 'More off this less hello samlande lied much over tightly circa horse taped mighty.',
      image: Blog1Image,
    },
    {
      id: 2,
      author: 'Surfauxion',
      date: '21 August, 2020',
      title: 'Top essential Trends in 2021',
      description: 'More off this less hello samlande lied much over tightly circa horse taped mighty.',
      image: Blog2Image,
    },
    {
      id: 3,
      author: 'SaberAli',
      date: '21 August, 2020',
      title: 'Top essential Trends in 2021',
      description: 'More off this less hello samlande lied much over tightly circa horse taped mighty.',
      image: Blog3Image,
    },
  ];

  return (
    <div className="py-12 bg-white">
    
      <div className="text-center mb-8">
        <h2 className=" font-josefin text-3xl font-bold text-gray-800">Latest Blog</h2>
      </div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div key={blog.id} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
           
            <img src={blog.image} alt={blog.title} className="w-full h-48 object-fit" />
            
            <div className="p-10">
              
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span className="pr-2 text-pink-500">✍️ {blog.author}</span>
                <span>📅 {blog.date}</span>
              </div>
             
              <h3 className="text-lg font-bold text-gray-800 mb-2 ">{blog.title}</h3>
              
              <p className="text-gray-600 text-sm mb-4">{blog.description}</p>
             
              <button className="text-blue-600 hover:text-pink-500 underline underline-color-pink hover:underline-color-pink  ">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestBlog;
