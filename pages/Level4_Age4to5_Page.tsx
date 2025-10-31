import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { BackArrowIcon, CoralIcon, FishIcon, OceanBubbleIcon, SparkleIcon } from '../components/icons';

interface Level4_Age4to5_PageProps {
  ageGroup: string;
  onBack: () => void;
  onNextLevel: () => void;
}

interface Bubble {
  id: number;
  letter: string;
  x: number;
  size: number;
  speed: number;
  y: number;
}

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const MAX_BUBBLES = 4; // Reduced from 15 to make it calmer

const Level4_Age4to5_Page: React.FC<Level4_Age4to5_PageProps> = ({ ageGroup, onBack, onNextLevel }) => {
    const [bubbles, setBubbles] = useState<Bubble[]>([]);
    const [poppedLetters, setPoppedLetters] = useState<Set<string>>(new Set());
    const [activeLetter, setActiveLetter] = useState<string | null>(null);
    const [popEffects, setPopEffects] = useState<{id: number, x: number, y: number}[]>([]);

    const lettersToFind = useMemo(() => new Set(ALPHABET), []);
    const [availableLetters, setAvailableLetters] = useState([...ALPHABET]);
    
    const createBubble = useCallback(() => {
        const lettersInPlay = new Set(bubbles.map(b => b.letter));
        let available = ALPHABET.filter(l => !poppedLetters.has(l) && !lettersInPlay.has(l));
        
        if (available.length === 0) {
            // Fallback if all available letters are somehow already on screen
            available = ALPHABET.filter(l => !poppedLetters.has(l));
        }
        
        const letter = available.length > 0 ? available[Math.floor(Math.random() * available.length)] : '';
        
        if (!letter) return null;

        return {
            id: Date.now() + Math.random(),
            letter,
            x: Math.random() * 90, // %
            size: 80 + Math.random() * 60, // px
            speed: 0.5 + Math.random() * 0.5,
            y: 110, // Start below screen
        };
    }, [bubbles, poppedLetters]);
    
    useEffect(() => {
        // This effect runs only once on mount to initialize the bubbles.
        const letters = [...ALPHABET];
        const initialBubblesData: Bubble[] = [];
        const usedLetters: Set<string> = new Set();

        for (let i = 0; i < MAX_BUBBLES; i++) {
            if (letters.length === 0) break;
            const letterIndex = Math.floor(Math.random() * letters.length);
            const letter = letters.splice(letterIndex, 1)[0];
            usedLetters.add(letter);
            initialBubblesData.push({
                id: Date.now() + Math.random() + i,
                letter,
                x: Math.random() * 90,
                size: 80 + Math.random() * 60,
                speed: 0.5 + Math.random() * 0.5,
                y: 110 + Math.random() * 50, // Stagger start
            });
        }

        setBubbles(initialBubblesData);
    }, []); // Empty array ensures this runs only once.

    useEffect(() => {
        const gameLoop = setInterval(() => {
            setBubbles(currentBubbles => {
                const newBubbles = currentBubbles.map(b => ({ ...b, y: b.y - b.speed * 0.1 })).filter(b => b.y > -20); // Reduced speed multiplier
                
                if (newBubbles.length < MAX_BUBBLES && (lettersToFind.size - poppedLetters.size) > 0) {
                    const newBubble = createBubble();
                    if (newBubble) {
                        newBubbles.push(newBubble);
                    }
                }
                return newBubbles;
            });
        }, 16); // ~60fps
        return () => clearInterval(gameLoop);
    }, [createBubble, poppedLetters.size, lettersToFind.size]);

    const handleBubbleTap = (bubble: Bubble) => {
        if (activeLetter) return;

        setActiveLetter(bubble.letter);
        setPoppedLetters(prev => new Set(prev).add(bubble.letter));

        // Add pop effect
        const popId = Date.now();
        setPopEffects(prev => [...prev, { id: popId, x: bubble.x, y: bubble.y }]);
        setTimeout(() => setPopEffects(prev => prev.filter(p => p.id !== popId)), 400);

        setBubbles(prev => prev.filter(b => b.id !== bubble.id));

        setTimeout(() => setActiveLetter(null), 1000);
    };
    
    const allLettersFound = poppedLetters.size === ALPHABET.length;

    return (
        <div className="relative w-full h-full overflow-hidden bg-gradient-to-b from-teal-200 to-cyan-400 select-none">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-16 bg-cyan-300/50 animate-wave-motion" style={{ transformOrigin: 'bottom' }}/>
            <CoralIcon className="absolute bottom-0 left-0 w-48 h-48" color="#FF8A80"/>
            <CoralIcon className="absolute bottom-0 right-[-20px] w-64 h-64 transform scale-x-[-1]" color="#EA80FC"/>
            <FishIcon className="absolute top-[30%] w-24 h-12 animate-fish-swim" color="#FFC107" style={{animationDuration: '20s', animationDelay: '2s'}}/>
            <FishIcon className="absolute top-[60%] w-16 h-8 animate-fish-swim" color="#80D8FF" style={{animationDuration: '15s', animationDelay: '8s', transform: 'scaleX(-1)'}}/>

            {/* Title & Back Button */}
            <div className="absolute top-4 left-4 z-30">
                <button onClick={onBack} className="p-3 rounded-full bg-white/30 text-white hover:bg-white/50 transition-all transform hover:scale-110">
                    <BackArrowIcon className="w-8 h-8" />
                </button>
            </div>
            <h1 className="absolute top-8 w-full text-center text-5xl md:text-6xl font-bold text-white drop-shadow-lg z-20" style={{textShadow: '3px 3px 0px rgba(0,0,0,0.2)'}}>
                Alphabet Bubbles 🔤
            </h1>

            {/* Bubbles */}
            <div className="absolute inset-0 z-10">
                {bubbles.map(bubble => (
                    <button
                        key={bubble.id}
                        className="absolute flex items-center justify-center"
                        style={{
                            left: `${bubble.x}%`,
                            width: `${bubble.size}px`,
                            height: `${bubble.size}px`,
                            top: `${bubble.y}%`
                        }}
                        onClick={() => handleBubbleTap(bubble)}
                    >
                        <OceanBubbleIcon className="w-full h-full text-white"/>
                        <span className="absolute text-white font-bold" style={{fontSize: `${bubble.size * 0.5}px`}}>
                            {bubble.letter}
                        </span>
                    </button>
                ))}
            </div>

            {/* Pop Effects */}
            {popEffects.map(p => (
                <SparkleIcon key={p.id} className="absolute text-yellow-200 w-32 h-32 animate-pop-sparkle" style={{ left: `${p.x}%`, top: `${p.y}%`, transform: 'translate(-50%, -50%)' }} />
            ))}

            {/* Active Letter Display */}
            {activeLetter && (
                <div className="absolute inset-0 z-40 flex items-center justify-center pointer-events-none">
                    <p className="text-9xl text-white font-bold animate-fade-in-bounce" style={{textShadow: '5px 5px 10px rgba(0,0,0,0.3)'}}>
                        {activeLetter}
                    </p>
                </div>
            )}
            
            {/* Bottom Navigation */}
            <div className="absolute bottom-4 w-full flex justify-center items-center space-x-6 z-30">
                <button onClick={onBack} className="px-6 py-3 text-2xl font-bold text-white rounded-full shadow-xl bg-gradient-to-r from-gray-500 to-gray-600 hover:scale-105 active:scale-95 transition-transform">
                    ⬅ Back to Levels
                </button>
                <button onClick={onNextLevel} className="px-6 py-3 text-2xl font-bold text-white rounded-full shadow-xl bg-gradient-to-r from-green-500 to-blue-600 hover:scale-105 active:scale-95 transition-transform">
                    Next Level ➡
                </button>
            </div>

             {/* Celebration */}
            {allLettersFound && (
                <div className="absolute inset-0 z-40 flex items-center justify-center animate-fade-in-bounce pointer-events-none" style={{animationDuration: '1s'}}>
                    <div className="p-6 text-center bg-white/80 rounded-3xl shadow-2xl backdrop-blur-sm">
                        <p className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-600">
                            Wow! You found all the letters! ✨
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Level4_Age4to5_Page;