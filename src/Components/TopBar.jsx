import { FaEnvelope, FaPhoneAlt, FaHeart, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../Components/DataContext";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const TopBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu
  const [user, setUser] = useState(null); // State to track logged-in user

  const { cart, wishlist } = useContext(DataContext); // Context for cart and wishlist

  const totalCartItems = cart.reduce((total, item) => total + item.quantity, 0);
  const totalWishlistItems = wishlist.length;

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Update user state
    });
    return () => unsubscribe(); // Cleanup subscription
  }, []);

  const handleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.error("Error logging out:", error);
      });
  };

  return (
    <div className="bg-purple-600 h-16 flex items-center justify-between px-4 text-white relative">
      <div className="flex items-center space-x-6 text-sm">
        <div className="flex items-center space-x-2">
          <FaEnvelope title="Email" />
          <span className="font-josefin font-semibold">mdqamrul74@gmail.com</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaPhoneAlt title="Phone" />
          <span className="font-josefin font-semibold">(12345)67890</span>
        </div>
      </div>

      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="sm:hidden focus:outline-none text-lg"
        aria-label="Toggle Menu"
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <div className="hidden sm:flex items-center space-x-6 text-sm">
        <select
          className="bg-purple-600 border-none text-sm font-josefin text-white cursor-pointer outline-none focus:ring focus:ring-purple-400"
          defaultValue="English"
        >
          <option value="English">English</option>
          <option value="Bangla">Bangla</option>
          <option value="French">French</option>
        </select>

        <select
          className="bg-purple-600 border-none text-sm font-josefin text-white cursor-pointer outline-none focus:ring focus:ring-purple-400"
          defaultValue="USD"
        >
          <option value="USD">USD</option>
          <option value="TK">BDT</option>
          <option value="Euro">Euro</option>
        </select>

        {user ? (
          <button
            onClick={handleLogout}
            className="font-josefin font-semibold text-sm cursor-pointer"
          >
            Log Out
          </button>
        ) : (
          <Link to="/login" className="font-josefin font-semibold text-sm cursor-pointer">
            Login
          </Link>
        )}

        <Link to="/shop-wishlist">
          <div className="relative">
            <FaHeart className="text-2xl cursor-pointer" title="Wishlist" />
            {totalWishlistItems > 0 && (
              <span className="absolute top-0 left-4 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {totalWishlistItems}
              </span>
            )}
          </div>
        </Link>

        <Link to="/cart">
          <div className="relative">
            <FaShoppingCart className="text-2xl cursor-pointer" title="Shopping Cart" />
            {totalCartItems > 0 && (
              <span className="absolute top-0 left-4 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {totalCartItems}
              </span>
            )}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default TopBar;
