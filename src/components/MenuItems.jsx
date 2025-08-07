import { Link } from "react-router-dom";
import { useState } from "react";

export default function MenuItems({ item, depthLevel }) {
  const [isOpen, setIsOpen] = useState(false);
  const hasSubmenu = item.submenu && item.submenu.length > 0;

  return (
    <li
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link
        to={item.to || "#"}
        className={`px-4 py-2 text-sm block whitespace-nowrap hover:bg-gray-100 hover:text-[#fbae57] transition ${
          depthLevel === 0 ? "font-medium" : ""
        }`}
      >
        {item.label}
      </Link>

      {hasSubmenu && (
        <ul
          className={`absolute ${
            depthLevel === 0 ? "left-0 top-full" : "left-full top-0"
          } bg-white shadow-lg rounded-md min-w-max z-50 transition-all duration-200 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          {item.submenu.map((subItem, index) => (
            <MenuItems item={subItem} key={index} depthLevel={depthLevel + 1} />
          ))}
        </ul>
      )}
    </li>
  );
}
