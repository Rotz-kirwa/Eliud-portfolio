import { useState, useEffect } from 'react';
import Header from './Header';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Education from './Education';
import Experience from './Experience';
import Projects from './Projects';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Footer from './Footer';
import Loader from './Loader';
import FloatingActions from './FloatingActions';
import CursorTrail from './CursorTrail';

function App() {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  useEffect(() => {
    // Prevent scrolling while loading
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [loading]);

  if (loading) {
    return <Loader onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 relative">
      <CursorTrail />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}

export default App;