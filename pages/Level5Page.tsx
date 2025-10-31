import React, { useState, useEffect } from 'react';
import { Cloud } from '../components/Cloud';
import { BackArrowIcon, BalloonIcon } from '../components/icons';

interface Level5PageProps {
  ageGroup: string;
  onBack: () => void;
  onCongratulations: () => void;
}

const balloonsData = [
    { id: 'red', color: 'text-red-400', label: 'Red Balloon!', position: { top: '15%', left: '15%' }, size: 'w-24 h-36' },
    { id: 'blue', color: 'text-blue-400', label: 'Blue Balloon!', position: { top: '30%', left: '70%' }, size: 'w-28 h-40' },
    { id: 'yellow', color: 'text-yellow-300', label: 'Yellow Balloon!', position: { top: '45%', left: '20%' }, size: 'w-20 h-32' },
    { id: 'green', color: 'text-green-400', label: 'Green Balloon!', position: { top: '10%', left: '50%' }, size: 'w-24 h-36' },
    { id: 'pink', color: 'text-pink-400', label: 'Pink Balloon!', position: { top: '50%', left: '80%' }, size: 'w-20 h-32' },
    { id: 'purple', color: 'text-purple-400', label: 'Purple Balloon!', position: { top: '60%', left: '40%' }, size: 'w-28 h-40' },
];

interface ConfettiParticle {
    id: number;
    color: string;
    x: number;
    y: number;
    angle: number;
    distance: number;
}

const Level5Page: React.FC<Level5PageProps> = ({ ageGroup, onBack, onCongratulations }) => {
    const [poppedBalloons, setPoppedBalloons] = useState<Set<string>>(new Set());
    const [activeBalloon, setActiveBalloon] = useState<string | null>(null);
    const [activeText, setActiveText] = useState<{ id: string, label: string } | null>(null);
    const [allBalloonsPopped, setAllBalloonsPopped] = useState(false);
    const [confetti, setConfetti] = useState<ConfettiParticle[]>([]);

    useEffect(() => {
        if (poppedBalloons.size === balloonsData.length && !allBalloonsPopped) {
            const timer = setTimeout(() => setAllBalloonsPopped(true), 1500);
            return () => clearTimeout(timer);
        }
    }, [poppedBalloons, allBalloonsPopped]);

    const createConfetti = (balloonId: string) => {
        const balloon = balloonsData.find(b => b.id === balloonId);
        if (!balloon) return;
        
        const newParticles: ConfettiParticle[] = Array.from({ length: 20 }).map((_, i) => ({
            id: Date.now() + i,
            color: balloon.color,
            x: 50,
            y: 50,
            angle: Math.random() * 360,
            distance: 50 + Math.random() * 50,
        }));
        setConfetti(prev => [...prev, ...newParticles]);
    };

    const handleBalloonTap = (balloonId: string, label: string) => {
        if (poppedBalloons.has(balloonId) || activeBalloon) return;

        setActiveBalloon(balloonId);

        setTimeout(() => {
            setActiveBalloon(null);
            const newPopped = new Set(poppedBalloons);
            newPopped.add(balloonId);
            setPoppedBalloons(newPopped);
            
            setActiveText({ id: balloonId, label });
            createConfetti(balloonId);

            setTimeout(() => setActiveText(null), 1000);
        }, 1000); // Grow duration
    };

    return (
        <div className="relative w-full h-full overflow-hidden bg-gradient-to-b from-sky-300 to-blue-400 select-none">
            {/* Background elements */}
            <Cloud top="10%" duration="100s" delay="0s" />
            <Cloud top="25%" duration="130s" delay="30s" />

            {/* Game Title */}
             <h1 className="absolute top-8 w-full text-center text-5xl md:text-6xl font-bold text-white drop-shadow-lg z-20" style={{textShadow: '3px 3px 0px rgba(0,0,0,0.2)'}}>
                Color Balloons Fun
            </h1>

            {/* Game elements */}
            <div className="absolute inset-0 z-10">
                {balloonsData.map(balloon => {
                    const isPopped = poppedBalloons.has(balloon.id);
                    const isActive = activeBalloon === balloon.id;
                    const balloonConfetti = confetti.filter(p => p.color === balloon.color);
                    
                    return (
                        <div key={balloon.id} className="absolute" style={{ ...balloon.position }}>
                            <button
                                onClick={() => handleBalloonTap(balloon.id, balloon.label)}
                                className={`relative focus:outline-none transition-transform duration-1000 ${isPopped ? 'opacity-0' : 'opacity-100'} ${isActive ? 'scale-125' : 'scale-100'}`}
                            >
                                <BalloonIcon className={`${balloon.size} ${balloon.color} animate-wiggle-float`} style={{animationDuration: `${6 + Math.random() * 4}s`}} />
                            </button>

                            {isPopped && balloonConfetti.length > 0 && (
                                <div className="absolute inset-0 pointer-events-none">
                                    {balloonConfetti.map(p => (
                                        <div
                                            key={p.id}
                                            className={`absolute w-3 h-3 ${p.color.replace('text', 'bg')} rounded-full animate-confetti-pop`}
                                            style={{
                                                top: '50%',
                                                left: '50%',
                                                '--angle': `${p.angle}deg`,
                                                '--distance': `${p.distance}px`,
                                            } as React.CSSProperties}
                                        />
                                    ))}
                                </div>
                            )}

                            {activeText?.id === balloon.id && (
                                <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-max text-3xl font-bold text-white animate-fade-in-bounce" style={{textShadow: '2px 2px 4px rgba(0,0,0,0.3)'}}>
                                    {activeText.label}
                                </p>
                            )}
                        </div>
                    );
                })}
            </div>

            {/* Back Button */}
            <div className="absolute top-4 left-4 z-30">
                <button onClick={onBack} className="p-3 rounded-full bg-white/50 text-gray-700 hover:bg-white transition-all transform hover:scale-110" aria-label="Go back to level selection">
                    <BackArrowIcon className="w-8 h-8" />
                </button>
            </div>
             
             {/* Bottom Navigation */}
             <div className="absolute bottom-4 w-full flex justify-center items-center space-x-6 z-30">
                <button onClick={onBack} className="px-6 py-3 text-2xl font-bold text-white transition-transform duration-200 ease-in-out transform hover:scale-105 active:scale-95 rounded-full shadow-xl bg-gradient-to-r from-gray-500 to-gray-600">
                    ⬅ Back to Levels
                </button>
                <button 
                    onClick={onCongratulations} 
                    disabled={!allBalloonsPopped}
                    className="px-6 py-3 text-2xl font-bold text-white transition-all duration-200 ease-in-out transform hover:scale-105 active:scale-95 rounded-full shadow-xl bg-gradient-to-r from-pink-500 to-yellow-500 disabled:from-gray-400 disabled:to-gray-500 disabled:opacity-50 disabled:cursor-not-allowed">
                    Congratulations!
                </button>
            </div>
            
            {/* Celebration Popup */}
            {allBalloonsPopped && (
                <div className="absolute inset-0 z-20 flex items-center justify-center animate-fade-in-bounce pointer-events-none" style={{animationDuration: '1s'}}>
                    <div className="p-6 text-center bg-white/20 rounded-3xl shadow-2xl backdrop-blur-sm">
                        <p className="text-3xl md:text-5xl font-bold text-white">
                            Yay! You popped all the balloons! 🎉
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Level5Page;