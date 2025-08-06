import React from "react";

const services = [
  {
    title: "SEO Services",
    description:
      "SEO Services ,Get unlimited suggestions of keywords and phrases related to your business.",
  },
  {
    title: "ORM Services",
    description:
      "Our ORM (Online reputation management) Services includes Social Media reviews management, Google reviews.",
  },
  {
    title: "Social Media Marketing",
    description:
      "SMM (Social Media Marketing) services include Social Account promotion ie Facebook page likes, Post promotion.",
  },
  {
    title: "SEM Services",
    description:
      "SEM (Search engine marketing) include Google Adwords, Display advertising, Follow up marketing",
  },
  {
    title: "Social Media Services",
    description:
      "Our social media management services include Social account management, Post writing & designing, Blog writing.",
  },
  {
    title: "Media Buying",
    description:
      "We are associated with many Online news websites and Popular Blogs, Where we can promote our client’s Services",
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 shadow-md rounded-lg hover:shadow-xl transition">
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-700 mb-4">{service.description}</p>
            <div className="flex gap-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                Learn More
              </button>
              <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50 transition">
                Get a Quote
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
