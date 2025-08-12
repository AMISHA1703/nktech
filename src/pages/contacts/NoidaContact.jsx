import React from "react";

const NoidaContact = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Heading */}
      <h2 className="text-center text-2xl md:text-3xl font-semibold mb-2">
        Our Journey
      </h2>
      <div className="w-24 mx-auto border-b border-gray-400 mb-6"></div>

      {/* Description */}
      <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
        Starting as a Digital Marketing Agency, we have expanded into Website
        Development, Software Development, and other IT solutions. Our
        dedication to our core values has fueled our growth over the past
        decade.
      </p>


      {/* Contact Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Form */}
        <div className="md:col-span-2 space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button className="bg-[#093256] text-white px-6 py-2 rounded hover:bg-[#0f4c81] transition">
            Send Message
          </button>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold">Phone</h3>
            <a
              href="tel:+918920877101"
              className="text-blue-600 hover:underline"
            >
              +91 8920 8771 01
            </a>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Mail</h3>
            <a
              href="mailto:info@nktech.in"
              className="text-red-500 hover:underline"
            >
              info@nktech.in
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NoidaContact;
