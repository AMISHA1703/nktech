import React from "react";

const Offer = () => {
  return (
    <div className="bg-[#294A63] text-white px-50 py-16 flex justify-between items-center rounded-md shadow-md">

  <div className="flex flex-col justify-center">
    <h2 className="text-4xl font-bold mb-2">Best SEO company in Delhi NCR</h2>
    <h3 className="text-lg font-medium">
      Want to know about our Guaranteed ranking program, which makes us the Best SEO company in <br/> Delhi NCR?
    </h3>
  </div>

  {/* Right Section: Button */}
  <button className="border-2 border-white text-white font-bold px-28 py-2 rounded hover:bg-gray-100 hover:text-[#294A63] hover:cursor-pointer transition whitespace-nowrap">
    Get Offer
  </button>
</div>

  );
};

export default Offer;
