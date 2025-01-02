import React from "react";
import { Provider } from "react-redux"; // Redux Provider for global state management
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // Router setup
import store from "./store"; // Import Redux store
import RouteLayout from "./Pages/RouteLayout"; // Layout for the pages
import Home from "./Pages/Home"; // Home page
import ContactUs from "./Pages/ContactUs"; // Contact Us page
import BlogPage from "./Pages/BlogPage"; // Blog page
import Shop from "./Pages/Shop"; // Shop page
import ProductDetails from "./Pages/ProductDetails"; // Product Details page
import NotFound from "./Pages/NotFound"; // 404 page
import LoginPage from "./Pages/LoginPage"; // Login page
import ShopCartPage from "./Pages/ShopCartPage"; // Shopping Cart page
import ShopWishList from "./Pages/ShopWishList"; // Shop Wish List page
import CreateAccountPage from "./Pages/CreateAccountPage"; // Create Account page
import ForgotPasswordPage from "./Pages/ForgotPasswordPage"; // Forgot Password page
import DataProvider from "./Components/DataContext"; // Custom context provider
import FAQPage from "./Pages/FAQPage"; // FAQ page
import AboutUs from "./Pages/AboutUs"; // About Us page
import Dashboard from "./Pages/Dashboard"; // Import the Dashboard page
import Customers from "./Pages/Customers";
// Define the router configuration with different routes for each page
const router = createBrowserRouter([
  {
    path: "/",
    element: <RouteLayout />, // Base layout for all pages
    children: [
      { index: true, element: <Home /> }, // Home route
      { path: "contact", element: <ContactUs /> }, // Contact Us route
      { path: "blog", element: <BlogPage /> }, // Blog route
      { path: "shop", element: <Shop /> }, // Shop route
      { path: "product/:id", element: <ProductDetails /> }, // Product Details route
      { path: "login", element: <LoginPage /> }, // Login route
      { path: "create-account", element: <CreateAccountPage /> }, // Create Account route
      { path: "cart", element: <ShopCartPage /> }, // Cart route
      { path: "shop-wishlist", element: <ShopWishList /> }, // Shop Wish List route
      { path: "forgot-password", element: <ForgotPasswordPage /> }, // Forgot Password route
      { path: "about-us", element: <AboutUs /> }, // About Us route
      { path: "faq", element: <FAQPage /> }, // FAQ route
      { path: "dashboard", element: <Dashboard /> }, // Dashboard 
      { path: "customers", element: <Customers /> },
      { path: "*", element: <NotFound /> }, // Not Found route for unmatched URLs
    ],
  },
]);

// Main App component
function App() {
  return (
    <Provider store={store}> {/* Redux store for global state management */}
      <DataProvider> {/* Custom context provider for additional app state */}
        <RouterProvider router={router} /> {/* Routing system for navigation */}
      </DataProvider>
    </Provider>
  );
}

export default App;
