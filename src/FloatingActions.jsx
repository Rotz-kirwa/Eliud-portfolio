import { useState } from 'react';
import { FiMessageCircle, FiMail, FiPhone, FiArrowUp, FiX } from 'react-icons/fi';

const FloatingActions = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Show scroll to top button when scrolled down
  useState(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const actions = [
    {
      icon: FiMail,
      label: 'Email',
      href: 'mailto:eliudkirwa452@gmail.com',
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      icon: FiPhone,
      label: 'Call',
      href: 'tel:+254791260817',
      color: 'bg-green-500 hover:bg-green-600'
    }
  ];

  return (
    <>
      {/* Floating Action Menu */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          {/* Action Items */}
          <div className={`absolute bottom-16 right-0 space-y-3 transition-all duration-300 ${
            isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
          }`}>
            {actions.map((action, index) => {
              const IconComponent = action.icon;
              return (
                <div
                  key={action.label}
                  className="flex items-center space-x-3"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="bg-gray-800 text-white px-3 py-1 rounded-lg text-sm font-medium shadow-lg">
                    {action.label}
                  </span>
                  <a
                    href={action.href}
                    className={`${action.color} text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110`}
                  >
                    <IconComponent size={20} />
                  </a>
                </div>
              );
            })}
          </div>

          {/* Main FAB */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 ${
              isOpen ? 'rotate-45' : ''
            }`}
          >
            {isOpen ? <FiX size={24} /> : <FiMessageCircle size={24} />}
          </button>
        </div>
      </div>

      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 bg-gray-800 dark:bg-gray-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50"
        >
          <FiArrowUp size={20} />
        </button>
      )}
    </>
  );
};

export default FloatingActions;