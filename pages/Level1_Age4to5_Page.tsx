import React, { useState } from 'react';
import { BackArrowIcon, TrainEngineIcon, TrainCarIcon, SmokePuffIcon } from '../components/icons';

interface Level1_Age4to5_PageProps {
  ageGroup: string;
  onBack: () => void;
  onNextLevel: () => void;
}

const trainData = [
  { id: 'red', color: '#EF5350', label: 'Red' },
  { id: 'blue', color: '#42A5F5', label: 'Blue' },
  { id: 'yellow', color: '#FFCA28', label: 'Yellow' },
  { id: 'green', color: '#66BB6A', label: 'Green' },
];

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

const Level1_Age4to5_Page: React.FC<Level1_Age4to5_PageProps> = ({ ageGroup, onBack, onNextLevel }) => {
    const [matchedCars, setMatchedCars] = useState<Set<string>>(new Set());
    const [wigglingCar, setWigglingCar] = useState<string | null>(null);

    const handleDragStart = (e: React.DragEvent<HTMLDivElement>, colorId: string) => {
        e.dataTransfer.setData("colorId", colorId);
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>, carId: string) => {
        e.preventDefault();
        const colorId = e.dataTransfer.getData("colorId");
        if (colorId === carId && !matchedCars.has(carId)) {
            const newMatched = new Set(matchedCars);
            newMatched.add(carId);
            setMatchedCars(newMatched);
            setWigglingCar(carId);
            setTimeout(() => setWigglingCar(null), 600); // Animation duration
        }
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    const allMatched = matchedCars.size === trainData.length;

    return (
        <div className="relative w-full h-full overflow-hidden bg-gradient-to-b from-emerald-300 to-lime-400 select-none">
            {/* Background */}
            <div className="absolute bottom-0 w-full h-1/4 bg-green-500" />
            <Flower className="absolute bottom-1/4 left-[10%]" size="w-16 h-16" color="text-pink-400" />
            <Flower className="absolute bottom-1/4 left-[80%]" size="w-24 h-24" color="text-yellow-300" />
            <Flower className="absolute bottom-1/4 left-[45%]" size="w-20 h-20" color="text-purple-400" />

            {/* Back Button */}
            <div className="absolute top-4 left-4 z-30">
                <button onClick={onBack} className="p-3 rounded-full bg-white/50 text-gray-700 hover:bg-white transition-all transform hover:scale-110" aria-label="Go back to level selection">
                    <BackArrowIcon className="w-8 h-8" />
                </button>
            </div>
            
            {/* Title */}
            <h1 className="absolute top-8 w-full text-center text-5xl md:text-6xl font-bold text-emerald-900 drop-shadow-lg z-20" style={{textShadow: '3px 3px 0px rgba(255,255,255,0.3)'}}>
                Color Match Train
            </h1>

            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full space-y-16">
                {/* Train Track */}
                <div className="absolute w-full h-2 bg-gray-600" style={{top: '48%'}}/>
                <div className="absolute w-full flex justify-around" style={{top: '49%'}}>
                    {[...Array(20)].map((_, i) => <div key={i} className="w-2 h-4 bg-yellow-800" />)}
                </div>

                {/* Train */}
                <div className="flex items-end transition-transform duration-1000" style={{ transform: `translateX(${matchedCars.size * 20}px)` }}>
                    <div className="relative">
                        <TrainEngineIcon className="w-40 h-28" />
                        {wigglingCar && <SmokePuffIcon className="absolute -top-12 left-5 w-16 h-16 animate-puff-smoke" />}
                    </div>
                    {trainData.map(car => (
                        <div
                            key={car.id}
                            onDrop={(e) => handleDrop(e, car.id)}
                            onDragOver={handleDragOver}
                            className={`relative ml-[-20px] ${wigglingCar === car.id ? 'animate-wiggle-happy' : ''}`}
                        >
                            <TrainCarIcon className="w-32 h-28" color={car.color} />
                            {matchedCars.has(car.id) && (
                                 <div className="absolute inset-0 flex items-center justify-center text-white text-5xl font-bold">✓</div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Draggable Blocks */}
                <div className="flex space-x-8">
                    {trainData.map(block => {
                        const isMatched = matchedCars.has(block.id);
                        return (
                            <div
                                key={block.id}
                                draggable={!isMatched}
                                onDragStart={(e) => handleDragStart(e, block.id)}
                                className={`w-24 h-24 rounded-lg shadow-lg flex items-center justify-center text-white text-2xl font-bold transition-opacity duration-500 ${isMatched ? 'opacity-30 cursor-default' : 'cursor-grab active:cursor-grabbing'}`}
                                style={{ backgroundColor: block.color }}
                            >
                                {block.label}
                            </div>
                        );
                    })}
                </div>
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
            {allMatched && (
                <div className="absolute inset-0 z-40 flex items-center justify-center animate-fade-in-bounce pointer-events-none" style={{animationDuration: '1s'}}>
                    <div className="p-6 text-center bg-white/80 rounded-3xl shadow-2xl backdrop-blur-sm">
                        <p className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-600">
                            Choo Choo! You matched all the colors! 🚂🎨
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Level1_Age4to5_Page;