import React, { useState, useEffect } from 'react';
import { Cloud } from '../components/Cloud';
import { BackArrowIcon, BushIcon, CuteElephantIcon, MonkeyIcon, BunnyIcon, CuteLionIcon, GiraffeIcon } from '../components/icons';

interface Level3PageProps {
  ageGroup: string;
  onBack: () => void;
  onNextLevel: () => void;
}

const animals = [
  { id: 'elephant', name: 'Elephant!', Icon: CuteElephantIcon, position: { top: '55%', left: '10%' }, size: 'w-24 h-24' },
  { id: 'monkey', name: 'Monkey!', Icon: MonkeyIcon, position: { top: '40%', left: '30%' }, size: 'w-20 h-20' },
  { id: 'rabbit', name: 'Rabbit!', Icon: BunnyIcon, position: { top: '60%', left: '45%' }, size: 'w-20 h-20' },
  { id: 'lion', name: 'Lion!', Icon: CuteLionIcon, position: { top: '35%', left: '60%' }, size: 'w-24 h-24' },
  { id: 'giraffe', name: 'Giraffe!', Icon: GiraffeIcon, position: { top: '50%', left: '75%' }, size: 'w-24 h-28' },
];

const Level3Page: React.FC<Level3PageProps> = ({ ageGroup, onBack, onNextLevel }) => {
    const [revealedAnimals, setRevealedAnimals] = useState<Set<string>>(new Set());
    const [shakingBush, setShakingBush] = useState<string | null>(null);
    const [visibleName, setVisibleName] = useState<string | null>(null);
    const [allAnimalsFound, setAllAnimalsFound] = useState(false);

    useEffect(() => {
        if (revealedAnimals.size === animals.length && !allAnimalsFound) {
            // Wait for the last animal's name animation to finish before showing the celebration
            const timer = setTimeout(() => {
                setAllAnimalsFound(true);
            }, 2500);
            return () => clearTimeout(timer);
        }
    }, [revealedAnimals, allAnimalsFound]);

    const handleBushClick = (animalId: string, animalName: string) => {
        if (revealedAnimals.has(animalId) || allAnimalsFound) return;

        // Shake the bush
        setShakingBush(animalId);
        setTimeout(() => setShakingBush(null), 500);

        // After a short delay, reveal the animal and its name
        setTimeout(() => {
            const newRevealed = new Set(revealedAnimals);
            newRevealed.add(animalId);
            setRevealedAnimals(newRevealed);
            
            setVisibleName(animalName);
            setTimeout(() => setVisibleName(null), 2000);
        }, 250);
    };

    return (
        <div className="relative w-full h-full overflow-hidden bg-gradient-to-b from-sky-300 to-emerald-300 select-none">
            {/* Background Sky & Clouds */}
            <div className="absolute top-0 left-0 w-full h-2/3">
                <Cloud top="10%" duration="90s" delay="0s" />
                <Cloud top="25%" duration="120s" delay="30s" />
            </div>

            {/* Grassy Field */}
            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-green-400" />
            <div className="absolute bottom-0 left-0 w-full h-1/4 bg-green-500 rounded-t-full" />
            
             {/* Back Button */}
             <div className="absolute top-4 left-4 z-30">
                <button onClick={onBack} className="p-3 rounded-full bg-white/50 text-gray-700 hover:bg-white transition-all transform hover:scale-110" aria-label="Go back to level selection">
                    <BackArrowIcon className="w-8 h-8" />
                </button>
            </div>
             
             {/* Bottom Navigation */}
             <div className="absolute bottom-4 w-full flex justify-center items-center space-x-6 z-30">
                <button onClick={onBack} className="px-6 py-3 text-2xl font-bold text-white transition-transform duration-200 ease-in-out transform hover:scale-105 active:scale-95 rounded-full shadow-xl bg-gradient-to-r from-gray-400 to-gray-500">
                    ⬅ Back to Levels
                </button>
                <button onClick={onNextLevel} className="px-6 py-3 text-2xl font-bold text-white transition-transform duration-200 ease-in-out transform hover:scale-105 active:scale-95 rounded-full shadow-xl bg-gradient-to-r from-green-400 to-blue-500">
                    Next Level ➡
                </button>
            </div>

            {/* Title */}
             <h1 className="absolute top-16 md:top-8 w-full text-center text-4xl md:text-6xl font-bold text-white drop-shadow-lg" style={{textShadow: '3px 3px 0px rgba(0,0,0,0.2)'}}>
                Animals Behind the Bushes
             </h1>

            {/* Game elements */}
            <div className="absolute inset-0 z-20">
                {animals.map(({ id, name, Icon, position, size }) => {
                    const isRevealed = revealedAnimals.has(id);
                    return (
                        <div key={id} className="absolute" style={{ ...position, transform: 'translate(-50%, -50%)' }}>
                            {/* Animal */}
                            <div className={`transition-transform duration-500 ease-in-out ${isRevealed ? 'translate-y-[-60px] scale-100' : 'translate-y-0 scale-0'}`}>
                                <Icon className={size} />
                                 {/* Animal Name */}
                                {isRevealed && visibleName === name && (
                                    <p className="absolute -top-10 left-1/2 -translate-x-1/2 w-max text-3xl font-bold text-white animate-fade-in-bounce" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.3)'}}>
                                        {name}
                                    </p>
                                )}
                            </div>

                            {/* Bush */}
                            <button
                                onClick={() => handleBushClick(id, name)}
                                className={`absolute bottom-0 left-1/2 -translate-x-1/2 transition-opacity duration-300
                                           ${isRevealed ? 'opacity-0 pointer-events-none' : 'opacity-100'}
                                           ${shakingBush === id ? 'animate-shake' : ''}`}
                                style={{ transformOrigin: 'bottom center' }}
                            >
                                <BushIcon className="w-32 h-24 md:w-40 md:h-32" />
                            </button>
                        </div>
                    );
                })}
            </div>
            
             {/* Celebration Popup */}
            {allAnimalsFound && (
                <div className="absolute inset-0 z-40 flex items-center justify-center animate-fade-in-bounce pointer-events-none" style={{animationDuration: '0.5s'}}>
                    <div className="p-6 text-center bg-white/80 rounded-3xl shadow-2xl backdrop-blur-sm">
                        <p className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                            Yay! You found all the animals! 🐾
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Level3Page;