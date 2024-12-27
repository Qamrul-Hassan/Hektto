
import PageLayout from "../Components/PageLayout"; 
import illustration from "../assets/Image/ContactUs.png";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <PageLayout pageTitle="Contact Us">
      
      <div className="min-h-screen bg-white flex flex-col justify-center items-center px-6 lg:px-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-5xl">
          
          <div>
            <h2 className="text-xl lg:text-2xl font-bold text-[#0D0E43]">Information About Us</h2>
            <p className="text-sm lg:text-base text-gray-600 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis
              aliquam, malesuada diam est.
            </p>
            <div className="flex space-x-3 mt-4">
              <div className="w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-blue-500"></div>
              <div className="w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-purple-500"></div>
              <div className="w-5 h-5 lg:w-6 lg:h-6 rounded-full bg-yellow-500"></div>
            </div>
          </div>

          
          <div>
            <h2 className="text-xl lg:text-2xl font-bold text-[#0D0E43]">Contact Way</h2>
            <ul className="mt-4 space-y-4 text-sm lg:text-base">
              <li className="flex items-center space-x-3">
                <FaPhoneAlt className="text-blue-500" />
                <span>Tel: 877-67-88-99</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-purple-500" />
                <span>Email: shop@store.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-yellow-500" />
                <span>20 Margaret St, London, Great Britain, 3NM98-LK</span>
              </li>
            </ul>
          </div>
        </div>

        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-5xl mt-12">
          
          <div>
            <h2 className="text-xl lg:text-2xl font-bold text-[#0D0E43]">Get In Touch</h2>
            <p className="text-sm lg:text-base text-gray-600 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices tristique amet erat vitae eget dolor vitae lobortis quis bibendum quam.
            </p>
            <form className="mt-6 space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="name">
                  Your Name*
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full p-3 border border-gray-300 rounded text-sm lg:text-base"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                  Your E-mail*
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your E-mail"
                  className="w-full p-3 border border-gray-300 rounded text-sm lg:text-base"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="subject">
                  Subject*
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Subject"
                  className="w-full p-3 border border-gray-300 rounded text-sm lg:text-base"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700" htmlFor="message">
                  Type Your Message*
                </label>
                <textarea
                  id="message"
                  placeholder="Type Your Message"
                  rows="4"
                  className="w-full p-3 border border-gray-300 rounded text-sm lg:text-base"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-pink-500 text-white py-2 px-6 rounded text-sm lg:text-base hover:bg-pink-600"
              >
                Send Mail
              </button>
            </form>
          </div>

        
          <div className="flex justify-center items-center">
            <img
              src={illustration}
              alt="Illustration"
              className="w-full max-w-sm lg:max-w-md object-contain"
            />
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default ContactUs;
