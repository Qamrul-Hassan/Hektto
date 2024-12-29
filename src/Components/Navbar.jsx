import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaSearch } from "react-icons/fa";
import Hekto from "../assets/Image/Hekto.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const menuRef = useRef(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
        setFilteredProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim() === "") {
      setFilteredProducts(products);
    } else {
      const results = products.filter((product) =>
        product.title.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredProducts(results);
    }
  };

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className="relative bg-white h-16 flex items-center justify-between px-6 md:px-10 shadow-md">
        <div className="flex items-center">
          <img
            src={Hekto}
            alt="Hekto Logo"
            className="h-10 w-auto object-contain"
          />
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden flex items-center space-x-2 relative">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="text-sm pl-10 pr-4 py-2 border rounded-full outline-none bg-[#F0F0F0] text-[#0D0E43]"
          />
          <button className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-[#FB2E86] p-2 rounded-full">
            <FaSearch className="text-white text-lg" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-2xl text-[#0D0E43] md:hidden"
          aria-label="Toggle Menu"
        >
          <FaBars />
        </button>

        {/* Desktop Navbar */}
        <ul className="hidden md:flex items-center space-x-8">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-sm font-lato ${isActive ? "text-[#FB2E86]" : "text-[#0D0E43]"} hover:underline`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `text-sm font-lato ${isActive ? "text-[#FB2E86]" : "text-[#0D0E43]"} hover:underline`
              }
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                `text-sm font-lato ${isActive ? "text-[#FB2E86]" : "text-[#0D0E43]"} hover:underline`
              }
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-sm font-lato ${isActive ? "text-[#FB2E86]" : "text-[#0D0E43]"} hover:underline`
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about-us"
              className={({ isActive }) =>
                `text-sm font-lato ${isActive ? "text-[#FB2E86]" : "text-[#0D0E43]"} hover:underline`
              }
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/faq"
              className={({ isActive }) =>
                `text-sm font-lato ${isActive ? "text-[#FB2E86]" : "text-[#0D0E43]"} hover:underline`
              }
            >
              FAQ
            </NavLink>
          </li>

          {/* Search bar for desktop screens */}
          <li className="relative flex items-center">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="text-sm pl-10 pr-4 py-2 border rounded-full outline-none bg-[#F0F0F0] text-[#0D0E43]"
            />
            <button className="absolute top-1/2 right-1 transform -translate-y-1/2 bg-[#FB2E86] p-2 rounded-full">
              <FaSearch className="text-white text-lg" />
            </button>
          </li>
        </ul>
      </div>

      {/* Search Results Below Navbar */}
      {searchTerm && (
        <div className="mt-4 px-6 max-h-96 overflow-y-auto">
          <h2 className="text-xl font-semibold">Search Results:</h2>
          <ul className="space-y-2">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <li key={product.id} className="flex items-center space-x-2 text-sm text-[#0D0E43]">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-10 h-10 object-cover rounded-md"
                  />
                  <Link to={`/product/${product.id}`} className="hover:underline">
                    {product.title}
                  </Link>
                </li>
              ))
            ) : (
              <li className="text-sm text-gray-500">No products found</li>
            )}
          </ul>
        </div>
      )}

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`fixed top-0 left-0 w-[55%] h-[70%] rounded-r-2xl bg-[#7E33E0] shadow-lg z-50 py-8 px-6 mobile-menu transform transition-transform duration-700 ease-in-out  ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <ul className="space-y-6 text-white">
          <li>
            <NavLink
              to="/"
              className="font-lato text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className="font-lato text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shop"
              className="font-lato text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="font-lato text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about-us"
              className="font-lato text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/faq"
              className="font-lato text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
