import React from 'react';
import { Cloud } from '../components/Cloud';
import { BackArrowIcon, MusicNoteIcon, PaletteIcon, ElephantIcon, RainbowIcon, TrainIcon } from '../components/icons';

interface LevelSelectionPageProps {
  ageGroup: string;
  onBack: () => void;
  onSelectLevel: (level: number) => void;
}

// Helper components for themes
const Flower: React.FC<{className?: string, size: string, color: string}> = ({className, size, color}) => (
    <div className={`${className} ${size} ${color}`}>
        <svg viewBox="0 0 100 100" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="15" fill="yellow"/>
            <circle cx="50" cy="25" r="15"/>
            <circle cx="50" cy="75" r="15"/>
            <circle cx="25" cy="50" r="15"/>
            <circle cx="75" cy="50" r="15"/>
        </svg>
    </div>
);

const Building: React.FC<{className?: string}> = ({className}) => (
    <div className={`relative ${className}`} style={{backgroundColor: 'currentColor'}}>
        {[...Array(12)].map((_, i) => (
            <div key={i} className="absolute bg-yellow-200" style={{
                width: '15%',
                height: '10%',
                top: `${10 + Math.floor(i/3)*20}%`,
                left: `${15 + (i%3) * 25}%`
            }} />
        ))}
    </div>
);

const themes: { [key: string]: { bg: string; title: string; element: React.ReactNode } } = {
  '2–3 Years': {
    bg: 'bg-gradient-to-b from-sky-300 to-blue-300',
    title: 'text-sky-800',
    element: (
        <>
            <Cloud top="10%" duration="80s" delay="0s" />
            <Cloud top="25%" duration="100s" delay="15s" />
            <Cloud top="40%" duration="70s" delay="30s" />
        </>
    )
  },
  '4–5 Years': {
    bg: 'bg-gradient-to-b from-emerald-300 to-lime-400',
    title: 'text-emerald-900',
    element: (
      <>
        <div className="absolute bottom-0 w-full h-1/4 bg-green-500" />
        <Flower className="absolute bottom-1/4 left-[10%]" size="w-16 h-16" color="text-pink-400" />
        <Flower className="absolute bottom-1/4 left-[80%]" size="w-24 h-24" color="text-yellow-300" />
        <Flower className="absolute bottom-1/4 left-[45%]" size="w-20 h-20" color="text-purple-400" />
      </>
    ),
  },
  '5–7 Years': {
    bg: 'bg-gradient-to-b from-slate-400 to-slate-600',
    title: 'text-slate-900',
    element: (
      <div className="absolute bottom-0 w-full h-1/2 flex items-end justify-around">
        <Building className="text-yellow-300 w-24 h-48" />
        <Building className="text-sky-300 w-32 h-64" />
        <Building className="text-rose-300 w-28 h-56" />
      </div>
    ),
  },
  '7+ Years': {
    bg: 'bg-gradient-to-b from-purple-800 to-indigo-900',
    title: 'text-indigo-200',
    element: (
      <>
        {[...Array(50)].map((_, i) => (
          <div key={i} className="absolute bg-white rounded-full animate-twinkle" style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 3}px`,
            height: `${Math.random() * 3}px`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 2}s`
          }} />
        ))}
      </>
    ),
  },
};

const levels = [
  { level: 1, icon: <MusicNoteIcon className="w-10 h-10 md:w-12 md:h-12" />, label: 'Level 1 🎵', color: 'bg-gradient-to-br from-red-400 to-rose-400' },
  { level: 2, icon: <PaletteIcon className="w-10 h-10 md:w-12 md:h-12" />, label: 'Level 2 🎨', color: 'bg-gradient-to-br from-orange-400 to-amber-400' },
  { level: 3, icon: <ElephantIcon className="w-10 h-10 md:w-12 md:h-12" />, label: 'Level 3 🐘', color: 'bg-gradient-to-br from-yellow-400 to-lime-400' },
  { level: 4, icon: <RainbowIcon className="w-10 h-10 md:w-12 md:h-12" />, label: 'Level 4 🌈', color: 'bg-gradient-to-br from-green-400 to-teal-400' },
  { level: 5, icon: <TrainIcon className="w-10 h-10 md:w-12 md:h-12" />, label: 'Level 5 🚂', color: 'bg-gradient-to-br from-blue-400 to-indigo-400' },
];

const LevelSelectionPage: React.FC<LevelSelectionPageProps> = ({ ageGroup, onBack, onSelectLevel }) => {
  const currentTheme = themes[ageGroup] || themes['2–3 Years'];
  const audioRef = React.useRef<HTMLAudioElement>(null);

  const handleLevelClick = (level: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(e => console.error("Audio play failed:", e));
    }
    // Delay navigation slightly to allow the sound to play and prevent race conditions
    setTimeout(() => {
        onSelectLevel(level);
    }, 150);
  };

  return (
    <div className={`relative w-full h-full overflow-hidden select-none ${currentTheme.bg}`}>
      <audio ref={audioRef} src="https://cdn.pixabay.com/audio/2022/03/10/audio_c3b4ed47e2.mp3" preload="auto" />
      
      {/* Background Theme */}
      {currentTheme.element}

      {/* Back Button */}
      <button
        onClick={onBack}
        className="absolute top-4 left-4 z-30 p-3 rounded-full bg-white/50 text-gray-700 hover:bg-white transition-all transform hover:scale-110"
        aria-label="Go back"
      >
        <BackArrowIcon className="w-8 h-8" />
      </button>

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className={`text-5xl md:text-7xl font-bold drop-shadow-lg mb-12 animate-gentle-bounce ${currentTheme.title}`} style={{ textShadow: '3px 3px 0px rgba(255,255,255,0.2)' }}>
          Choose Your Level!
        </h1>
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {levels.map(item => (
            <button
              key={item.level}
              onClick={() => handleLevelClick(item.level)}
              className={`flex flex-col items-center justify-center w-32 h-32 md:w-40 md:h-40 rounded-full text-white shadow-xl transition-transform duration-200 ease-in-out transform hover:scale-110 hover:shadow-2xl active:scale-95 focus:outline-none focus:ring-4 ring-white/50 ${item.color}`}
              aria-label={item.label}
            >
              {item.icon}
              <span className="mt-2 text-xl font-bold tracking-wider">{`Level ${item.level}`}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LevelSelectionPage;