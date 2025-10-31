import React, { useState, useEffect } from 'react';
import { Cloud } from '../components/Cloud';
import { BackArrowIcon, SmilingMoonIcon, StarIcon } from '../components/icons';

interface Level4PageProps {
  ageGroup: string;
  onBack: () => void;
  onNextLevel: () => void;
}

const starData = [
    { id: 1, top: '20%', left: '15%', size: 'w-10 h-10', delay: '0s' },
    { id: 2, top: '40%', left: '30%', size: 'w-8 h-8', delay: '1s' },
    { id: 3, top: '15%', left: '50%', size: 'w-12 h-12', delay: '0.5s' },
    { id: 4, top: '30%', left: '75%', size: 'w-10 h-10', delay: '1.5s' },
    { id: 5, top: '55%', left: '60%', size: 'w-9 h-9', delay: '0.2s' },
    { id: 6, top: '60%', left: '20%', size: 'w-11 h-11', delay: '0.8s' },
    { id: 7, top: '75%', left: '80%', size: 'w-8 h-8', delay: '1.2s' },
];

const Level4Page: React.FC<Level4PageProps> = ({ ageGroup, onBack, onNextLevel }) => {
    const [tappedStars, setTappedStars] = useState<Set<number>>(new Set());
    const [activeStar, setActiveStar] = useState<number | null>(null);
    const [activeText, setActiveText] = useState<number | null>(null);
    const [allStarsTapped, setAllStarsTapped] = useState(false);

    useEffect(() => {
        if (tappedStars.size === starData.length && !allStarsTapped) {
            const timer = setTimeout(() => {
                setAllStarsTapped(true);
            }, 1000); // Wait a moment after the last star is tapped
            return () => clearTimeout(timer);
        }
    }, [tappedStars, allStarsTapped]);
    
    const handleStarTap = (starId: number) => {
        if (tappedStars.has(starId) || activeStar) return;

        setActiveStar(starId);
        setActiveText(starId);

        setTimeout(() => {
            const newTapped = new Set(tappedStars);
            newTapped.add(starId);
            setTappedStars(newTapped);
            setActiveStar(null);
        }, 800); // Duration of the glow pulse animation

        setTimeout(() => {
            setActiveText(null);
        }, 2000);
    };
    
    return(
        <div className="relative w-full h-full overflow-hidden bg-gradient-to-b from-blue-900 to-purple-900 select-none">
            {/* Background elements */}
            <SmilingMoonIcon className="absolute top-10 right-10 w-28 h-28 md:w-36 md:h-36 text-yellow-200 animate-moon-bob" />
            <Cloud top="15%" duration="120s" delay="0s" />
            <Cloud top="30%" duration="150s" delay="20s" />
            
            {/* Game elements */}
            <div className="absolute inset-0 z-10">
                {starData.map(star => {
                    const isTapped = tappedStars.has(star.id);
                    return (
                        <div key={star.id} className="absolute" style={{ top: star.top, left: star.left }}>
                             <button onClick={() => handleStarTap(star.id)} className="relative focus:outline-none">
                                <StarIcon 
                                    className={`
                                        ${star.size} transition-all duration-500
                                        ${isTapped ? 'text-yellow-200 opacity-80 [filter:drop-shadow(0_0_8px_#fef08a)]' : 'text-yellow-300 animate-twinkle'}
                                        ${activeStar === star.id ? 'animate-glow-pulse' : ''}
                                    `}
                                    style={{ animationDelay: isTapped ? '0s' : star.delay }}
                                />
                            </button>
                            {activeText === star.id && (
                                <p className="absolute -top-8 left-1/2 -translate-x-1/2 w-max text-2xl font-bold text-white animate-fade-in-bounce" style={{textShadow: '1px 1px 2px rgba(0,0,0,0.5)'}}>
                                    Good Night Star!
                                </p>
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Title */}
            <h1 className="absolute top-8 w-full text-center text-5xl md:text-6xl font-bold text-white drop-shadow-lg z-20" style={{textShadow: '3px 3px 0px rgba(0,0,0,0.2)'}}>
                Good Night Stars
            </h1>
            
            {/* Back Button */}
            <div className="absolute top-4 left-4 z-30">
                <button onClick={onBack} className="p-3 rounded-full bg-white/30 text-white hover:bg-white/50 transition-all transform hover:scale-110" aria-label="Go back to level selection">
                    <BackArrowIcon className="w-8 h-8" />
                </button>
            </div>
             
             {/* Bottom Navigation */}
             <div className="absolute bottom-4 w-full flex justify-center items-center space-x-6 z-30">
                <button onClick={onBack} className="px-6 py-3 text-2xl font-bold text-white transition-transform duration-200 ease-in-out transform hover:scale-105 active:scale-95 rounded-full shadow-xl bg-gradient-to-r from-gray-500 to-gray-600">
                    ⬅ Back to Levels
                </button>
                <button onClick={onNextLevel} className="px-6 py-3 text-2xl font-bold text-white transition-transform duration-200 ease-in-out transform hover:scale-105 active:scale-95 rounded-full shadow-xl bg-gradient-to-r from-green-500 to-blue-600">
                    Next Level ➡
                </button>
            </div>
            
            {/* Celebration Popup */}
            {allStarsTapped && (
                <div className="absolute inset-0 z-40 flex items-center justify-center animate-fade-in-bounce pointer-events-none" style={{animationDuration: '1s'}}>
                    <div className="p-6 text-center bg-white/20 rounded-3xl shadow-2xl backdrop-blur-sm">
                        <p className="text-3xl md:text-5xl font-bold text-white">
                            Shhh… All stars are sleeping! 🌙💤
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Level4Page;