import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Software Engineering Intern',
      company: 'Zenka Finance',
      period: '12/2024 - 05/2025',
      location: 'Nairobi, Kenya',
      description: [
        'Assisted in software troubleshooting and bug fixing to improve system stability and performance',
        'Supported the IT and engineering team in testing, documenting, and resolving technical issues',
        'Gained hands-on experience with system maintenance, version control (Git/GitHub), and Agile collaboration',
        'Contributed to cross-functional problem-solving by coordinating with senior developers'
      ],
      icon: FiBriefcase,
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Professional Experience</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Hands-on experience in software development and engineering practices
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => {
            const IconComponent = exp.icon;
            return (
              <div
                key={exp.id}
                className="relative mb-12 last:mb-0"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-start space-x-6">
                  {/* Icon */}
                  <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${exp.color} rounded-full flex items-center justify-center shadow-lg`}>
                    <IconComponent className="text-white" size={20} />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
                          {exp.title}
                        </h3>
                        <h4 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
                          {exp.company}
                        </h4>
                      </div>
                      <div className="flex flex-col md:items-end text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center gap-1 mb-1">
                          <FiCalendar size={14} />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FiMapPin size={14} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <ul className="space-y-2">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="text-gray-600 dark:text-gray-300 flex items-start">
                          <span className="text-blue-500 mr-2 mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
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

export default Experience;