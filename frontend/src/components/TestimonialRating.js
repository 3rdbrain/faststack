import { FaStar } from 'react-icons/fa';

export default function TestimonialRating({ testimonial }) {
  const { name, rating, text, imageUrl } = testimonial;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105">
      <img src={imageUrl} alt={name} className="w-24 h-24 rounded-full mb-4 border-4 border-indigo-600" />
      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{name}</h3>
      <div className="flex items-center justify-center mt-2">
        {[...Array(5)].map((star, index) => (
          <FaStar
            key={index}
            className={`h-5 w-5 ${index < rating ? 'text-yellow-500' : 'text-gray-300 dark:text-gray-600'}`}
          />
        ))}
      </div>
      <p className="mt-4 text-gray-600 dark:text-gray-300">{text}</p>
    </div>
  );
}