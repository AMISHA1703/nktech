import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  X,
  PhoneCall,
  ShoppingCart,
} from "lucide-react";
import nktechLogo from "../assets/nktech.jpg";
import { useState } from "react";

export default function Navbar() {
  const navLinks = [
    { label: "Home", to: "/" },
    { label: "About us", to: "/about" },
    { label: "Portfolio", to: "/portfolio" },
  ];

  const servicesDropdown = [
    { label: "Website Development", to: "/services/web" },
    { label: "Digital Marketing", to: "/services/digital" },
    { label: "SEO Services", to: "/services/seo" },
  ];

  const softwareDropdown = [
    { label: "Web Apps", to: "/software/web" },
    { label: "Mobile Apps", to: "/software/mobile" },
    { label: "Custom Software", to: "/software/custom" },
  ];

  const contactDropdown = [
    { label: "Noida", to: "/contact/noida" },
    { label: "Gurugram", to: "/contact/gurugram" },
    { label: "Australia", to: "/contact/australia" },
  ];

  const dropdownWrapper = `absolute left-0 mt-2 bg-white shadow-lg w-56 rounded-md z-50 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition duration-200`;

  const dropdownItem = `px-4 py-2 text-sm hover:bg-gray-100 hover:text-[#fbae57] transition block`;

  return (
    <>
      {/* Top Header */}
      <div className="bg-[#093256] h-16 text-white text-sm py-2 px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <PhoneCall size={18} />
          <span>+91 8920 8771 01</span>
        </div>
        <div className="flex gap-3 text-lg">
          {[Linkedin, Instagram, Youtube, Facebook, X].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="p-1.5 rounded-full bg-white text-[#0F4C81] hover:scale-105 transition"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <Link to="/">
            <img src={nktechLogo} alt="NK Tech Logo" className="h-12 w-auto" />
          </Link>

          {/* Nav Items */}
          <ul className="flex gap-6 text-gray-700 text-sm font-medium relative items-center">
            {navLinks.map((link, i) => (
              <li key={i}>
                <Link
                  to={link.to}
                  className="hover:text-[#fbae57] hover:underline underline-offset-4 transition"
                >
                  {link.label}
                </Link>
              </li>
            ))}

            {/* Services Dropdown */}
            <li className="relative group cursor-pointer">
              <span className="hover:text-[#fbae57] group-hover:underline underline-offset-4 transition">
                Services 
              </span>
              <ul className={dropdownWrapper}>
                {servicesDropdown.map((item, i) => (
                  <li key={i}>
                    <Link to={item.to} className={dropdownItem}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            {/* Software Dropdown */}
            <li className="relative group cursor-pointer">
              <span className="hover:text-[#fbae57] group-hover:underline underline-offset-4 transition">
                Software & Apps 
              </span>
              <ul className={dropdownWrapper}>
                {softwareDropdown.map((item, i) => (
                  <li key={i}>
                    <Link to={item.to} className={dropdownItem}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            {/* Contact Dropdown */}
            <li className="relative group cursor-pointer">
              <span className="hover:text-[#fbae57] group-hover:underline underline-offset-4 transition">
                Contact Us 
              </span>
              <ul className={dropdownWrapper}>
                {contactDropdown.map((item, i) => (
                  <li key={i}>
                    <Link
                      to={item.to}
                      className={`${dropdownItem} ${
                        item.label === "Australia" ? "text-orange-600" : ""
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            {/* Cart */}
            <li>
              <ShoppingCart
                size={22}
                className="cursor-pointer hover:text-[#fbae57] transition"
              />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
