import React from "react";

import logo1 from "../../assets/client-webdevelopment/1.jpg";
import logo2 from "../../assets/client-webdevelopment/2.jpg";
import logo3 from "../../assets/client-webdevelopment/3.jpg";
import logo4 from "../../assets/client-webdevelopment/4.jpg";
import logo5 from "../../assets/client-webdevelopment/5.png";
import logo6 from "../../assets/client-webdevelopment/6.png";
import logo7 from "../../assets/client-webdevelopment/7.jpg";
import logo8 from "../../assets/client-webdevelopment/8.jpeg";
import logo9 from "../../assets/client-webdevelopment/9.jpg";
import logo10 from "../../assets/client-webdevelopment/10.png";
import logo11 from "../../assets/client-webdevelopment/11.jpg";
import logo12 from "../../assets/client-webdevelopment/12.jpg";
import logo13 from "../../assets/client-webdevelopment/13.jpg";
import logo14 from "../../assets/client-webdevelopment/14.jpg";
import logo15 from "../../assets/client-webdevelopment/15.jpg";
import logo16 from "../../assets/client-webdevelopment/16.jpg";

import dm1 from "../../assets/client-digitalmarketing/dm1.jpg";
import dm2 from "../../assets/client-digitalmarketing/dm2.png";
import dm3 from "../../assets/client-digitalmarketing/dm3.jpg";
import dm4 from "../../assets/client-digitalmarketing/dm4.jpg";
import dm5 from "../../assets/client-digitalmarketing/dm5.jpg";
import dm6 from "../../assets/client-digitalmarketing/dm6.jpg";
import dm7 from "../../assets/client-digitalmarketing/dm7.jpg";
import dm8 from "../../assets/client-digitalmarketing/dm8.jpg";
import dm9 from "../../assets/client-digitalmarketing/dm9.jpg";
import dm10 from "../../assets/client-digitalmarketing/dm10.jpg";
import dm11 from "../../assets/client-digitalmarketing/dm11.png";
import dm12 from "../../assets/client-digitalmarketing/dm12.jpg";

// Logo Scroller Component
const LogoScroller = ({ items, reverse }) => (
  <div className="overflow-hidden w-full">
    <div
      className={`flex gap-3 sm:gap-6 md:gap-8 min-w-max ${
        reverse ? "animate-scrollReverse" : "animate-scroll"
      }`}
    >
      {[...items, ...items].map((logo, idx) => (
        <div
          key={idx}
          className="flex items-center justify-center bg-white rounded-lg shadow-sm p-2 
                     h-16 w-20 sm:h-20 sm:w-28 md:h-24 md:w-36 lg:h-28 lg:w-44"
        >
          <img
            src={logo}
            alt={`Logo ${idx + 1}`}
            className="max-h-full max-w-full object-contain"
          />
        </div>
      ))}
    </div>
  </div>
);

const Portfolio = () => {
  const websiteDevelopment = [
    logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8,
    logo9, logo10, logo11, logo12, logo13, logo14, logo15, logo16
  ];

  const digitalMarketing = [
    dm1, dm2, dm3, dm4, dm5, dm6, dm7, dm8, dm9, dm10, dm11, dm12
  ];

  return (
    <section id="portfolio" className="py-12 sm:py-16 bg-gray-50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Website Development */}
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center mb-8 relative">
          <span className="px-4 bg-gray-50 relative z-10">
            WEBSITE DEVELOPMENT
          </span>
          <div className="absolute left-0 right-0 top-1/2 border-t border-gray-300 z-0"></div>
        </h2>
        <LogoScroller items={websiteDevelopment} />

        {/* Digital Marketing */}
        <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-center my-12 relative">
          <span className="px-4 bg-gray-50 relative z-10">
            DIGITAL MARKETING
          </span>
          <div className="absolute left-0 right-0 top-1/2 border-t border-gray-300 z-0"></div>
        </h2>
        <LogoScroller items={digitalMarketing} reverse />
      </div>
    </section>
  );
};

export default Portfolio;
