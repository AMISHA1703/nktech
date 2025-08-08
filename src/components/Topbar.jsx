import React from 'react'
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  X,
  PhoneCall,
} from "lucide-react";

const Topbar = () => {
  return (
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

  )
}

export default Topbar