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
              Full Stack Developer with expertise in React, Node.js, and AWS cloud services, 
              specializing in building responsive, scalable web applications and AI-enhanced solutions. 
              Skilled in RESTful API development, database optimization, and prompt engineering using Amazon Bedrock.
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Proven track record of delivering 5+ client projects end-to-end with a focus on performance, 
              usability, and business impact. Currently expanding expertise in prompt engineering and 
              generative AI integration to build next-generation applications.
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