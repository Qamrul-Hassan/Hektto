import React from "react";
import { useNavigate } from "react-router-dom"; 
import PageLayout from "../Components/PageLayout";
import Offer from "../Components/Offers";
import AboutUsImage from "../assets/Image/About-us.png"; 
import Client1 from "../assets/Image/Client-1.png"; 
import Client2 from "../assets/Image/Client-2.png";
import Client3 from "../assets/Image/Client-1.png";

const AboutUs = () => {
  const navigate = useNavigate(); 

  
  const handleContactUsClick = () => {
    navigate("/contact-us"); 
  };

  return (
    <PageLayout pageTitle="About Us">
      
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <img
          src={AboutUsImage}
          alt="About Us"
          className="w-full rounded-lg shadow-lg"
        />
        <div>
          <h1 className="text-3xl font-bold text-[#0D0E43] mb-4">
            Know About Our Ecommerce Business, History
          </h1>
          <p className="text-lg text-[#333333] mb-6 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            neque ultrices ut vitae aliquam. Nisl sodales enim tristique amet
            erat vitae eget donec sit facilisis. Accumsan fusce vitae lobortis
            quis blandit quam.
          </p>
          
          <button
            onClick={handleContactUsClick} 
            className="bg-pink-500 text-white px-6 py-2 rounded-md hover:bg-pink-600 transition duration-300"
          >
            Contact Us
          </button>
        </div>
      </div>

      
      <div className="container mx-auto px-6 py-12 text-center">
        <h2 className="text-2xl font-bold text-[#0D0E43] mb-8">Our Features</h2>
        <Offer hideHeading /> {/* Pass a prop to hide the heading */}
      </div>

      
      <div className="container mx-auto px-6 py-12 text-center">
        <h2 className="text-2xl font-bold text-[#0D0E43] mb-8">Our Client Say!</h2>
        <div className="flex justify-center gap-6 mb-6">
          <img
            src={Client1}
            alt="Client 1"
            className="w-16 h-16 rounded-full shadow-md hover:scale-105 transition-transform duration-300"
          />
          <img
            src={Client2}
            alt="Client 2"
            className="w-16 h-16 rounded-full shadow-md hover:scale-105 transition-transform duration-300"
          />
          <img
            src={Client3}
            alt="Client 3"
            className="w-16 h-16 rounded-full shadow-md hover:scale-105 transition-transform duration-300"
          />
        </div>
        <p className="text-lg text-[#333333] mb-4 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dui
          risus tristique quam vel a id sollicitudin aliquet id arcu. Nunc urna
          non amet, sed sapien gravida nec non arcu.
        </p>
        <p className="text-lg text-pink-500 font-semibold">Selina Gomez</p>
      </div>
    </PageLayout>
  );
};

export default AboutUs;
