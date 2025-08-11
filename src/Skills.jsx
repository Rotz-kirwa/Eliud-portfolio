import { useState, useEffect, useRef } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiFlask, SiPostgresql, SiMysql } from 'react-icons/si';

const Skills = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  const skills = [
    { name: 'HTML5', icon: FaHtml5, color: 'text-orange-500', level: 95, gradient: 'from-orange-400 to-red-500' },
    { name: 'CSS3', icon: FaCss3Alt, color: 'text-blue-500', level: 90, gradient: 'from-blue-400 to-blue-600' },
    { name: 'JavaScript', icon: FaJs, color: 'text-yellow-500', level: 88, gradient: 'from-yellow-400 to-orange-500' },
    { name: 'React', icon: FaReact, color: 'text-cyan-500', level: 85, gradient: 'from-cyan-400 to-blue-500' },
    { name: 'Python', icon: FaPython, color: 'text-blue-600', level: 92, gradient: 'from-blue-500 to-indigo-600' },
    { name: 'Flask', icon: SiFlask, color: 'text-gray-700', level: 80, gradient: 'from-gray-500 to-gray-700' },
    { name: 'SQL', icon: FaDatabase, color: 'text-gray-600', level: 85, gradient: 'from-gray-400 to-gray-600' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: 'text-blue-700', level: 82, gradient: 'from-blue-600 to-indigo-700' },
    { name: 'MySQL', icon: SiMysql, color: 'text-orange-600', level: 80, gradient: 'from-orange-500 to-red-600' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-teal-500', level: 88, gradient: 'from-teal-400 to-cyan-500' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const CircularProgress = ({ level, gradient, delay }) => {
    const [progress, setProgress] = useState(0);
    
    useEffect(() => {
      if (inView) {
        const timer = setTimeout(() => {
          setProgress(level);
        }, delay);
        return () => clearTimeout(timer);
      }
    }, [inView, level, delay]);

    const circumference = 2 * Math.PI * 40;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
      <div className="relative w-24 h-24">
        <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="currentColor"
            strokeWidth="8"
            fill="none"
            className="text-gray-200 dark:text-gray-700"
          />
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="url(#gradient)"
            strokeWidth="8"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-1000 ease-out"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" className={`stop-color-blue-400`} />
              <stop offset="100%" className={`stop-color-purple-500`} />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-sm font-bold text-gray-800 dark:text-white">{Math.round(progress)}%</span>
        </div>
      </div>
    );
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Skills & Technologies</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are the technologies I work with to bring ideas to life
          </p>
        </div>

        <div ref={sectionRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={skill.name}
                className="group relative bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:rotate-2 transform-gpu perspective-1000"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${skill.gradient} opacity-0 group-hover:opacity-20 rounded-2xl transition-opacity duration-500`}></div>
                
                <div className="relative text-center">
                  <div className={`${skill.color} text-4xl mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500`}>
                    <IconComponent className="mx-auto drop-shadow-lg" />
                  </div>
                  <h3 className="font-bold text-gray-800 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {skill.name}
                  </h3>
                  
                  {/* Circular Progress */}
                  <div className="flex justify-center mb-2">
                    <CircularProgress 
                      level={skill.level} 
                      gradient={skill.gradient}
                      delay={index * 200}
                    />
                  </div>
                  
                  {/* Floating Badge */}
                  <div className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Expert
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-8">What I Do Best</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
              <div className="text-blue-600 text-3xl mb-4">🎨</div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Frontend Development</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Creating responsive, interactive user interfaces with modern frameworks
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
              <div className="text-green-600 text-3xl mb-4">⚙️</div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Backend Development</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Building robust APIs and server-side applications with Python and Flask
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg">
              <div className="text-purple-600 text-3xl mb-4">🗄️</div>
              <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Database Design</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Designing efficient database schemas and optimizing queries
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;