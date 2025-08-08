import { Link } from "react-router-dom";
import { menuItems } from "../data/menuItem.js";
import MenuItems from "./MenuItems.jsx";
import {ShoppingCart} from "lucide-react"

import nktechLogo from "../assets/nktech.jpg";
import Topbar from "./Topbar.jsx"

export default function Navbar() {
  return (
    <>
      <Topbar/>
       {/* navbar */}
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
