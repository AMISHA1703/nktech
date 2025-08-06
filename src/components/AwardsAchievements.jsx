import React from 'react';

const awardsData = [
  {
    title: 'GOVERNMENT PROJECTS',
    points: [
      'Digital Marketing of Swacchh Survekshan 2020 and 2021 for more than 20 cities.',
      'Digital Marketing Partner of India Smart Cities Events.',
      'Digital Marketing Partner of Indo-Latin American Business Summit, 2016.',
      'Digital Marketing Partner of UP Investor Business Summit, 2018.',
    ],
  },
  {
    title: 'RANKED TOP AS',
    points: [
      'Best SEO company in Noida',
      'Best SEO company in Ghaziabad',
      'Best ORM company in Noida',
      'Best ORM company in Ghaziabad',
    ],
  },
  {
    title: 'NOMINATED',
    points: [
      '10 Most Trusted Digital Marketing Companies to watch in 2020.',
      'The 25 Fastest Growing Companies in India 2020 - Business Connect Magazine.',
      '10 Most Promising Corporate Reputation Management Service Providers 2020.',
      'Innovative Zone Magazine: The Best Company to Work for.',
      'CEO’s of the Year 2020 - Business Connect Magazine.',
      '25 Most Trusted ERP & CRM Solution Providers - The CEO Magazine.',
      'Company in Focus – 2020 by The CEO Story.',
    ],
  },
  {
    title: 'WINNER OF',
    points: [
      'Best Digital Marketing Company in Delhi NCR of the Year 2015.',
      'Best Digital Marketing Company in Western UP of the Year 2016.',
      'Best Digital Marketing Company in Delhi NCR of the Year 2016.',
      '10 Best Digital Marketing Service Providers – 2019 by CEO Insight.',
      'Appreciation Certificate from ALTTC.',
    ],
  },
  {
    title: 'SHORTLISTED IN',
    points: [
      'Top 20 Google Service Provider Company in India.',
      'Top 20 Fastest Growing Digital Marketing Company in India.',
    ],
  },
];

const AwardsAchievements = () => {
  return (
    <section className="bg-gray-50 py-12 px-6 md:px-20">
      <h2 className="text-3xl font-bold text-center mb-10 text-orange-600">
        Awards & Achievements
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {awardsData.map((section, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md p-6 rounded-lg hover:shadow-xl transition duration-300 border-l-4 border-orange-500"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              {section.title}
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
              {section.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AwardsAchievements;
