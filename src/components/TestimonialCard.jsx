import { Star } from 'lucide-react';

const TestimonialCard = ({ img, name, company, rating, desc }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition duration-300 w-full max-w-sm">
      <img
        src={img}
        alt={name}
        className="w-16 h-16 rounded-full object-cover mb-4 mx-auto"
      />
      <h3 className="text-lg font-semibold text-center">{name}</h3>
      <p className="text-sm text-gray-500 text-center mb-2">{company}</p>

      <div className="flex justify-center mb-3">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={18}
            className={i < rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}
          />
        ))}
      </div>

      <p className="text-sm text-gray-600 text-center">{desc}</p>
    </div>
  );
};

export default TestimonialCard;
