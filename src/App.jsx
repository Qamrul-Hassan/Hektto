import React from "react";
import { Provider } from "react-redux"; // Redux Provider
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // Router setup
import store from "./store"; // Redux store
import RouteLayout from "./Pages/RouteLayout"; // Main layout for routes
import Home from "./Pages/Home"; // Home page component
import ContactUs from "./Pages/ContactUs"; // Contact Us page component
import BlogPage from "./Pages/BlogPage"; // Blog page component
import Shop from "./Pages/Shop"; // Shop page component
import ProductDetails from "./Pages/ProductDetails"; // Product details component
import NotFound from "./Pages/NotFound"; // NotFound component for invalid routes
import LoginPage from "./Pages/LoginPage"; // Login page component
import ShopCartPage from "./Pages/ShopCartPage"; // Shopping cart page
import ShopWishList from "./Pages/ShopWishList"; // Wishlist page component
import CreateAccountPage from "./Pages/CreateAccountPage"; // Create Account page component
import ForgotPasswordPage from "./Pages/ForgotPasswordPage"; // Forgot password page
import DataProvider from "./Components/DataContext"; // Custom data context provider
import FAQPage from "./Pages/FAQPage"; // Import FAQPage component

// Define the router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <RouteLayout />, // Main layout
    children: [
      { index: true, element: <Home /> }, // Default route
      { path: "contact", element: <ContactUs /> }, // Contact Us route
      { path: "blog", element: <BlogPage /> }, // Blog route
      { path: "shop", element: <Shop /> }, // Shop route
      { path: "product/:id", element: <ProductDetails /> }, // Dynamic product details route
      { path: "login", element: <LoginPage /> }, // Login page route
      { path: "create-account", element: <CreateAccountPage /> }, // Create Account page route
      { path: "cart", element: <ShopCartPage /> }, // Shopping cart page route
      { path: "shop-wishlist", element: <ShopWishList /> }, // Wishlist route
      { path: "forgot-password", element: <ForgotPasswordPage /> }, // Forgot Password route
      { path: "faq", element: <FAQPage /> }, // FAQ page route
      { path: "*", element: <NotFound /> }, // Catch-all route for undefined paths
    ],
  },
]);

function App() {
  return (
    <Provider store={store}> {/* Redux store for global state management */}
      <DataProvider> {/* Custom context provider for additional app state */}
        <RouterProvider router={router} /> {/* Routing system */}
      </DataProvider>
    </Provider>
  );
}

export default App;
