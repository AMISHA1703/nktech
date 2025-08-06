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
    <section className="py-16 bg-white" id="clients">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Our Clients</h2>

        <div className="relative">
          {/* Left Arrow */}
          {startIndex > 0 && (
            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full hover:bg-gray-200"
            >
              <ArrowLeft size={24} />
            </button>
          )}

          {/* Clients */}
          <div className="flex justify-center gap-4 overflow-hidden">
            {visibleClients.map((client, index) => (
              <div
                key={index}
                className="w-[200px] h-[140px] border rounded-lg shadow-md flex flex-col items-center justify-center p-4 bg-white"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-12 mb-2 object-contain"
                />
                <p className="text-gray-700 text-sm text-center">{client.name}</p>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          {startIndex + visibleCount < clients.length && (
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full hover:bg-gray-200"
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
