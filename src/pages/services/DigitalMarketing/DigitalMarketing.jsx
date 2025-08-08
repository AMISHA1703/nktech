import React from 'react';
import { Outlet } from 'react-router-dom';

const DigitalMarketing = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-2">Digital Marketing</h2>
      <p>We offer comprehensive digital marketing services to boost your brand.</p>
      <Outlet/>
    </div>
  );
};

export default DigitalMarketing;
