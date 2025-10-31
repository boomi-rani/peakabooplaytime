import React from 'react';
import { Cloud } from '../components/Cloud';
import { BackArrowIcon, BabyIcon, PuzzleIcon, UnicornIcon, RocketIcon, SmilingSunIcon, SparkleIcon } from '../components/icons';

interface AgeSelectionPageProps {
  onBack: () => void;
  onSelectAge: (ageGroup: string) => void;
}

const AgeSelectionPage: React.FC<AgeSelectionPageProps> = ({ onBack, onSelectAge }) => {
  const ageGroups = [
    { age: '2–3 Years', icon: <BabyIcon className="w-8 h-8 md:w-10 md:h-10" />, color: 'from-green-300 to-teal-300', ring: 'ring-green-200' },
    { age: '4–5 Years', icon: <PuzzleIcon className="w-8 h-8 md:w-10 md:h-10" />, color: 'from-pink-300 to-rose-300', ring: 'ring-pink-200' },
    { age: '5–7 Years', icon: <UnicornIcon className="w-8 h-8 md:w-10 md:h-10" />, color: 'from-blue-300 to-indigo-300', ring: 'ring-blue-200' },
    { age: '7+ Years', icon: <RocketIcon className="w-8 h-8 md:w-10 md:h-10" />, color: 'from-yellow-300 to-orange-300', ring: 'ring-yellow-200' },
  ];
  
  const sparkles = [
      { top: '15%', left: '10%', delay: '0s', size: 'w-4 h-4' },
      { top: '80%', left: '20%', delay: '1s', size: 'w-6 h-6' },
      { top: '50%', left: '85%', delay: '0.5s', size: 'w-5 h-5' },
      { top: '25%', left: '90%', delay: '1.5s', size: 'w-3 h-3' },
      { top: '60%', left: '5%', delay: '0.2s', size: 'w-5 h-5' },
  ]

  return (
    <div className="relative w-full h-full overflow-hidden bg-gradient-to-b from-rose-100 to-teal-100 select-none">
      {/* Background Elements */}
      <Cloud top="10%" duration="80s" delay="0s" />
      <Cloud top="20%" duration="100s" delay="25s" />
      <SmilingSunIcon className="absolute top-8 right-8 w-24 h-24 md:w-32 md:h-32 text-yellow-300 opacity-80 animate-pulse" />
      {sparkles.map((s, i) => (
          <SparkleIcon key={i} className={`absolute text-white animate-sparkle ${s.size}`} style={{ top: s.top, left: s.left, animationDelay: s.delay }}/>
      ))}

      {/* Back Button */}
      <button
        onClick={onBack}
        className="absolute top-4 left-4 z-30 p-3 rounded-full bg-white/50 text-gray-600 hover:bg-white transition-all transform hover:scale-110"
        aria-label="Go back"
      >
        <BackArrowIcon className="w-8 h-8" />
      </button>

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-700 drop-shadow-md mb-12" style={{ textShadow: '3px 3px 0px rgba(255,255,255,0.5)' }}>
          Choose Your Age
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {ageGroups.map(group => (
            <button
              key={group.age}
              onClick={() => onSelectAge(group.age)}
              className={`flex items-center justify-center space-x-4 w-64 md:w-80 p-5 rounded-full shadow-lg text-white font-bold text-2xl md:text-3xl bg-gradient-to-br ${group.color} transition-transform duration-200 ease-in-out transform hover:scale-110 hover:shadow-2xl active:scale-95 focus:outline-none focus:ring-4 ${group.ring}`}
            >
              <span>{group.age}</span>
              {group.icon}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AgeSelectionPage;
