import { FaWhatsapp, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 text-center">
      <p className="mb-4">&copy; {new Date().getFullYear()} NK Tech. All rights reserved.</p>
      
      <div className="flex justify-center space-x-6 text-lg">
        <a 
          href="https://wa.me/919876543210" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-green-400"
        >
          <FaWhatsapp size={24} />
        </a>

        <a 
          href="https://www.linkedin.com/company/nktech" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-blue-400"
        >
          <FaLinkedin size={24} />
        </a>

        <a 
          href="https://www.instagram.com/nktech" 
          target="_blank" 
          rel="noopener noreferrer"
          className="hover:text-pink-400"
        >
          <FaInstagram size={24} />
        </a>

        <a 
          href="mailto:contact@nktech.com"
          className="hover:text-yellow-400"
        >
          <FaEnvelope size={24} />
        </a>
      </div>
    </footer>
  );
}
