import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const services = [
  {
    title: "SEO Services",
    description:
      "Get unlimited suggestions of keywords and phrases related to your business.",
    route: "/services/digitalmarketing/seoservices",
  },
  {
    title: "ORM Services",
    description:
      "Online reputation management including social media reviews and Google reviews.",
    route: "/services/digitalmarketing/ormservices",
  },
  {
    title: "Social Media Marketing",
    description:
      "Promote your brand through Facebook page likes, post promotion, and more.",
    route: "/services/digitalmarketing/smmservices",
  },
  {
    title: "SEM Services",
    description:
      "Search engine marketing including Google Ads, display ads, and follow-ups.",
    route: "/services/digitalmarketing/ppcservices",
  },
  {
    title: "Social Media Services",
    description:
      "Post design, blog writing, and account management services tailored for engagement.",
    route: "/services/digitalmarketing/smoservices",
  },
  {
    title: "Media Buying",
    description:
      "Get featured on top news and blog sites to boost brand awareness and traffic.",
    route: "/services/politicalcampaignmanagement",
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-gradient-to-b from-orange-50 to-white py-16 px-4 md:px-20">
      <h2 className="text-4xl font-extrabold text-center text-orange-600 mb-4">
        Our Services
      </h2>
      <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
        We offer a wide range of marketing and development services to grow your business online.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white border border-orange-100 rounded-2xl shadow-md hover:shadow-xl transition p-6 group hover:-translate-y-1"
          >
            <h3 className="text-xl font-semibold text-gray-800 group-hover:text-orange-600 transition mb-3">
              {service.title}
            </h3>
            <p className="text-gray-600 mb-6 text-sm">{service.description}</p>
            <div className="flex gap-3">
              <Link
                to={service.route}
                className="bg-orange-500 text-white px-4 py-2 text-sm rounded hover:bg-orange-600 transition inline-flex items-center"
              >
                Learn More <FaArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
