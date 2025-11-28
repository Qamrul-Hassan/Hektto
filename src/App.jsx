
import { Provider } from "react-redux"; 
import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import store from "./store";
import RouteLayout from "./Pages/RouteLayout";
import Home from "./Pages/Home";
import ContactUs from "./Pages/ContactUs";
import BlogPage from "./Pages/BlogPage";
import Shop from "./Pages/Shop"; 
import ProductDetails from "./Pages/ProductDetails"; 
import NotFound from "./Pages/NotFound";
import LoginPage from "./Pages/LoginPage";
import ShopCartPage from "./Pages/ShopCartPage";
import ShopWishList from "./Pages/ShopWishList"; 
import CreateAccountPage from "./Pages/CreateAccountPage";
import ForgotPasswordPage from "./Pages/ForgotPasswordPage"; 
import DataProvider from "./Components/DataContext"; 
import FAQPage from "./Pages/FAQPage"; 
import AboutUs from "./Pages/AboutUs"; 
import Dashboard from "./Pages/Dashboard"; 
import Customers from "./Pages/Customers";
// Define the router configuration with different routes for each page
const router = createBrowserRouter([
  {
    path: "/",
    element: <RouteLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "contact", element: <ContactUs /> },
      { path: "blog", element: <BlogPage /> },
      { path: "shop", element: <Shop /> },
      { path: "product/:id", element: <ProductDetails /> },
      { path: "login", element: <LoginPage /> },
      { path: "create-account", element: <CreateAccountPage /> },
      { path: "cart", element: <ShopCartPage /> },
      { path: "shop-wishlist", element: <ShopWishList /> },
      { path: "forgot-password", element: <ForgotPasswordPage /> },
      { path: "about-us", element: <AboutUs /> },
      { path: "faq", element: <FAQPage /> },
      { path: "dashboard", element: <Dashboard /> },
      { path: "customers", element: <Customers /> },
      { path: "*", element: <NotFound /> },
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
