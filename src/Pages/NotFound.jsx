
import { useNavigate } from "react-router-dom";
import PageLayout from "../Components/PageLayout"; 
import NotFoundImage from "../assets/Image/404.png"; 
const NotFound = () => {
  const navigate = useNavigate();

  return (
    <PageLayout pageTitle="Page Not Found">
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F6F5FF] px-4">
      {/* 404 Heading */}
      <h1 className="text-[80px] sm:text-[90px] font-extrabold text-pink-600 mb-2">
        404
      </h1>

    
      <div className="w-full flex justify-center mb-2">
        <img
          src={NotFoundImage}
          alt="Not Found"
          className="w-[85%] md:w-[750px] h-auto object-contain max-h-[350px] sm:max-h-[450px]"
        />
      </div>

    
      <button
        className="px-6 py-2 bg-pink-500 text-white font-medium rounded-lg hover:bg-pink-400 transition-all mb-4"
        onClick={() => navigate("/")}
      >
        Back to Home Page
      </button>
    </div>
    </PageLayout>
  );
};

export default NotFound;
