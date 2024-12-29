import React from 'react';
import PageLayout from '../Components/PageLayout';

const AboutUs = () => {
  return (
    <PageLayout pageTitle="About Us">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-[#0D0E43] mb-6">About Us</h1>
        <p className="text-lg text-[#333333] mb-6">
          We are a team of passionate professionals dedicated to providing
          exceptional services and products. Our mission is to create valuable
          experiences for our customers by delivering high-quality products
          and exceptional customer service. With years of experience in the
          industry, we aim to stay ahead of the curve with innovative solutions.
        </p>
        <h2 className="text-2xl font-semibold text-[#0D0E43] mb-4">Our Mission</h2>
        <p className="text-lg text-[#333333] mb-6">
          Our mission is simple: to provide innovative products and services
          that meet the needs of our diverse customers. We strive for excellence
          and are committed to achieving customer satisfaction with every interaction.
        </p>
        <h2 className="text-2xl font-semibold text-[#0D0E43] mb-4">Our Team</h2>
        <p className="text-lg text-[#333333] mb-6">
          Our team is made up of dedicated professionals who bring a wide range
          of skills and expertise. We work collaboratively to solve challenges and
          drive success for our customers.
        </p>
        {/* You can add a section for your team members or other information here */}
      </div>
    </PageLayout>
  );
};

export default AboutUs;
