'use client';
import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const Quality = () => {
  return (
   <section className="bg-white py-12 px-4 md:px-10 lg:px-20">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {/* Card 1 */}
    <div className="flex flex-col items-center text-center bg-gray-100 p-6 rounded-md shadow-md">
      <img
        className="h-25 w-auto mb-4"
        src="./src/assets/award.png"
        alt="Award"
      />
         <h1 className="text-base font-medium">
        13 YEARS OF EXPERTISE
      </h1>

      <h1 className="text-base font-medium">
        We have been in Digital Marketing for 12+ years, helping you compete on the internet and converting your visitors into your clients.
      </h1>
    </div>

    {/* Card 2 */}
    <div className="flex flex-col items-center text-center bg-gray-100 p-6 rounded-md shadow-md">
      <img
        className="h-25 w-auto mb-4"
        src="./src/assets/graph.png"
        alt="Award"
      />
        <h1 className="text-base font-medium">
       500 CLIENTS
      </h1>

      <h1 className="text-base font-medium">
        We strive to ensure that our customers are satisfied and we work continuously to develop your projects and surpass your expectations.
      </h1>
    </div>

    {/* Card 3 */}
    <div className="flex flex-col items-center text-center bg-gray-100 p-6 rounded-md shadow-md">
      <img
        className="h-25 w-auto mb-4"
        src="./src/assets/message.png"
        alt="Award"
      />
      <h1 className="text-base font-medium">
        Guaranteed SEO results
      </h1>

      <h1 className="text-base font-medium">
        Our unique guarantee plans offers 100% SEO ranking or Free.
      </h1>
    </div>
  </div>
</section>

  )

}


export default Quality;
