import { FiBook, FiAward, FiMapPin } from 'react-icons/fi';

const Education = () => {
  const education = [
    {
      id: 1,
      institution: 'Moringa School',
      degree: 'Software Engineering Bootcamp (Full-Stack Development)',
      period: '08/2023 - 09/2024',
      description: 'Intensive training in Python, JavaScript, React, Flask, and SQL. Built and deployed full-stack applications individually and in teams. Practiced Agile methodology, version control (Git/GitHub), and testing.',
      icon: FiBook,
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 2,
      institution: 'IBM SkillsBuild',
      degree: 'Prompt Engineering Certificate',
      period: '2024',
      description: 'Comprehensive training in AI prompt engineering techniques, focusing on optimizing interactions with large language models and implementing AI solutions.',
      icon: FiAward,
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 3,
      institution: 'Roadmap.sh',
      degree: 'Machine Learning Course',
      period: '07/2025 - Present',
      description: 'Currently pursuing advanced machine learning concepts and practical applications. Focusing on data science, algorithms, and ML model development.',
      icon: FiMapPin,
      color: 'from-green-500 to-green-600'
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Education & Certifications</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Continuous learning and professional development in software engineering and emerging technologies
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {education.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.id}
                className="relative mb-12 last:mb-0"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Line */}
                {index !== education.length - 1 && (
                  <div className="absolute left-6 top-16 w-0.5 h-20 bg-gray-300 dark:bg-gray-600"></div>
                )}
                
                <div className="flex items-start space-x-6">
                  {/* Icon */}
                  <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center shadow-lg`}>
                    <IconComponent className="text-white" size={20} />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                        {item.degree}
                      </h3>
                      <span className="text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full">
                        {item.period}
                      </span>
                    </div>
                    
                    <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-3">
                      {item.institution}
                    </h4>
                    
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;