import { useState, useEffect } from 'react';
import { FiDownload, FiMail, FiGithub, FiLinkedin, FiCode, FiZap } from 'react-icons/fi';
import ParticleBackground from './ParticleBackground';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = [
    'Full-Stack Developer',
    'React Specialist',
    'Python Expert',
    'Freelance Engineer',
    'Problem Solver'
  ];

  useEffect(() => {
    const currentRole = roles[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (typedText.length < currentRole.length) {
          setTypedText(currentRole.slice(0, typedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (typedText.length > 0) {
          setTypedText(typedText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [typedText, currentIndex, isDeleting, roles]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <ParticleBackground />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-bounce-slow">
        <FiCode className="text-blue-400 opacity-20" size={40} />
      </div>
      <div className="absolute bottom-20 right-10 animate-bounce-slow" style={{animationDelay: '1s'}}>
        <FiZap className="text-purple-400 opacity-20" size={35} />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <div className="animate-fade-in text-center lg:text-left">
            {/* Glowing Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 backdrop-blur-sm mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-2"></div>
              <span className="text-blue-300 text-sm font-medium">Available for Work</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Eliud Rotich</span>, a Software Engineer
            </h1>
            
            <div className="text-xl md:text-2xl text-gray-300 mb-8 h-8">
              <span>{typedText}</span>
              <span className="animate-pulse text-blue-400">|</span>
            </div>
            
            <p className="text-lg text-gray-400 mb-12 max-w-2xl leading-relaxed">
              I craft <span className="text-blue-400 font-semibold">modern</span>, <span className="text-purple-400 font-semibold">scalable</span> web applications using cutting-edge technologies. 
              Let's transform your ideas into <span className="text-green-400 font-semibold">digital reality</span>.
            </p>
            
            <div className="flex justify-center lg:justify-start mb-12">
              <a
                href="#projects"
                className="group border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm hover:scale-105"
              >
                View Projects
              </a>
            </div>
          </div>
          
          {/* Right Profile Photo */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              <img
                src="https://www.dropbox.com/scl/fi/441knir5xafdoa7xt6jc3/eliud-profile-pic.jpg?rlkey=mwiffdqzfwt5uulqrxfl0txt2&raw=1"
                alt="Eliud Rotich Profile"
                className="w-80 h-80 object-cover rounded-full shadow-2xl border-4 border-white/20 backdrop-blur-sm animate-float"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500/20 to-purple-500/20 animate-glow"></div>
            </div>
          </div>
        </div>

        
        {/* Social Links - Centered */}
        <div className="flex justify-center space-x-6 mt-12">
          <a
            href="https://github.com/Rotz-kirwa"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 bg-white/10 backdrop-blur-sm rounded-full text-gray-300 hover:text-white hover:bg-blue-500/20 transition-all duration-300 hover:scale-110"
          >
            <FiGithub size={24} className="group-hover:rotate-12 transition-transform" />
          </a>
          <a
            href="https://www.linkedin.com/in/eliud-rotich-48b754357/"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-3 bg-white/10 backdrop-blur-sm rounded-full text-gray-300 hover:text-white hover:bg-blue-500/20 transition-all duration-300 hover:scale-110"
          >
            <FiLinkedin size={24} className="group-hover:rotate-12 transition-transform" />
          </a>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;