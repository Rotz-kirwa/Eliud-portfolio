import { useState, useEffect } from 'react';
import { FiZap, FiCpu, FiCloud, FiCode, FiTrendingUp, FiTarget, FiBarChart, FiShield, FiSettings } from 'react-icons/fi';

const Vision = () => {
  const [activeCard, setActiveCard] = useState(0);

  const visionCards = [
    {
      id: 1,
      icon: FiCpu,
      title: 'AI & Machine Learning',
      description: 'Building intelligent systems that learn, adapt, and solve complex problems autonomously',
      color: 'from-purple-500 to-pink-500',
      gradient: 'bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20'
    },
    {
      id: 2,
      icon: FiBarChart,
      title: 'Data Science & Analytics',
      description: 'Extracting insights from complex datasets to drive data-driven decision making',
      color: 'from-green-500 to-emerald-500',
      gradient: 'bg-gradient-to-br from-green-100 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20'
    },
    {
      id: 3,
      icon: FiShield,
      title: 'Cyber Security',
      description: 'Protecting digital assets and building secure systems against evolving threats',
      color: 'from-red-500 to-rose-500',
      gradient: 'bg-gradient-to-br from-red-100 to-rose-100 dark:from-red-900/20 dark:to-rose-900/20'
    },
    {
      id: 4,
      icon: FiCloud,
      title: 'Cloud Architecture',
      description: 'Designing scalable, distributed systems that handle millions of users seamlessly',
      color: 'from-blue-500 to-cyan-500',
      gradient: 'bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20'
    },
    {
      id: 5,
      icon: FiSettings,
      title: 'Robotics Engineering',
      description: 'Designing and programming autonomous robots that interact intelligently with the physical world',
      color: 'from-indigo-500 to-violet-500',
      gradient: 'bg-gradient-to-br from-indigo-100 to-violet-100 dark:from-indigo-900/20 dark:to-violet-900/20'
    },
    {
      id: 6,
      icon: FiZap,
      title: 'Innovation & Automation',
      description: 'Creating solutions that automate workflows and revolutionize how we interact with technology',
      color: 'from-yellow-500 to-orange-500',
      gradient: 'bg-gradient-to-br from-yellow-100 to-orange-100 dark:from-yellow-900/20 dark:to-orange-900/20'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % visionCards.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="vision" className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <FiTarget className="text-blue-400 mr-2" size={20} />
            <span className="text-blue-300 text-sm font-medium">Future Vision</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Embracing the <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Future of Tech</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">
            I'm passionate about pushing the boundaries of what's possible with technology. 
            My journey is focused on mastering AI, building complex systems, and creating 
            solutions that make a meaningful impact on the world.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <FiCode className="text-blue-400" size={28} />
                My Tech Philosophy
              </h3>
              <div className="space-y-4 text-gray-300">
                <p className="flex items-start gap-3">
                  <span className="text-blue-400 mt-1">▶</span>
                  <span><strong className="text-white">Continuous Learning:</strong> Technology evolves rapidly, and I embrace every opportunity to learn cutting-edge tools and methodologies.</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-purple-400 mt-1">▶</span>
                  <span><strong className="text-white">Problem-First Approach:</strong> I believe in understanding real-world problems deeply before building solutions that truly matter.</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-pink-400 mt-1">▶</span>
                  <span><strong className="text-white">Innovation Mindset:</strong> I'm driven to create, not just consume. Every project is an opportunity to push boundaries.</span>
                </p>
              </div>
            </div>

            {/* Vision Cards */}
            <div className="space-y-4">
              {visionCards.map((card, index) => {
                const IconComponent = card.icon;
                const isActive = activeCard === index;
                return (
                  <div
                    key={card.id}
                    className={`${card.gradient} rounded-xl p-6 border transition-all duration-500 cursor-pointer ${
                      isActive 
                        ? 'border-white/30 scale-105 shadow-2xl' 
                        : 'border-white/10 hover:border-white/20'
                    }`}
                    onClick={() => setActiveCard(index)}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${card.color} rounded-full flex items-center justify-center`}>
                        <IconComponent className="text-white" size={24} />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-gray-800 dark:text-white">{card.title}</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">{card.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1597239450996-ea7c2c564412?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI3fHx0ZWNofGVufDB8fDB8fHww"
                alt="Future Technology"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center animate-bounce">
              <FiTrendingUp className="text-white" size={32} />
            </div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full flex items-center justify-center animate-pulse">
              <FiZap className="text-white" size={24} />
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Build the Future Together?</h3>
            <p className="text-gray-300 mb-6">
              I'm always excited to collaborate on innovative projects that challenge the status quo 
              and create meaningful impact through technology.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <FiZap size={20} />
              Let's Innovate Together
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;