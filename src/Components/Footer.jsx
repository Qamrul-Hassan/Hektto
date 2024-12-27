

const Footer = () => {
  return (
    <footer className="bg-[#F1F0FF] text-gray-700 py-8">
      <div className="container mx-auto px-4 lg:px-20">
        <div className="flex flex-wrap justify-between">
          <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
            <h1 className="font-bold text-xl text-black">Hekto</h1>
            <div className="mt-4">
              <input
                type="email"
                placeholder="Enter Email Address"
                className="w-20% px-1 py-1 rounded-md text-gray-500 border border-gray-300 focus:outline-none gap-1"
              />
              <button className="w-10% mt-2 bg-pink-500 hover:bg-pink-600 text-white font-small py-1 px-2 rounded-md ml-1">
                Sign Up
              </button>
            </div>
            <div className="mt-4">
              <p className="font-medium text-gray-600">Contact Info</p>
              <p className="text-sm text-gray-500 mt-1">
                17 Princess Road, London, Greater London NW1 8JR, UK
              </p>
            </div>
          </div>

         
          <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
            <h2 className="font-bold text-lg text-black mb-4">Categories</h2>
            <ul className="space-y-2">
              <li>Laptops & Computers</li>
              <li>Cameras & Photography</li>
              <li>Smart Phones & Tablets</li>
              <li>Video Games & Consoles</li>
              <li>Waterproof Headphones</li>
            </ul>
          </div>

         
          <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
            <h2 className="font-bold text-lg text-black mb-4">Customer Care</h2>
            <ul className="space-y-2">
              <li>My Account</li>
              <li>Discount</li>
              <li>Returns</li>
              <li>Orders History</li>
              <li>Order Tracking</li>
            </ul>
          </div>

      
          <div className="w-full lg:w-1/4">
            <h2 className="font-bold text-lg text-black mb-4">Pages</h2>
            <ul className="space-y-2">
              <li>Blog</li>
              <li>Browse the Shop</li>
              <li>Category</li>
              <li>Pre-Built Pages</li>
              <li>Visual Composer Elements</li>
              <li>WooCommerce Pages</li>
            </ul>
          </div>
        </div>

        
        <div className="mt-8 flex justify-between items-center text-sm text-gray-500">
          <p>©Qamrul Hassan - All Rights Reserved</p>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-pink-500">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="hover:text-pink-500">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-pink-500">
              <i className="fab fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
