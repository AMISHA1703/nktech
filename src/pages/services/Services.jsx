import React from 'react';
import { Outlet } from 'react-router-dom';

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-10">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">Our Services</h1>
        <p className="text-gray-600 text-lg mb-10">
          Explore our wide range of digital services designed to grow your business online.
        </p>
      </div>

      <div className="max-w-6xl mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Services;
