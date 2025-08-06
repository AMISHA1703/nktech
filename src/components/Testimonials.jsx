import TestimonialCard from './TestimonialCard';

const testimonials = [
  {
    img: '/testimonials/rajiv.jpg',
    name: 'Rajiv Khanna',
    company: 'MD, Jukaso Hotels Pvt. Ltd.',
    rating: 5,
    desc: 'If you are looking for the best SEO company in Noida, NKTech is the best choice. Their team provided result‑oriented SEO services and I’m grateful for their fast‑growing expertise.',
  },
  {
    img: '/testimonials/yajus.jpg',
    name: 'Yajus Khanna',
    company: 'CEO, Jukaso Journeys',
    rating: 5,
    desc: 'Very pleased with NKTech’s SEO services. Our traffic and rankings improved considerably — great work by the team.',
  },
  {
    img: '/testimonials/vinita.jpg',
    name: 'Vinita Gupta',
    company: 'Client',
    rating: 5,
    desc: 'The experience with NKTech was excellent. Rajeev Sharma guided me to grow my business online — genuine, result‑driven company.',
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
          What Our Clients Say
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
          {testimonials.map((item, idx) => (
            <TestimonialCard key={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
