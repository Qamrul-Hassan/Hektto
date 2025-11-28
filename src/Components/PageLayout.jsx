import PropTypes from "prop-types";
import BrandImage from "../assets/Image/Brand.png"; // Import the image

const PageLayout = ({ pageTitle, showHeader = true, children }) => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {showHeader && (
        <header className="bg-gray-200 py-6">
          <div className="container mx-auto px-4 text-balance ml-8">
            <h1 className="text-3xl font-bold text-gray-800">{pageTitle}</h1>
            <p className="text-gray-600 mt-2">
              Home <span className="text-gray-400">/</span> Pages{" "}
              <span className="text-gray-400">/</span>{" "}
              <span className="text-pink-500">{pageTitle}</span>
            </p>
          </div>
        </header>
      )}
      <main className="container mx-auto px-4 py-8">
        {children}
        <div className="mt-8">
          <img
            src={BrandImage} // Use the imported image
            alt="Brand"
            className="mx-auto max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl"
          />
        </div>
      </main>
    </div>
  );
};

PageLayout.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  showHeader: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default PageLayout;
