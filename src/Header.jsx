import { useState, useEffect } from 'react';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg' : 'bg-black/20 backdrop-blur-sm'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className={`text-2xl font-bold ${
            scrolled ? 'text-gray-800 dark:text-white' : 'text-white'
          }`}>
            Eliud Rotich
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`transition-colors font-medium ${
                  scrolled 
                    ? 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400' 
                    : 'text-white/90 hover:text-blue-400'
                }`}
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg transition-colors ${
                scrolled 
                  ? 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300' 
                  : 'bg-white/20 backdrop-blur-sm text-white'
              }`}
            >
              {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={scrolled ? 'text-gray-600 dark:text-gray-300' : 'text-white'}
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`block py-2 transition-colors ${
                  scrolled 
                    ? 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400' 
                    : 'text-white/90 hover:text-blue-400'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;