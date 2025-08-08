import React from 'react';

const SMMServices = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-blue-800">Social Media Marketing</h1>

      {/* Introduction Section */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Introduction to Social Media</h2>
        <p className="text-gray-700 mb-2">
          Setting up a Facebook Page, Twitter profile or a YouTube channel is not always the best place to start. 
          We recommend an initial research exercise to help discover what social media channel is right for you.
        </p>
        <p className="text-gray-700">
          We will help you understand the different social networks and platforms, explore how your customers use them 
          and decide what social networks are right for you and your customers.
        </p>
      </section>

      {/* Listening and Engagement Section */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Listening and Engagement</h2>
        <p className="text-gray-700 mb-2">
          The next step is to find out what your customers are talking about. We simply call this ‘listening’.
        </p>
        <p className="text-gray-700 mb-2">
          This process involves delving into various social networks to understand what customers are saying 
          about your product, industry, and service.
        </p>
        <p className="text-gray-700">
          We create a detailed report using important phrases and topics related to your business to help you
          interpret and act on this data. We then guide you on how to ‘engage’ with your audience effectively.
        </p>
      </section>

      {/* Social Media Advertising Section */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Social Media Advertising</h2>
        <p className="text-gray-700 mb-2">
          Facebook, Twitter, and LinkedIn all offer excellent advertising opportunities.
        </p>
        <p className="text-gray-700">
          We’ll help you evaluate platform-specific options such as geo-targeting, demographic targeting, 
          and tailor a strategy that suits your business goals.
        </p>
      </section>

      {/* Pricing Section */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Pricing</h2>
        <p className="text-gray-700">
          ₹7,500/- per month per platform + Third party charges as applicable.
        </p>
      </section>

      {/* FAQ Section */}
      <section>
        <h2 className="text-xl font-semibold mb-4">FAQs</h2>

        <div className="mb-4">
          <p className="font-medium text-gray-800">Q. How will it work?</p>
          <p className="text-gray-700">
            We will run a paid campaign on Facebook to increase page likes. Facebook will promote your page globally.
            You will be charged per like.
          </p>
        </div>

        <div className="mb-4">
          <p className="font-medium text-gray-800">Q. Will these likes be non-drop?</p>
          <p className="text-gray-700">
            Yes, they will be real human likes. If any drops occur, we will refill and maintain likes for a month.
          </p>
        </div>

        <div className="mb-4">
          <p className="font-medium text-gray-800">Q. What other social campaigns are offered?</p>
          <p className="text-gray-700">
            Besides Facebook page likes, we also offer other SMM services based on your needs.
          </p>
        </div>
      </section>
    </div>
  );
};

export default SMMServices;
