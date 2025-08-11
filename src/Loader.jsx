import { useState, useEffect } from 'react';

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(timer);
          setTimeout(() => onComplete(), 500);
          return 100;
        }
        return prevProgress + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-white dark:bg-gray-900 z-50 flex items-center justify-center">
      <div className="text-center">
        {/* Logo Animation */}
        <div className="mb-8">
          <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center animate-pulse">
            <span className="text-white text-2xl font-bold">ER</span>
          </div>
        </div>

        {/* Loading Text */}
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
          Eliud Rotich Portfolio
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Loading amazing content...
        </p>

        {/* Progress Bar */}
        <div className="w-64 mx-auto">
          <div className="bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-4">
            <div
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            {progress}%
          </div>
        </div>

        {/* Animated Dots */}
        <div className="flex justify-center space-x-2 mt-8">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;