
import React from 'react';

interface BouncingAnimalProps {
  children: React.ReactNode;
  animationDelay?: string;
}

export const BouncingAnimal: React.FC<BouncingAnimalProps> = ({ children, animationDelay = '0s' }) => {
  return (
    <div 
      className="animate-bounce"
      style={{
        animationDuration: '2s',
        animationIterationCount: 'infinite',
        animationDelay,
      }}
    >
      {children}
    </div>
  );
};
