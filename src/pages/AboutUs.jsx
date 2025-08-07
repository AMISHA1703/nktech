import React from 'react';
import { FaCode, FaLaptopCode, FaLock, FaRocket, FaBullhorn, FaPaintBrush } from 'react-icons/fa';

const services = [
  { icon: <FaLaptopCode />, title: 'Custom Web Development', desc: 'Modern MERN stack and WordPress-based websites and applications.' },
  { icon: <FaCode />, title: 'API Development', desc: 'Powerful backend RESTful & GraphQL APIs for seamless integration.' },
  { icon: <FaPaintBrush />, title: 'UI/UX Design', desc: 'User-centric designs that engage and convert.' },
  { icon: <FaBullhorn />, title: 'SEO & Optimization', desc: 'Boost your website’s visibility, speed & search engine ranking.' },
  { icon: <FaLock />, title: 'Secure Solutions', desc: 'Enterprise-grade security and maintenance support.' },
  { icon: <FaRocket />, title: 'Scalable Systems', desc: 'We build digital products that grow with your business.' },
];

const AboutUs = () => {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-purple-700 text-white py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About NKTech</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">Empowering businesses with secure, scalable, and modern digital solutions</p>
      </section>

      {/* Intro Section */}
      <section className="max-w-6xl mx-auto py-12 px-6">
        <h2 className="text-3xl font-semibold mb-4 text-center">Who We Are</h2>
        <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
          NK Technologies ITSol Pvt. Ltd. is a Noida-based IT company delivering high-quality web development, software, and digital solutions. 
          With expertise in MERN, WordPress, and API systems, we bring your digital vision to life — securely and reliably.
        </p>
      </section>

      {/* Mission and Values */}
      <section className="bg-white py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-700 text-lg">
              To deliver innovative, secure, and scalable solutions that help businesses thrive in the digital era — with a strong commitment to excellence, speed, and trust.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Core Values</h3>
            <ul className="list-disc list-inside text-gray-700 text-lg">
              <li>Security First Development</li>
              <li>Client-Centric Communication</li>
              <li>Result-Oriented Innovation</li>
              <li>Transparency and Trust</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 px-6 bg-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-semibold mb-10">What We Do</h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-all duration-300"
              >
                <div className="text-blue-600 text-4xl mb-4 flex justify-center">{service.icon}</div>
                <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location + Contact */}
      <section className="py-12 px-6 text-center">
        <h3 className="text-2xl font-semibold mb-4">Where We’re Located</h3>
        <p className="text-lg text-gray-700 mb-4">
          307B, A40, ITHUM Tower A, Sector 62, Noida, Uttar Pradesh 201301
        </p>
        <p className="text-lg text-gray-700">
          📧 <a href="mailto:info@nktech.in" className="text-blue-600 underline">info@nktech.in</a>
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
