import React from "react";
import { Outlet, Link } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";

const Services = () => {
  return (
    <div>
      <ServiceCard title="Seo" description="jzzzzzzzzz" />
      <ServiceCard title="Digital Marketing" description="zbbbbbbbb" />

      <nav>
        <Link to="DigitalMarketing">DigitalMarketing</Link>
        <br />
        <Link to="Seo">Seo</Link>
      </nav>

      <Outlet/>
    </div>
  );
};

export default Services;
