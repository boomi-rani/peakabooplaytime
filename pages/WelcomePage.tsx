import React, { useRef } from 'react';
import { Cloud } from '../components/Cloud';
import { BouncingAnimal } from '../components/BouncingAnimal';
import { KittenIcon, BunnyIcon, BearIcon, BabyIcon } from '../components/icons';

interface WelcomePageProps {
  onStartGame: () => void;
}

const WelcomePage: React.FC<WelcomePageProps> = ({ onStartGame }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const clouds = [
    { id: 1, top: '10%', duration: '50s', delay: '0s' },
    { id: 2, top: '25%', duration: '70s', delay: '15s' },
    { id: 3, top: '15%', duration: '60s', delay: '35s' },
    { id: 4, top: '35%', duration: '80s', delay: '50s' },
  ];

  const handleButtonClick = () => {
    audioRef.current?.play().catch(e => console.error("Audio play failed:", e));
    setTimeout(onStartGame, 300); // Delay to allow sound to play
  };

  return (
    <div className="relative w-full h-full overflow-hidden bg-gradient-to-b from-sky-400 to-sky-600 select-none">
      <audio ref={audioRef} src="https://cdn.pixabay.com/audio/2022/04/19/audio_d051f62130.mp3" preload="auto" />
      {/* Clouds Layer */}
      {clouds.map(cloud => (
        <Cloud key={cloud.id} top={cloud.top} duration={cloud.duration} delay={cloud.delay} />
      ))}
      
      {/* Main Content Layer */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold drop-shadow-lg text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-400" style={{ textShadow: '4px 4px 0px rgba(0,0,0,0.1)' }}>
          🎉 Welcome to Baby Play World! 🎨
        </h1>
        <button
          onClick={handleButtonClick}
          className="mt-12 px-10 py-5 text-3xl md:text-4xl font-bold text-white transition-transform duration-200 ease-in-out transform hover:scale-105 active:scale-95 rounded-full shadow-2xl bg-gradient-to-r from-green-400 to-blue-500 animate-pulse hover:animate-none focus:outline-none focus:ring-4 focus:ring-green-300"
        >
          Start Game
        </button>
      </div>

      {/* Ground and Characters Layer */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 z-10">
         {/* Ground */}
         <div className="absolute bottom-0 w-full h-3/4 bg-green-400 rounded-t-full" />
         <div className="absolute bottom-0 w-full h-1/2 bg-green-500 rounded-t-full" />
         
         {/* Characters */}
         <div className="absolute bottom-0 w-full h-full flex items-end">
            {/* Baby on the left */}
            <div className="w-1/3 flex justify-center items-end h-full pb-5">
              <BouncingAnimal animationDelay="0.1s">
                <BabyIcon 
                  className="w-full max-w-[250px] md:max-w-[300px] object-contain [filter:drop-shadow(0_5px_15px_rgba(0,0,0,0.3))]" 
                />
              </BouncingAnimal>
            </div>

            {/* Animals on the right */}
            <div className="w-2/3 flex justify-around items-end h-full">
              <BouncingAnimal animationDelay="0s">
                  <BunnyIcon className="w-20 h-20 md:w-28 md:h-28"/>
              </BouncingAnimal>
              <BouncingAnimal animationDelay="0.5s">
                  <BearIcon className="w-24 h-24 md:w-36 md:h-36"/>
              </BouncingAnimal>
              <BouncingAnimal animationDelay="0.2s">
                  <KittenIcon className="w-20 h-20 md:w-28 md:h-28"/>
              </BouncingAnimal>
            </div>
         </div>
      </div>
    </div>
  );
};

export default WelcomePage;