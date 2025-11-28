import React, { useState, useEffect } from "react";
import axios from "axios";

const TrendingSection = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log("Fetched Posts:", response.data);
        setPosts(response.data.slice(0, 4)); // Limit to 4 posts
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  return (
    <div className="relative w-full pt-16 pb-16 bg-gray-100 z-10">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-[#151875] font-josefin">
          Trending Posts
        </h2>
      </div>

      {posts.length === 0 ? (
        <p>Loading posts...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4 mx-auto max-w-7xl">
          {posts.map((post) => (
            <div
              key={post.id}
              className="relative w-full h-[420px] bg-white shadow-lg rounded-md overflow-hidden"
              style={{
                filter: "drop-shadow(0px 8px 40px rgba(49, 32, 138, 0.05))",
              }}
            >
              <img
                src={`https://picsum.photos/270/200?random=${post.id}`}
                alt={post.title}
                className="w-full h-[200px] object-cover rounded-t-md"
              />
              <div className="p-4 flex flex-col justify-between h-[220px]">
                <div>
                  <h3 className="font-josefin text-lg text-[#151875]">
                    {post.title}
                  </h3>
                  <p className="font-lato text-sm text-[#888] mt-2">
                    {post.body.slice(0, 50)}...
                  </p>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <span className="font-bold text-[#151875]">
                    ${Math.floor(Math.random() * 100) + 10}
                  </span>
                  <button className="text-white bg-pink-500 px-4 py-2 rounded-md hover:bg-pink-600">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TrendingSection;
