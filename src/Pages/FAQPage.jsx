import React, { useState } from "react";
import PageLayout from "../Components/PageLayout";

const FAQPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, e.g., send data to an API.
    console.log(formData);
  };

  return (
    <PageLayout pageTitle="FAQ">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Side: FAQ Section */}
        <div>
          <h1 className="text-3xl font-semibold text-center text-[#1D3178] mb-6 font-josefin">
            Frequently Asked Questions
          </h1>
          <p className="text-center text-gray-600 mb-8 font-lato">
            Here are some of the most commonly asked questions by our customers. If you have any other questions,
            feel free to contact us.
          </p>

          <div className="space-y-6">
            {/* FAQ Item 1 */}
            <div className="border-b pb-4">
              <h2 className="text-xl font-semibold text-[#0D0E43] font-lato">
                What is your return policy?
              </h2>
              <p className="text-gray-600 mt-2 font-lato">
                We offer a 30-day return policy on most of our products. Please refer to our Return & Exchange
                policy page for more details.
              </p>
            </div>

            {/* FAQ Item 2 */}
            <div className="border-b pb-4">
              <h2 className="text-xl font-semibold text-[#0D0E43]">
                How long does shipping take?
              </h2>
              <p className="text-gray-600 mt-2 font-lato">
                Shipping times vary depending on your location, but most orders are shipped within 3-5 business
                days. You will receive a tracking number once your order has been dispatched.
              </p>
            </div>

            {/* FAQ Item 3 */}
            <div className="border-b pb-4">
              <h2 className="text-xl font-semibold text-[#0D0E43] font-lato">
                Can I change my order after placing it?
              </h2>
              <p className="text-gray-600 mt-2 font-lato">
                Orders can only be modified or canceled within 1 hour of placing them. After that, they will be
                processed and shipped as is.
              </p>
            </div>

            {/* FAQ Item 4 */}
            <div className="border-b pb-4">
              <h2 className="text-xl font-semibold text-[#0D0E43] font-lato">
                Do you offer international shipping?
              </h2>
              <p className="text-gray-600 mt-2 font-lato">
                Yes, we do offer international shipping. International shipping charges will apply, and delivery
                times vary by country.
              </p>
            </div>

            {/* FAQ Item 5 */}
            <div className="border-b pb-4">
              <h2 className="text-xl font-semibold text-[#0D0E43] font-lato">
                How can I track my order?
              </h2>
              <p className="text-gray-600 mt-2 font-lato">
                Once your order has shipped, you will receive an email with a tracking number. You can use that
                number on the carriers website to track your package.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Ask Questions Form */}
        <div className="bg-[#F8F8F8] p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-[#1D3178] mb-4 font-lato">Ask Questions</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-lg text-gray-700 mb-2 font-lato">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="subject" className="block text-lg text-gray-700 mb-2 font-lato">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-lg text-gray-700 mb-2 font-lato">Your Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-pink-500 text-white py-3 rounded-md hover:bg-pink-600 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </PageLayout>
  );
};

export default FAQPage;
