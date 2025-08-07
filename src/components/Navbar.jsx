// Navbar.jsx
import { Link } from "react-router-dom";
import { menuItems } from "../data/menuItem.js";
import MenuItems from "./MenuItems.jsx";
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

export default function Navbar() {
  return (
    <>
      {/* Top Bar */}
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

          {/* Menu */}
          <ul className="flex gap-6 text-gray-700 text-sm font-medium items-center">
            {menuItems.map((item, index) => (
              <MenuItems key={index} item={item} depthLevel={0} />
            ))}

            {/* Cart Icon */}
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
