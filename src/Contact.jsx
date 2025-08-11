import { useState, useEffect } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheck, FiX, FiClock, FiGlobe } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        return value.length < 2 ? 'Name must be at least 2 characters' : '';
      case 'email':
        return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Invalid email address' : '';
      case 'subject':
        return value.length < 5 ? 'Subject must be at least 5 characters' : '';
      case 'message':
        return value.length < 10 ? 'Message must be at least 10 characters' : '';
      default:
        return '';
    }
  };

  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Real-time validation
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setTouched({ name: true, email: true, subject: true, message: true });
      return;
    }
    
    setIsSubmitting(true);
    
    // Create WhatsApp message
    const whatsappMessage = `Hi! I'm ${formData.name}%0A%0ASubject: ${formData.subject}%0A%0AMessage: ${formData.message}%0A%0AEmail: ${formData.email}`;
    const whatsappURL = `https://wa.me/254791260817?text=${whatsappMessage}`;
    
    // Open WhatsApp
    window.open(whatsappURL, '_blank');
    
    // Show success message
    setSubmitStatus('success');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTouched({});
    setErrors({});
    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus(''), 5000);
  };

  const InputField = ({ name, type = 'text', placeholder, rows, icon: Icon }) => {
    const hasError = errors[name] && touched[name];
    const isValid = !errors[name] && touched[name] && formData[name];
    
    const Component = rows ? 'textarea' : 'input';
    
    return (
      <div className="relative">
        <label htmlFor={name} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 capitalize">
          {name} {name !== 'subject' && '*'}
        </label>
        <div className="relative">
          {Icon && (
            <Icon className="absolute left-3 top-3 text-gray-400" size={20} />
          )}
          <Component
            type={type}
            id={name}
            name={name}
            value={formData[name]}
            onChange={handleChange}
            onBlur={handleBlur}
            required={name !== 'subject'}
            rows={rows}
            className={`w-full ${Icon ? 'pl-10' : 'pl-4'} pr-10 py-3 border rounded-xl focus:ring-2 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300 ${
              hasError
                ? 'border-red-500 focus:ring-red-500'
                : isValid
                ? 'border-green-500 focus:ring-green-500'
                : 'border-gray-300 dark:border-gray-600 focus:ring-blue-500'
            } ${rows ? 'resize-none' : ''}`}
            placeholder={placeholder}
          />
          
          {/* Validation Icons */}
          <div className="absolute right-3 top-3">
            {hasError && <FiX className="text-red-500" size={20} />}
            {isValid && <FiCheck className="text-green-500" size={20} />}
          </div>
        </div>
        
        {/* Error Message */}
        {hasError && (
          <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
            <FiX size={14} />
            {errors[name]}
          </p>
        )}
        
        {/* Success Message */}
        {isValid && (
          <p className="mt-1 text-sm text-green-500 flex items-center gap-1">
            <FiCheck size={14} />
            Looks good!
          </p>
        )}
      </div>
    );
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">Get In Touch</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how I can help bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">
                Let's Work Together
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                I'm always interested in new opportunities and exciting projects. 
                Whether you need a full-stack application, frontend development, or backend solutions, 
                I'm here to help.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 group hover:bg-gray-50 dark:hover:bg-gray-800 p-4 rounded-xl transition-colors">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-xl group-hover:scale-110 transition-transform">
                  <FiMail className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">Email</h4>
                  <p className="text-gray-600 dark:text-gray-300">eliudkirwa452@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group hover:bg-gray-50 dark:hover:bg-gray-800 p-4 rounded-xl transition-colors">
                <div className="bg-gradient-to-br from-green-500 to-green-600 p-3 rounded-xl group-hover:scale-110 transition-transform">
                  <FiPhone className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">Phone</h4>
                  <p className="text-gray-600 dark:text-gray-300">+254 791 260 817</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group hover:bg-gray-50 dark:hover:bg-gray-800 p-4 rounded-xl transition-colors">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-3 rounded-xl group-hover:scale-110 transition-transform">
                  <FiGlobe className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">Location</h4>
                  <p className="text-gray-600 dark:text-gray-300">Available Worldwide (Remote)</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 group hover:bg-gray-50 dark:hover:bg-gray-800 p-4 rounded-xl transition-colors">
                <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-3 rounded-xl group-hover:scale-110 transition-transform">
                  <FiClock className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-white">Local Time</h4>
                  <p className="text-gray-600 dark:text-gray-300">{currentTime.toLocaleTimeString()}</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <h4 className="font-semibold text-gray-800 dark:text-white mb-2">Response Time</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                I typically respond to all inquiries within 24 hours. For urgent projects, 
                feel free to mention it in your message.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <InputField
                  name="name"
                  placeholder="Your Full Name"
                  icon={FiMail}
                />
                <InputField
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  icon={FiMail}
                />
              </div>

              <InputField
                name="subject"
                placeholder="What's this about?"
              />

              <InputField
                name="message"
                placeholder="Tell me about your project, timeline, and budget..."
                rows={6}
              />

              <button
                type="submit"
                disabled={isSubmitting || Object.keys(errors).some(key => errors[key])}
                className="group w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 disabled:scale-100 shadow-lg hover:shadow-xl"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Sending Message...
                  </>
                ) : (
                  <>
                    <FiSend size={20} className="group-hover:rotate-12 transition-transform" />
                    Send Message
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-4 text-green-700 dark:text-green-400 text-center flex items-center justify-center gap-2">
                  <FiCheck className="text-green-500" size={20} />
                  <span>Redirecting to WhatsApp! Your message will be sent directly to me.</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-4 text-red-700 dark:text-red-400 text-center flex items-center justify-center gap-2">
                  <FiX className="text-red-500" size={20} />
                  <span>Something went wrong. Please try again or email me directly.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;