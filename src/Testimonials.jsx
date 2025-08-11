import { useState, useEffect } from 'react';
import { FiChevronLeft, FiChevronRight, FiStar } from 'react-icons/fi';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      content: 'Eliud delivered an exceptional e-commerce platform that exceeded our expectations. The attention to detail and technical expertise was outstanding.',
      rating: 5,
      avatar: 'https://media.istockphoto.com/id/1468149085/photo/fitness-black-woman-and-happy-athlete-smile-after-running-exercise-and-marathon-training.webp?a=1&b=1&s=612x612&w=0&k=20&c=xd2VvA2wMYdu9BTTKIJaiW4lzj7-TOrcknCRW1W4tKE='
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Product Manager, InnovateCorp',
      content: 'Working with Eliud was a pleasure. The project was delivered on time, within budget, and the code quality was exceptional. Highly recommended!',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGUlMjBwaWN8ZW58MHx8MHx8fDA%3D'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Founder, Digital Solutions',
      content: 'The full-stack application Eliud built for us has transformed our business operations. Professional, reliable, and incredibly skilled.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Client Testimonials</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            What my clients say about working with me
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <FiStar key={i} className="text-yellow-400 fill-current" size={24} />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                "{testimonials[currentIndex].content}"
              </blockquote>

              {/* Avatar and Info */}
              <div className="flex items-center justify-center space-x-4">
                <img
                  src={testimonials[currentIndex].avatar}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="text-left">
                  <h4 className="font-semibold text-gray-800 dark:text-white">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-gray-500 dark:text-gray-400">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            <FiChevronLeft size={24} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          >
            <FiChevronRight size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex
                    ? 'bg-blue-600'
                    : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;