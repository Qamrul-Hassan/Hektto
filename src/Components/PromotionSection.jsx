
import Sofa from "../assets/Image/sofa.png"; 
import LampImage from "../assets/Image/image32.png"; 
const PromotionSection = () => {
  return (
    <div className="relative bg-[#F2F0FF] w-full h-auto lg:h-[524px] flex flex-col lg:flex-row items-center">
      
      <div className="relative flex flex-col items-center lg:items-start lg:w-1/2 lg:ml-[70px] lg:mt-[122px]">
      
        <img
          src={LampImage}
          alt="Lamp"
          className="w-[150px] lg:w-[387px] h-auto"
        />
        
        <div className="absolute w-[15px] h-[15px] bg-[#FB2E86] rounded-full left-[50px] lg:left-[114px] top-[150px] lg:top-[400px]"></div>
      </div>

      
      <div className="text-center lg:text-left lg:w-1/2 lg:ml-[20px] lg:mt-[100px] px-6 lg:px-0">
        <h6 className="text-[#FB2E86] text-sm lg:text-sm font-bold">
          Best Furniture For Your Castle....
        </h6>
        <h1 className=" text-[20px] lg:text-[30px] leading-snug lg:leading-[50px] mt-4 font-josefin text-3xl font-bold text-gray-800">
          New Furniture Collection <br />
          Trends in 2020
        </h1>
        <p className="text-[#8A8FB9] text-sm lg:text-base mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est
          adipiscing in phasellus non in justo.
        </p>
        <button className="mt-6 px-6 py-2 lg:px-8 lg:py-3 bg-[#FB2E86] text-white text-sm lg:text-base font-bold rounded-md shadow-md hover:bg-[#e32b75] transition-all">
          Shop Now
        </button>
      </div>

      
      <div className="relative flex items-center justify-center mt-8 lg:mt-0 lg:w-1/2 lg:mr-[70px]">
       
        <img
          src={Sofa}
          alt="Sofa"
          className="relative w-[200px] lg:w-[450px] h-auto"
        />
      </div>

      
      <div className="absolute flex items-center space-x-2 bottom-[30px] lg:bottom-[30px] left-1/2 transform -translate-x-1/2">
        <div className="w-[10px] h-[10px] bg-[#FB2E86] transform rotate-45"></div>
        <div className="w-[10px] h-[10px] border border-[#FB2E86] transform rotate-45"></div>
        <div className="w-[10px] h-[10px] border border-[#FB2E86] transform rotate-45"></div>
      </div>
    </div>
  );
};

export default PromotionSection;
