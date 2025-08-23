import { useState, useEffect } from 'react';
import { FiGithub, FiExternalLink, FiFilter, FiSearch, FiStar, FiEye } from 'react-icons/fi';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('featured');

  const projects = [
    {
      id: 1,
      title: 'Wildwaves Safari Agency',
      description: 'Full-stack website with booking system, photo gallery, and responsive UI. Built with React, Node.js, Tailwind CSS, and PostgreSQL.',
      image: 'https://images.unsplash.com/photo-1498038116800-4159eb9b2a62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHNhZmFyaXxlbnwwfHwwfHx8MA%3D%3D',
      tech: ['React', 'Node.js', 'Tailwind CSS', 'PostgreSQL'],
      category: 'fullstack',
      github: 'https://github.com/Rotz-kirwa',
      demo: 'https://wildwaves-safari.com',
      featured: true,
      stars: 124,
      views: 2340,
      status: 'completed'
    },
    {
      id: 2,
      title: 'Memory Card Game',
      description: 'Interactive memory card game featuring dynamic gameplay, state management, and responsive UI design. Built as a gaming platform with engaging user experience.',
      image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=500&h=300&fit=crop',
      tech: ['React', 'Tailwind CSS', 'JavaScript'],
      category: 'frontend',
      github: 'https://github.com/Rotz-kirwa',
      demo: 'https://demo.com',
      featured: false,
      stars: 89,
      views: 1560,
      status: 'completed'
    },
    {
      id: 3,
      title: 'University Website',
      description: 'Responsive multi-page school website using React and Tailwind CSS with dynamic content integration.',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?w=500&h=300&fit=crop',
      tech: ['React', 'Tailwind CSS', 'JavaScript'],
      category: 'frontend',
      github: 'https://github.com/Rotz-kirwa',
      demo: 'https://demo.com',
      featured: false,
      stars: 78,
      views: 1450,
      status: 'completed'
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'Modern, responsive portfolio website with dark mode and smooth animations.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop',
      tech: ['React', 'Tailwind CSS', 'JavaScript'],
      category: 'frontend',
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: false,
      stars: 92,
      views: 1800,
      status: 'completed'
    },
    {
      id: 5,
      title: 'Data Visualization Tool',
      description: 'Interactive data visualization platform for analyzing complex datasets with custom charts.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      tech: ['Python', 'Flask', 'PostgreSQL', 'React'],
      category: 'fullstack',
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: false,
      stars: 103,
      views: 2100,
      status: 'completed'
    },
    {
      id: 6,
      title: 'Restaurant Management System',
      description: 'Complete restaurant management solution with inventory tracking and order management.',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&h=300&fit=crop',
      tech: ['Python', 'Flask', 'MySQL'],
      category: 'backend',
      github: 'https://github.com',
      demo: 'https://demo.com',
      featured: false,
      stars: 67,
      views: 1200,
      status: 'completed'
    },
    {
      id: 7,
      title: 'Poverty Line Project',
      description: 'A data visualization project analyzing poverty statistics and trends across different regions. Contributed as a team member.',
      image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=500&h=300&fit=crop',
      tech: ['React', 'JavaScript', 'Data Visualization'],
      category: 'frontend',
      github: 'https://github.com',
      demo: 'https://the-poverty-line-project-okxb.vercel.app/',
      featured: true,
      stars: 156,
      views: 2890,
      status: 'completed'
    },
    {
      id: 8,
      title: 'Corporate Management Website',
      description: 'Professional corporate website with management dashboard, employee portal, and business analytics features.',
      image: 'https://plus.unsplash.com/premium_photo-1683134240390-04ff69415385?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvb3BvcmF0ZSUyMG1hbmFnZW1lbnQlMjB3ZWJzaXRlfGVufDB8fDB8fHww',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
      category: 'fullstack',
      github: 'https://github.com/Rotz-kirwa',
      demo: 'https://demo.com',
      featured: false,
      stars: 87,
      views: 1650,
      status: 'completed'
    },
    {
      id: 9,
      title: 'Expense Tracker',
      description: 'Personal finance management app with budget tracking, expense categorization, and financial analytics dashboard.',
      image: 'https://plus.unsplash.com/premium_photo-1680721444874-6b52aa31e26c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGV4cGVuc2UlMjB0cmFja2VyfGVufDB8fDB8fHww',
      tech: ['React', 'JavaScript', 'Chart.js', 'Local Storage'],
      category: 'frontend',
      github: 'https://github.com/Rotz-kirwa',
      demo: 'https://demo.com',
      featured: false,
      stars: 73,
      views: 1420,
      status: 'completed'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' }
  ];

  const filteredProjects = projects
    .filter(project => {
      const matchesFilter = filter === 'all' || project.category === filter;
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.tech.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesFilter && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === 'featured') return b.featured - a.featured;
      if (sortBy === 'stars') return b.stars - a.stars;
      if (sortBy === 'views') return b.views - a.views;
      return 0;
    });

  const ProjectCard = ({ project, index }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
      <div
        className="group relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 transform-gpu"
        style={{ animationDelay: `${index * 0.1}s` }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
            <FiStar size={12} />
            Featured
          </div>
        )}
        
        {/* Status Badge */}
        <div className={`absolute top-4 right-4 z-10 px-3 py-1 rounded-full text-xs font-bold ${
          project.status === 'completed' ? 'bg-green-500 text-white' : 'bg-yellow-500 text-black'
        }`}>
          {project.status === 'completed' ? '✓ Completed' : '🚧 In Progress'}
        </div>
        
        <div className="relative overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className={`w-full h-48 object-cover transition-all duration-700 ${
              isHovered ? 'scale-110 rotate-2' : 'scale-100'
            }`}
          />
          <div className={`absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}></div>
          
          {/* Hover Overlay */}
          <div className={`absolute inset-0 flex items-center justify-center gap-4 transition-all duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 backdrop-blur-sm p-3 rounded-full text-white hover:bg-white/30 transition-colors"
            >
              <FiGithub size={20} />
            </a>
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 backdrop-blur-sm p-3 rounded-full text-white hover:bg-white/30 transition-colors"
            >
              <FiExternalLink size={20} />
            </a>
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
            {project.description}
          </p>
          
          {/* Stats */}
          <div className="flex items-center gap-4 mb-4 text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-1">
              <FiStar size={14} />
              {project.stars}
            </div>
            <div className="flex items-center gap-1">
              <FiEye size={14} />
              {project.views}
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-blue-600 dark:text-blue-300 text-xs rounded-full font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
      </div>
    );
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise
          </p>
        </div>

        {/* Enhanced Controls */}
        <div className="mb-12 space-y-6">
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search projects or technologies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>
          
          {/* Filter and Sort Controls */}
          <div className="flex flex-wrap justify-center gap-4">
            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setFilter(category.id)}
                  className={`px-4 py-2 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 ${
                    filter === category.id
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                      : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-105'
                  }`}
                >
                  <FiFilter size={14} />
                  {category.name}
                </button>
              ))}
            </div>
            
            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-blue-500 text-gray-700 dark:text-gray-300"
            >
              <option value="featured">Sort by Featured</option>
              <option value="stars">Sort by Stars</option>
              <option value="views">Sort by Views</option>
            </select>
          </div>
          
          {/* Results Count */}
          <div className="text-center text-gray-500 dark:text-gray-400">
            Showing {filteredProjects.length} of {projects.length} projects
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        
        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">No projects found</h3>
            <p className="text-gray-600 dark:text-gray-300">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;