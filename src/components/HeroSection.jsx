import React, { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import seo from "../assets/slider_full1.jpg"
import marketing from "../assets/slider_full2.jpg"
import brilliantsmart from "../assets/slider_full3.jpg"



const slides = [
  {
    image: seo,
    title: "INCREASE WEB SEARCH PRESENCE",
    subtitle: "HELLO, ARE YOU READY TO START ?",
  },
  {
    image: marketing,
    title: "BRILLIANT SMART & BIG WEBSITE",
    subtitle: "HELLO, ARE YOU READY TO START ?",
  },
  {
    image: brilliantsmart,
    title: "WELCOME TO BEST SEO COMPANY",
    subtitle: "HELLO, ARE YOU READY TO START ?",
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
      className="relative h-130 bg-cover bg-center transition-all duration-700"
      style={{
        backgroundImage: `url(${slides[current].image})`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-10"></div>

      {/* Text Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white max-w-2xl">
          {slides[current].title}
        </h1>
        <p className="mt-4 text-lg md:text-2xl text-orange-400">
          {slides[current].subtitle}
        </p>
      </div>


      {/* buttons*/}
      <div>
      <button type="button" className="absolute top-90 right-190 text-white bg-red-700 hover:bg-red-800 hover:cursor-pointer font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  ">WATCH VIDEOS</button>
      <button type="button" className="absolute top-90 right-150 text-white bg-red-700 hover:bg-red-800 hover:cursor-pointer font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2   ">LEARN MORE</button>
      </div>
      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-white/40 p-3 rounded-full z-20"
      >
        <ChevronLeft className="text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-white/40 p-3 rounded-full z-20"
      >
        <ChevronRight className="text-white" />
      </button>
    </section>
  );
};

export default HeroSection;
