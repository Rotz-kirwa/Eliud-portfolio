const About = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">About Me</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Passionate full-stack developer with expertise in modern web technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Detail-oriented Full Stack Developer with expertise in front-end and backend development, 
              software troubleshooting, and Agile methodologies. Skilled in designing user-friendly interfaces, 
              optimizing system performance, and streamlining development processes to enhance user experience.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Proven track record of collaborating across teams to deliver innovative, high-quality software 
              solutions that meet business needs. Strong problem-solving and communication skills, with a 
              commitment to continuous learning in emerging technologies like AI and cloud computing.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Frontend</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">React, JavaScript, HTML, CSS, Tailwind CSS</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Backend</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Node.js, Python, Flask, SQL, PostgreSQL</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Cloud & AI</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">AWS, Prompt Engineering, Amazon Bedrock</p>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Tools</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Git, GitHub, API Integration, Testing</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 mt-8">
              <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-gray-600 dark:text-gray-300 font-medium">Available for work</span>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D"
              alt="Coding workspace"
              className="w-80 h-80 object-cover rounded-full shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;