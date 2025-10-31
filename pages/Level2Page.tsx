import React, { useState, useEffect } from 'react';
import { SmilingSunIcon } from '../components/icons';

interface Level2PageProps {
  ageGroup: string;
  onBack: () => void;
  onNextLevel: () => void;
}

const colors = [
    { name: 'Red', bg: 'bg-red-400', text: 'text-red-800', fill: 'fill-red-400', hex: '#f87171' },
    { name: 'Blue', bg: 'bg-blue-400', text: 'text-blue-800', fill: 'fill-blue-400', hex: '#60a5fa' },
    { name: 'Yellow', bg: 'bg-yellow-400', text: 'text-yellow-800', fill: 'fill-yellow-400', hex: '#facc15' },
    { name: 'Green', bg: 'bg-green-400', text: 'text-green-800', fill: 'fill-green-400', hex: '#4ade80' },
    { name: 'Pink', bg: 'bg-pink-400', text: 'text-pink-800', fill: 'fill-pink-400', hex: '#f472b6' },
];

const Level2Page: React.FC<Level2PageProps> = ({ ageGroup, onBack, onNextLevel }) => {
    const [activeColor, setActiveColor] = useState<string | null>(null);
    const [sunColorClass, setSunColorClass] = useState<string>("fill-[url(#sunGradient)]");
    const [tappedColors, setTappedColors] = useState<Set<string>>(new Set());
    const [showCelebration, setShowCelebration] = useState(false);

    useEffect(() => {
        if (tappedColors.size === colors.length && !showCelebration) {
            const celebrationTimer = setTimeout(() => {
                setShowCelebration(true);
                const hideTimer = setTimeout(() => {
                    setShowCelebration(false);
                }, 2000); // Popup stays for 2 seconds
                return () => clearTimeout(hideTimer);
            }, 500);
            return () => clearTimeout(celebrationTimer);
        }
    }, [tappedColors, showCelebration]);

    const handleColorTap = (color: typeof colors[0]) => {
        if (activeColor) return; // Prevent clicking during flash
        setActiveColor(color.hex);
        setSunColorClass(color.fill);

        const newTappedColors = new Set(tappedColors);
        newTappedColors.add(color.name);
        setTappedColors(newTappedColors);

        setTimeout(() => {
            setActiveColor(null);
        }, 2000);
    };

    return (
        <div className="relative w-full h-full overflow-hidden bg-gradient-to-b from-blue-100 to-purple-200 select-none">
            {/* Bubbles */}
            {[...Array(15)].map((_, i) => (
                <div
                    key={i}
                    className="absolute bottom-[-150px] bg-blue-300/30 rounded-full animate-bubble-float"
                    style={{
                        left: `${Math.random() * 100}%`,
                        width: `${20 + Math.random() * 80}px`,
                        height: `${20 + Math.random() * 80}px`,
                        animationDuration: `${10 + Math.random() * 10}s`,
                        animationDelay: `${Math.random() * 5}s`,
                    }}
                />
            ))}

            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center justify-between h-full p-8">
                <SmilingSunIcon className={`w-32 h-32 md:w-40 md:h-40 transition-all duration-500 ${showCelebration ? 'animate-happy-dance' : ''}`} colorClass={sunColorClass} />

                <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
                    {colors.map(color => (
                        <button
                            key={color.name}
                            onClick={() => handleColorTap(color)}
                            className={`w-28 h-28 md:w-36 md:h-36 rounded-full text-white font-bold text-3xl shadow-lg transition-transform duration-200 ease-in-out transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-4 ring-white/70 ${color.bg}`}
                        >
                            {color.name}
                        </button>
                    ))}
                </div>

                <div className="flex items-center space-x-6">
                    <button onClick={onBack} className="px-6 py-3 text-2xl font-bold text-white transition-transform duration-200 ease-in-out transform hover:scale-105 active:scale-95 rounded-full shadow-xl bg-gradient-to-r from-gray-400 to-gray-500">
                        ⬅ Back to Levels
                    </button>
                    <button onClick={onNextLevel} className="px-6 py-3 text-2xl font-bold text-white transition-transform duration-200 ease-in-out transform hover:scale-105 active:scale-95 rounded-full shadow-xl bg-gradient-to-r from-green-400 to-blue-500">
                        Next Level ➡
                    </button>
                </div>
            </div>

            {/* Color Flash Overlay */}
            <div
                className="absolute inset-0 z-20 transition-opacity duration-500 pointer-events-none"
                style={{ backgroundColor: activeColor || 'transparent', opacity: activeColor ? 1 : 0 }}
            />

            {/* Celebration Popup */}
            {showCelebration && (
                <div className="absolute inset-0 z-30 flex items-center justify-center animate-fade-in-bounce pointer-events-none" style={{animationDuration: '0.5s'}}>
                    <div className="p-8 text-center bg-white rounded-3xl shadow-2xl pointer-events-auto">
                        <p className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500">
                            Yay! You found all the colors! 🎨
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Level2Page;