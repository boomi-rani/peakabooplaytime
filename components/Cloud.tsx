
import React from 'react';

interface CloudProps {
  top: string;
  duration: string;
  delay: string;
}

export const Cloud: React.FC<CloudProps> = ({ top, duration, delay }) => {
  return (
    <div 
      className="absolute animate-drift" 
      style={{
        top,
        animationDuration: duration,
        animationDelay: delay,
      }}
    >
      <svg
        viewBox="0 0 150 100"
        className="w-48 h-32 md:w-64 md:h-48"
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 125.84,54.08 C 122.95,40.09 110.5,29.41 96.2,29.41 c -2.3,0 -4.53,0.3 -6.68,0.88 C 84.15,14.4 69.34,5 52.2,5 30.2,5 12.2,22.18 12.2,43.2 c 0,1.38,0.07,2.75,0.22,4.1 C 5.33,49.88 0,56.93 0,65.3 0,76.53 8.7,85.3 19.8,85.3 l 75.3,0 c 4.95,0 9.58,-1.59 13.28,-4.36 10.84,0.03 21.36,-8.24 22.37,-19.45 0.53,-5.88 -1.75,-11.39 -5.91,-15.1 Z"
          style={{ filter: 'drop-shadow(0px 5px 5px rgba(0, 0, 0, 0.1))' }}
        />
      </svg>
    </div>
  );
};
