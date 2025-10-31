import React, { useState, useEffect, useRef } from 'react';
import { Cloud } from '../components/Cloud';
import { BackArrowIcon, SmilingMoonIcon, ClappingBearIcon, SparkleIcon } from '../components/icons';

interface Level1PageProps {
  ageGroup: string;
  onBack: () => void;
  onNextLevel: () => void;
}

const rhymeLines = [
  "Twinkle, twinkle, little star,",
  "How I wonder what you are!",
  "Up above the world so high,",
  "Like a diamond in the sky.",
  "Twinkle, twinkle, little star,",
  "How I wonder what you are!"
];

// Timing for each line to appear, in milliseconds
const lineTimings = [0, 5000, 10000, 15000, 20000, 25000];
const rhymeDuration = 30000; // Total duration of the song part
const celebrationDelay = 2000; // Wait 2 seconds after the rhyme ends

const Level1Page: React.FC<Level1PageProps> = ({ ageGroup, onBack, onNextLevel }) => {
  const [currentLineIndex, setCurrentLineIndex] = useState(-1);
  const [rhymeFinished, setRhymeFinished] = useState(false);
  const musicAudioRef = useRef<HTMLAudioElement>(null);
  const yayAudioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Start music if not already playing
    musicAudioRef.current?.play().catch(e => console.error("Music play failed:", e));

    const timers: ReturnType<typeof setTimeout>[] = [];
    
    // Schedule timers to show each line
    lineTimings.forEach((time, index) => {
      timers.push(
        setTimeout(() => {
          setCurrentLineIndex(index);
        }, time)
      );
    });

    // Schedule timer for the end celebration
    timers.push(
      setTimeout(() => {
        setRhymeFinished(true);
        yayAudioRef.current?.play().catch(e => console.error("Yay sound failed:", e));
      }, rhymeDuration + celebrationDelay)
    );

    // Cleanup timers on component unmount
    return () => {
      timers.forEach(clearTimeout);
    };
  }, []);

  const theme = {
    bg: 'bg-gradient-to-b from-sky-200 to-rose-200',
    title: 'text-indigo-500',
    rhymeText: 'text-white'
  };

  return (
    <div className={`relative w-full h-full overflow-hidden select-none ${theme.bg}`}>
      <audio ref={musicAudioRef} src="https://cdn.pixabay.com/audio/2022/10/24/audio_a9d3cf5a2d.mp3" loop preload="auto" />
      <audio ref={yayAudioRef} src="https://cdn.pixabay.com/audio/2022/01/21/audio_eb21b86cec.mp3" preload="auto" />
      
      <div className="absolute inset-0 z-0">
        <Cloud top="15%" duration="90s" delay="0s" />
        <Cloud top="30%" duration="110s" delay="20s" />
        <SmilingMoonIcon className="absolute top-10 right-10 w-28 h-28 md:w-36 md:h-36 opacity-90 animate-moon-bob" />
        {[...Array(30)].map((_, i) => (
          <div key={i} className="absolute bg-white rounded-full animate-twinkle" style={{
            top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%`,
            width: `${Math.random() * 3 + 1}px`, height: `${Math.random() * 3 + 1}px`,
            animationDelay: `${Math.random() * 5}s`, animationDuration: `${3 + Math.random() * 3}s`
          }} />
        ))}
      </div>
      
      <button onClick={onBack} className="absolute top-4 left-4 z-30 p-3 rounded-full bg-white/50 text-gray-700 hover:bg-white transition-all transform hover:scale-110" aria-label="Go back to level selection">
        <BackArrowIcon className="w-8 h-8" />
      </button>

      <div className="relative z-10 flex flex-col items-center justify-start h-full text-center p-4 pt-16 md:pt-20">
        {!rhymeFinished ? (
          <>
            <h1 className={`text-5xl md:text-7xl font-bold drop-shadow-lg ${theme.title}`} style={{ textShadow: '3px 3px 0px rgba(255,255,255,0.4)' }}>
              Rhyme Sing-Along 🎵
            </h1>
            <div className="flex-grow flex flex-col justify-center items-center space-y-4 md:space-y-6 pb-16">
              {rhymeLines.map((line, index) => (
                <p 
                  key={index}
                  className={`text-4xl md:text-6xl font-bold drop-shadow-md ${theme.rhymeText} 
                             ${index > currentLineIndex ? 'opacity-0' : 'opacity-100'} 
                             ${index === currentLineIndex ? 'animate-fade-in-bounce' : ''}`}
                  style={{textShadow: '2px 2px 4px rgba(0,0,0,0.2)'}}
                >
                  {line}
                </p>
              ))}
            </div>
          </>
        ) : (
          <div className="flex-grow flex flex-col justify-center items-center animate-fade-in-bounce">
            <div className="relative">
                <ClappingBearIcon className="w-48 h-48 md:w-64 md:h-64 animate-clap" />
                <SparkleIcon className="absolute top-0 left-0 w-8 h-8 text-yellow-300 animate-sparkle" style={{animationDelay: '0.2s'}} />
                <SparkleIcon className="absolute bottom-0 right-0 w-10 h-10 text-pink-300 animate-sparkle" style={{animationDelay: '0.5s'}} />
                <SparkleIcon className="absolute top-10 right-0 w-6 h-6 text-blue-300 animate-sparkle" style={{animationDelay: '0.8s'}} />
            </div>
            <p className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg mt-4" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.3)'}}>
                Yay! You did it!
            </p>
            <div className="flex items-center space-x-6 mt-12">
                <button onClick={onBack} className="px-6 py-3 text-2xl font-bold text-white transition-transform duration-200 ease-in-out transform hover:scale-105 active:scale-95 rounded-full shadow-xl bg-gradient-to-r from-gray-400 to-gray-500">
                    🔙 Back to Levels
                </button>
                <button onClick={onNextLevel} className="px-6 py-3 text-2xl font-bold text-white transition-transform duration-200 ease-in-out transform hover:scale-105 active:scale-95 rounded-full shadow-xl bg-gradient-to-r from-green-400 to-blue-500">
                    Next Level ➡️
                </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Level1Page;