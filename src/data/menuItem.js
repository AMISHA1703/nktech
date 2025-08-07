// src/data/menuItems.js
export const menuItems = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "About us",
    to: "/about",
  },
  {
    label: "Services",
    submenu: [
      {
        label: "Digital Marketing",
        submenu: [
          { label: "AEO Services | AI SEO", to: "/digital-marketing/aeo-seo" },
          { label: "SEO Services", to: "/digital-marketing/seo" },
          { label: "ORM Services", to: "/digital-marketing/orm" },
          { label: "SMM Services", to: "/digital-marketing/smm" },
          { label: "SMO Services", to: "/digital-marketing/smo" },
          { label: "PPC Services", to: "/digital-marketing/ppc" },
          { label: "VSO Services", to: "/digital-marketing/vso" },
        ],
      },
      {
        label: "Web Development",
        submenu: [
          { label: "Web Designing", to: "/services/web-designing" },
          { label: "Web Maintenance", to: "/services/web-maintenance" },
          { label: "Web Development", to: "/services/web-development" },
        ],
      },
      { label: "Mobile App Development", to: "/services/mobile-app" },
      { label: "Software Development", to: "/services/software-dev" },
      { label: "Content Writing", to: "/services/content-writing" },
      { label: "Graphic Designing", to: "/services/graphic-design" },
      {
        label: "Politician Campaign Management",
        to: "/services/political-campaign",
      },
    ],
  },
  {
    label: "Software & Apps",
    to: "/shop",
  },
  {
    label: "Portfolio",
    to: "/portfolio",
  },
  {
    label: "Contact Us",
    submenu: [
      { label: "Noida", to: "/contact/noida" },
      { label: "Gurugram", to: "/contact/gurugram" },
      { label: "Australia", to: "/contact/australia" },
    ],
  },
];
