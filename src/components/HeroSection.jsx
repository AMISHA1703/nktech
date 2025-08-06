import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import seo from "../assets/seo.jpg"
import marketing from "../assets/marketing.jpg"
import brilliantsmart from "../assets/brilliantsmart.jpg"



const slides = [
  {
    image: seo,
    title: "Increase Web Search Presence",
    subtitle: "Boost your SEO and marketing",
  },
  {
    image: marketing,
    title: "Digital Marketing Made Easy",
    subtitle: "Get more leads, more sales",
  },
  {
    image: brilliantsmart,
    title: "Power Your Brand Growth",
    subtitle: "We scale startups to success",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    // Cleanup on unmount
    return () => clearInterval(interval);
  }, [current]); // Resets timer on manual click

  return (
    <section
      className="relative h-screen bg-cover bg-center transition-all duration-700"
      style={{
        backgroundImage: `url(${slides[current].image})`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Text Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white max-w-3xl">
          {slides[current].title}
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-orange-400">
          {slides[current].subtitle}
        </p>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 p-3 rounded-full z-20"
      >
        <ChevronLeft className="text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/40 p-3 rounded-full z-20"
      >
        <ChevronRight className="text-white" />
      </button>
    </section>
  );
};

export default HeroSection;
