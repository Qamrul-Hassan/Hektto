import React from "react";
import PageLayout from "../Components/PageLayout";

const FAQPage = () => {
  return (
    <PageLayout pageTitle="FAQ">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-semibold text-center text-[#0D0E43]">Frequently Asked Questions</h1>
        <p className="text-center text-gray-600 mt-4">
          Here are some of the most commonly asked questions by our customers. If you have any other questions,
          feel free to contact us.
        </p>

        <div className="mt-8 space-y-6">
          {/* FAQ Item 1 */}
          <div className="border-b pb-4">
            <h2 className="text-xl font-semibold text-[#0D0E43]">
              What is your return policy?
            </h2>
            <p className="text-gray-600 mt-2">
              We offer a 30-day return policy on most of our products. Please refer to our Return & Exchange
              policy page for more details.
            </p>
          </div>

          {/* FAQ Item 2 */}
          <div className="border-b pb-4">
            <h2 className="text-xl font-semibold text-[#0D0E43]">
              How long does shipping take?
            </h2>
            <p className="text-gray-600 mt-2">
              Shipping times vary depending on your location, but most orders are shipped within 3-5 business
              days. You'll receive a tracking number once your order has been dispatched.
            </p>
          </div>

          {/* FAQ Item 3 */}
          <div className="border-b pb-4">
            <h2 className="text-xl font-semibold text-[#0D0E43]">
              Can I change my order after placing it?
            </h2>
            <p className="text-gray-600 mt-2">
              Orders can only be modified or canceled within 1 hour of placing them. After that, they will be
              processed and shipped as is.
            </p>
          </div>

          {/* FAQ Item 4 */}
          <div className="border-b pb-4">
            <h2 className="text-xl font-semibold text-[#0D0E43]">
              Do you offer international shipping?
            </h2>
            <p className="text-gray-600 mt-2">
              Yes, we do offer international shipping. International shipping charges will apply, and delivery
              times vary by country.
            </p>
          </div>

          {/* FAQ Item 5 */}
          <div className="border-b pb-4">
            <h2 className="text-xl font-semibold text-[#0D0E43]">
              How can I track my order?
            </h2>
            <p className="text-gray-600 mt-2">
              Once your order has shipped, you will receive an email with a tracking number. You can use that
              number on the carrier's website to track your package.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default FAQPage;
