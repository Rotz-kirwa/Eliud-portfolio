import { useEffect, useState } from 'react';

const CursorTrail = () => {
  const [trail, setTrail] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const newDot = {
        x: e.clientX,
        y: e.clientY,
        id: Date.now()
      };

      setTrail(prev => [...prev.slice(-20), newDot]);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTrail(prev => prev.slice(1));
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {trail.map((dot, index) => (
        <div
          key={dot.id}
          className="absolute w-2 h-2 bg-blue-500 rounded-full"
          style={{
            left: dot.x - 4,
            top: dot.y - 4,
            opacity: (index + 1) / trail.length * 0.5,
            transform: `scale(${(index + 1) / trail.length})`,
            transition: 'opacity 0.3s ease-out, transform 0.3s ease-out'
          }}
        />
      ))}
    </div>
  );
};

export default CursorTrail;