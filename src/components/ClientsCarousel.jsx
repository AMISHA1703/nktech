'use client';
import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const ClientsCarousel = () => {
  const clients = [
    { name: 'Jukaso Hotels Pvt. Ltd.', logo: '/clients/jukaso.png' },
    { name: 'Jukaso Journeys', logo: '/clients/journeys.png' },
    { name: 'Startup India', logo: '/clients/startup-india.png' },
    { name: 'EduHub University', logo: '/clients/eduhub.png' },
    { name: 'HealthZone Hospital', logo: '/clients/healthzone.png' },
    { name: 'NKTech Noida', logo: '/clients/nktech.png' },
    { name: 'Max Medicos', logo: '/clients/max.png' },
    { name: 'Technosoft Pvt. Ltd.', logo: '/clients/technosoft.png' },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 4;

  const prev = () => {
    setStartIndex((prev) => Math.max(prev - visibleCount, 0));
  };

  const next = () => {
    setStartIndex((prev) =>
      Math.min(prev + visibleCount, clients.length - visibleCount)
    );
  };

  const visibleClients = clients.slice(startIndex, startIndex + visibleCount);

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white" id="clients">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold mb-4 text-gray-800">
          Our <span className="text-[#fbae57]">Clients</span>
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto mb-10">
          We’re proud to have worked with these amazing organizations and partners.
        </p>

        <div className="relative">
          {/* Left Arrow */}
          {startIndex > 0 && (
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 
                         bg-white/80 backdrop-blur-md shadow-lg p-3 rounded-full 
                         hover:bg-[#fbae57] hover:text-white transition-all duration-300"
            >
              <ArrowLeft size={24} />
            </button>
          )}

          {/* Clients */}
          <div className="flex justify-center gap-6 overflow-hidden transition-all duration-500 ease-in-out">
            {visibleClients.map((client, index) => (
              <div
                key={index}
                className="w-[200px] h-[160px] border border-gray-100 rounded-xl 
                           shadow-md flex flex-col items-center justify-center p-4 bg-white 
                           hover:shadow-xl hover:scale-105 hover:border-[#fbae57] 
                           transition-all duration-300"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-14 mb-3 object-contain"
                />
                <p className="text-gray-700 font-medium text-sm text-center">
                  {client.name}
                </p>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          {startIndex + visibleCount < clients.length && (
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 
                         bg-white/80 backdrop-blur-md shadow-lg p-3 rounded-full 
                         hover:bg-[#fbae57] hover:text-white transition-all duration-300"
            >
              <ArrowRight size={24} />
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default ClientsCarousel;
