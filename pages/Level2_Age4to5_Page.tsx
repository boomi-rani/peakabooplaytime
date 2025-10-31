import React, { useState } from 'react';
import { BackArrowIcon, FlowerPotIcon, CircleShapeIcon, SquareShapeIcon, TriangleShapeIcon, GardenFlowerIcon } from '../components/icons';

interface Level2_Age4to5_PageProps {
  ageGroup: string;
  onBack: () => void;
  onNextLevel: () => void;
}

const potData = [
  { id: 'circle', ShapeLabel: CircleShapeIcon },
  { id: 'square', ShapeLabel: SquareShapeIcon },
  { id: 'triangle', ShapeLabel: TriangleShapeIcon },
];

const shapeData = [
  { id: 'circle', Shape: CircleShapeIcon, color: 'text-red-400' },
  { id: 'square', Shape: SquareShapeIcon, color: 'text-blue-400' },
  { id: 'triangle', Shape: TriangleShapeIcon, color: 'text-yellow-400' },
];

const flowerColors = ['#F472B6', '#FBBF24', '#818CF8', '#F97316', '#A855F7'];

const bouquetPositions = [
    { top: '15%', left: '30%', size: 'w-32 h-32' },
    { top: '40%', left: '55%', size: 'w-28 h-28' },
    { top: '55%', left: '20%', size: 'w-36 h-36' },
    { top: '35%', left: '-5%', size: 'w-24 h-24' },
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

const Level2_Age4to5_Page: React.FC<Level2_Age4to5_PageProps> = ({ ageGroup, onBack, onNextLevel }) => {
    const [matchedPots, setMatchedPots] = useState<Set<string>>(new Set());
    const [bouncingPot, setBouncingPot] = useState<string | null>(null);
    const [centralFlowers, setCentralFlowers] = useState<{key: number, color: string}[]>([]);

    const handleDragStart = (e: React.DragEvent<HTMLDivElement>, shapeId: string) => {
        e.dataTransfer.setData("shapeId", shapeId);
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>, potId: string) => {
        e.preventDefault();
        const shapeId = e.dataTransfer.getData("shapeId");
        if (shapeId === potId && !matchedPots.has(potId)) {
            const newMatched = new Set(matchedPots);
            newMatched.add(potId);
            setMatchedPots(newMatched);
            
            setBouncingPot(potId);
            setTimeout(() => setBouncingPot(null), 1500);

            const flowerColor = flowerColors[newMatched.size - 1];
            const key = Date.now();
            setCentralFlowers(prev => [...prev, { key, color: flowerColor }]);
            setTimeout(() => {
                setCentralFlowers(prev => prev.filter(f => f.key !== key));
            }, 2500);
        }
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };
    
    const allMatched = matchedPots.size === potData.length;

    return (
        <div className="relative w-full h-full overflow-hidden bg-gradient-to-b from-emerald-200 to-lime-300 select-none">
            {/* Background */}
            <div className="absolute bottom-0 w-full h-1/4 bg-green-500" />
            <Flower className="absolute bottom-1/4 left-[5%]" size="w-12 h-12" color="text-pink-300" />
            <Flower className="absolute bottom-1/4 left-[85%]" size="w-20 h-20" color="text-yellow-200" />
            <Flower className="absolute bottom-[30%] left-[40%]" size="w-16 h-16" color="text-purple-300" />

            {/* Back Button */}
            <div className="absolute top-4 left-4 z-30">
                <button onClick={onBack} className="p-3 rounded-full bg-white/50 text-gray-700 hover:bg-white transition-all transform hover:scale-110" aria-label="Go back to level selection">
                    <BackArrowIcon className="w-8 h-8" />
                </button>
            </div>
            
            {/* Title */}
            <h1 className="absolute top-8 w-full text-center text-5xl md:text-6xl font-bold text-emerald-900 drop-shadow-lg z-20" style={{textShadow: '3px 3px 0px rgba(255,255,255,0.3)'}}>
                Shape Sort Garden 🌻
            </h1>

            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full pt-24 pb-24">
                {/* Flower Pots */}
                <div className="flex w-full justify-around items-end h-1/2">
                    {potData.map(({ id, ShapeLabel }) => (
                        <div
                            key={id}
                            onDrop={(e) => handleDrop(e, id)}
                            onDragOver={handleDragOver}
                            className={`relative ${bouncingPot === id ? 'animate-gentle-bounce' : ''}`}
                        >
                            <FlowerPotIcon className="w-40 h-40 md:w-56 md:h-56">
                                 <ShapeLabel className="w-full h-full text-white/50 p-2" />
                            </FlowerPotIcon>
                        </div>
                    ))}
                </div>

                {/* Draggable Shapes */}
                <div className="flex w-full justify-around items-center h-1/2 pt-8">
                    {shapeData.map(shape => {
                        const isMatched = matchedPots.has(shape.id);
                        return (
                            <div
                                key={shape.id}
                                draggable={!isMatched}
                                onDragStart={(e) => handleDragStart(e, shape.id)}
                                className={`w-28 h-28 md:w-32 md:h-32 p-4 drop-shadow-lg transition-opacity duration-500 ${shape.color} ${isMatched ? 'opacity-30 cursor-default' : 'cursor-grab active:cursor-grabbing'}`}
                            >
                                <shape.Shape className="w-full h-full"/>
                            </div>
                        );
                    })}
                </div>
            </div>
            
            {/* Central Flower Animation */}
            <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
                {centralFlowers.map(flower => (
                    <GardenFlowerIcon 
                        key={flower.key}
                        color={flower.color} 
                        className="absolute w-64 h-64 animate-[bloom-glow-sway-fade_2.5s_ease-in-out_forwards]"
                    />
                ))}
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
                <div className="absolute inset-0 z-40 flex flex-col items-center justify-center animate-fade-in-bounce pointer-events-none" style={{animationDuration: '1s'}}>
                     <div className="relative w-80 h-80">
                        {bouquetPositions.map((pos, i) => (
                            <GardenFlowerIcon
                                key={i}
                                color={flowerColors[i]}
                                className={`absolute ${pos.size} animate-bloom-in`}
                                style={{
                                    animationDelay: `${i * 0.15}s`,
                                    top: pos.top,
                                    left: pos.left,
                                }}
                            />
                        ))}
                    </div>
                    <div className="p-6 text-center bg-white/80 rounded-3xl shadow-2xl backdrop-blur-sm -mt-16">
                        <p className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-green-500">
                            Beautiful! You helped all the flowers bloom! 🌸✨
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Level2_Age4to5_Page;