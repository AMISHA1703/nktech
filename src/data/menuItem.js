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
          { label: "AEO Services | AI SEO", to: "/services/digitalmarketing/aeoservices" },
          { label: "SEO Services", to: "/services/digitalmarketing/seoservices" },
          { label: "ORM Services", to: "/services/digitalmarketing/ormservices" },
          { label: "SMM Services", to: "/services/digitalmarketing/smmservices" },
          { label: "SMO Services", to: "/services/digitalmarketing/smoservices" },
          { label: "PPC Services", to: "/services/digitalmarketing/ppcservices" },
          { label: "VSO Services", to: "/services/digitalmarketing/vsoservices" },
        ],
      },
      {
        label: "Web Development",
        submenu: [
          { label: "Web Designing", to: "/services/webdevelopment/webdesigning" },
          { label: "Web Maintenance", to: "/services/webdevelopment/webmaintanence" },
          { label: "Web Development", to: "/services/webdevelopment/webdeveloping" },
        ],
      },
      { label: "Mobile App Development", to: "/services/mobiledevelopment" },
      { label: "Software Development", to: "/services/softwaredevelopment" },
      { label: "Content Writing", to: "/services/contentwriting" },
      { label: "Graphic Designing", to: "/services/graphicdesign" },
      {
        label: "Politician Campaign Management",
        to: "/services/politicalcampaignmanagement",
      },
    ],
  },
  {
    label: "Software & Apps",
    to: "/softwareandapps",
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
