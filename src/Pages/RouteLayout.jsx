import { Outlet } from "react-router-dom";
import TopBar from "../Components/TopBar";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const RouteLayout = () => {
  return (
    <>
      <TopBar />
      <Navbar />

      <main className="container mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default RouteLayout;
