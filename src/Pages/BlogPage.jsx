import React, { useContext, useEffect, useState } from "react";
import PageLayout from "../Components/PageLayout";
import { FaCalendarAlt, FaPenNib, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { DataContext } from "../Components/DataContext";
import BlogImage1 from "../assets/Image/Blog-1.png";
import BlogImage2 from "../assets/Image/Blog-2.png";
import BlogImage3 from "../assets/Image/Blog-3.png";
import RecentPostImage1 from "../assets/Image/BlogS-1.png";
import RecentPostImage2 from "../assets/Image/BlogS-2.png";
import RecentPostImage3 from "../assets/Image/BlogS-3.png";
import RecentPostImage4 from "../assets/Image/BlogS-4.png";

const BlogPage = () => {
  const { products } = useContext(DataContext); // Access products from context
  const [loading, setLoading] = useState(true); // Manage loading state for products

  useEffect(() => {
    if (products.length > 0) {
      setLoading(false);
    }
  }, [products]);

  const blogPosts = [
    {
      image: BlogImage1,
      title: "Aenean vitae in aliquam ultrices lectus. Etiam.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum.",
      date: "Aug 09 2020",
    },
    {
      image: BlogImage2,
      title: "Mauris at orci non vulputate diam tincidunt nec.",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum.",
      date: "Aug 09 2020",
    },
    {
      image: BlogImage3,
      title: "Sit nam congue feugiat nisl, mauris amet nisi.",
      content:
        "Sit nam congue feugiat nisl, mauris amet nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: "Aug 09 2020",
    },
  ];

  const recentPosts = [
    { image: RecentPostImage1, title: "It is a long established fact" },
    { image: RecentPostImage2, title: "It is a long established fact" },
    { image: RecentPostImage3, title: "It is a long established fact" },
    { image: RecentPostImage4, title: "It is a long established fact" },
  ];

  const categories = [
    { name: "Hobbies", count: 14 },
    { name: "Women", count: 21 },
    { name: "Sports", count: 10 },
    { name: "Tech", count: 5 },
    { name: "Lifestyle", count: 7 },
  ];

  const tags = ["Fashion", "Electronics", "Tech", "Sports", "Health", "Music"];

  return (
    <PageLayout pageTitle="Blog Page">
      <div className="container mx-auto px-4 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* Main Blog Content */}
          <div className="col-span-3">
            {blogPosts.map((post, index) => (
              <div key={index} className="mb-10 border-b pb-6">
                <img
                  src={post.image}
                  alt={`Blog Post ${index + 1}`}
                  className="w-full rounded-lg mb-4"
                />
                <div className="text-sm text-purple-500 items-center inline-flex">
                  <FaPenNib className="mr-2 text-red-600 text-lg" />
                  <span className="text-lg font-semibold text-purple-500 mr-2 bg-pink-200">
                    Surf Auxion
                  </span>
                  <FaCalendarAlt className="mr-2 text-yellow-400 text-lg" />
                  <span className="bg-orange-200 text-lg">{post.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 my-2">
                  {post.title}
                </h3>
                <p className="text-gray-600">{post.content}</p>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="col-span-1 space-y-10">
            {/* Categories */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Categories</h4>
              <div className="grid grid-cols-2 gap-2">
                {categories.map((category, index) => (
                  <span
                    key={index}
                    className="text-gray-600 text-sm font-bold bg-gray-100 px-3 py-1 rounded-md flex justify-between hover:bg-pink-500 transition-colors duration-200"
                  >
                    {category.name} <span>({category.count})</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Recent Posts */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Recent Posts</h4>
              {recentPosts.map((post, index) => (
                <div key={index} className="flex items-start mb-4">
                  <img
                    src={post.image}
                    alt={`Recent Post ${index + 1}`}
                    className="w-20 h-20 object-cover rounded-lg mb-4"
                  />
                  <div className="ml-3">
                    <span className="block text-sm text-gray-800 font-medium truncate w-64">
                      {post.title}
                    </span>
                    <span className="text-xs text-gray-500">Aug 09 2020</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Products Section */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Products</h4>
              {loading ? (
                <p className="text-gray-500">Loading products...</p>
              ) : (
                <div className="grid grid-cols-2 gap-4">
                  {products.slice(0, 4).map((product, index) => (
                    <div key={index} className="bg-white border shadow-md p-4 rounded-lg">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-28 object-cover mb-4 rounded-md"
                      />
                      <h5 className="text-gray-800 font-medium text-md mb-2">
                        {product.title}
                      </h5>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-800 font-semibold">
                          ${product.price.toFixed(2)}
                        </span>
                        <span className="text-sm text-red-500 line-through">
                          ${(product.price * 1.2).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Follow Us */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <FaFacebook className="text-blue-600 text-xl hover:text-blue-800 transition-colors cursor-pointer" />
                <FaTwitter className="text-blue-400 text-xl hover:text-blue-600 transition-colors cursor-pointer" />
                <FaInstagram className="text-pink-500 text-xl hover:text-pink-700 transition-colors cursor-pointer" />
                <FaLinkedin className="text-blue-700 text-xl hover:text-blue-900 transition-colors cursor-pointer" />
              </div>
            </div>

            {/* Tags */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Tags</h4>
              <div className="flex flex-wrap">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-md mr-2 mb-2 relative cursor-pointer hover:text-pink-500 hover:underline"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default BlogPage;
