'use client';
import { useState } from 'react';
import RajivKhanna from "../assets/Rajivkhana.jpg";
import yajushkhanna from "../assets/yajush-khanna-1.jpg";
import noprofile from "../assets/noprofile-06.svg";

const testimonials = [
  {
    img: RajivKhanna,
    name: 'Rajiv Khanna',
    company: 'MD Jukaso Hotels Pvt. Ltd.',
    rating: 5,
    desc: 'This is a Jukaso Journeys reviews, if you are looking for the best SEO company in Noida then NKtech is the best choice. I am thankful to the Team NKtech for providing result-oriented SEO services for my business. My overall experience with them was amazing. They have a good team of digital marketing experts. They are the fastest growing SEO Company in Noida. Keep it Up.',
  },
  {
    img: yajushkhanna,
    name: 'Yajus Khanna',
    company: 'CEO, Jukaso Journeys',
    rating: 5,
    desc: 'I am very much pleased with the services of Nktech. They are providing the best SEO services in Noida. Initially, our website performance was not good but when we gave our work to them and now our website is performing well. I found, traffic is increased and rank has improved. Great work was done by the team',
  },
  {
    img: noprofile,
    name: 'Vinita Gupta',
    company: 'Client',
    rating: 5,
    desc: 'The experience was very nice with NKTech. Mr. Rajeev Sharma is the best person I have ever meet. he helped & guide me to grow my business online with the company. Must say genuine Company. Looking for Best SEO company in Noida ? NKTech is will be the best choice.',
  }
];

const Testimonials = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleReadMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-[#1f4b6e]" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12 text-white uppercase">
          Testimonials
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {testimonials.map((item, idx) => {
            const isExpanded = expandedIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-md shadow-md p-6 max-w-sm flex flex-col"
              >
                {/* Profile */}
                <div className="flex items-center gap-4 mb-4">
                  {item.img ? (
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-gray-300" />
                  )}
                  <div>
                    <h3 className="font-bold text-gray-800">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.company}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex text-yellow-400 mb-3">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-gray-700 text-sm flex-1">
                  {isExpanded ? item.desc : `${item.desc.slice(0, 120)}...`}
                </p>

                {/* Read More / Show Less */}
                <button
                  onClick={() => toggleReadMore(idx)}
                  className="mt-3 text-blue-600 hover:underline text-sm self-start"
                >
                  {isExpanded ? "Show less" : "Read more"}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
