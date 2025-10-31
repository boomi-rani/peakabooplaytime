import React, { useState } from 'react';
import { BackArrowIcon, SortingBasketIcon, AppleIcon, BananaIcon, CarrotIcon, BroccoliIcon, BreadIcon, CroissantIcon } from '../components/icons';

interface Level3_Age4to5_PageProps {
  ageGroup: string;
  onBack: () => void;
  onNextLevel: () => void;
}

const foodItems = [
  { id: 'apple', type: 'Fruits', Icon: AppleIcon, size: 'w-20 h-20' },
  { id: 'banana', type: 'Fruits', Icon: BananaIcon, size: 'w-24 h-24' },
  { id: 'carrot', type: 'Vegetables', Icon: CarrotIcon, size: 'w-20 h-20' },
  { id: 'broccoli', type: 'Vegetables', Icon: BroccoliIcon, size: 'w-24 h-24' },
  { id: 'bread', type: 'Grains', Icon: BreadIcon, size: 'w-24 h-24' },
  { id: 'croissant', type: 'Grains', Icon: CroissantIcon, size: 'w-24 h-24' },
];

const baskets = [
  { id: 'Fruits', label: '🍎 Fruits' },
  { id: 'Vegetables', label: '🥕 Vegetables' },
  { id: 'Grains', label: '🥖 Grains' },
];

const Level3_Age4to5_Page: React.FC<Level3_Age4to5_PageProps> = ({ ageGroup, onBack, onNextLevel }) => {
    const [sortedItems, setSortedItems] = useState<Set<string>>(new Set());
    const [wigglingBasket, setWigglingBasket] = useState<string | null>(null);
    const [swooshingItem, setSwooshingItem] = useState<string | null>(null);
    const [shakingItem, setShakingItem] = useState<string | null>(null);

    const handleDragStart = (e: React.DragEvent<HTMLDivElement>, foodId: string, foodType: string) => {
        e.dataTransfer.setData("foodId", foodId);
        e.dataTransfer.setData("foodType", foodType);
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>, basketId: string) => {
        e.preventDefault();
        const foodId = e.dataTransfer.getData("foodId");
        const foodType = e.dataTransfer.getData("foodType");

        if (foodType === basketId && !sortedItems.has(foodId)) {
            setSwooshingItem(foodId);
            setTimeout(() => {
                const newSorted = new Set(sortedItems);
                newSorted.add(foodId);
                setSortedItems(newSorted);
                setWigglingBasket(basketId);
                setSwooshingItem(null);
                setTimeout(() => setWigglingBasket(null), 300);
            }, 500);
        } else {
            setShakingItem(foodId);
            setTimeout(() => setShakingItem(null), 400);
        }
    };

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    const allSorted = sortedItems.size === foodItems.length;

    return (
        <div className="relative w-full h-full overflow-hidden bg-gradient-to-b from-amber-100 to-orange-200 select-none">
            {/* Back Button & Title */}
            <div className="absolute top-4 left-4 z-30">
                <button onClick={onBack} className="p-3 rounded-full bg-white/50 text-gray-700 hover:bg-white transition-all transform hover:scale-110" aria-label="Go back">
                    <BackArrowIcon className="w-8 h-8" />
                </button>
            </div>
            <h1 className="absolute top-8 w-full text-center text-5xl md:text-6xl font-bold text-orange-800 drop-shadow-lg z-20" style={{textShadow: '3px 3px 0px rgba(255,255,255,0.4)'}}>
                Food Sorting Fun
            </h1>

            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full pt-24 pb-24">
                {/* Baskets */}
                <div className="flex w-full justify-around items-center h-1/2">
                    {baskets.map(({ id, label }) => (
                        <div
                            key={id}
                            onDrop={(e) => handleDrop(e, id)}
                            onDragOver={handleDragOver}
                            className={`flex flex-col items-center ${wigglingBasket === id ? 'animate-wiggle-happy' : ''}`}
                        >
                            <SortingBasketIcon className="w-40 h-32 md:w-56 md:h-44" />
                            <p className="mt-2 text-2xl md:text-3xl font-bold text-amber-900">{label}</p>
                        </div>
                    ))}
                </div>

                {/* Draggable Food Items */}
                <div className="flex w-full justify-center flex-wrap items-center h-1/2 pt-8 gap-8">
                    {foodItems.map(({ id, type, Icon, size }) => {
                        const isSorted = sortedItems.has(id);
                        return (
                            <div
                                key={id}
                                draggable={!isSorted}
                                onDragStart={(e) => handleDragStart(e, id, type)}
                                className={`
                                    transition-opacity duration-500
                                    ${isSorted ? 'opacity-0' : 'opacity-100 cursor-grab active:cursor-grabbing'}
                                    ${swooshingItem === id ? 'animate-swoosh-in' : ''}
                                    ${shakingItem === id ? 'animate-shake-no' : ''}
                                `}
                            >
                                <Icon className={size} />
                            </div>
                        );
                    })}
                </div>
            </div>

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
            {allSorted && (
                <div className="absolute inset-0 z-40 flex items-center justify-center animate-fade-in-bounce pointer-events-none" style={{animationDuration: '1s'}}>
                    <div className="p-6 text-center bg-white/80 rounded-3xl shadow-2xl backdrop-blur-sm">
                        <p className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-green-600">
                            Yummy! You sorted all the food! 🍓🥕🍞
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Level3_Age4to5_Page;