import React, { useEffect, useRef } from 'react';
import { ClappingBearIcon, SparkleIcon } from '../components/icons';

const CongratulationsScreen: React.FC = () => {
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        audioRef.current?.play().catch(e => console.error("Audio play failed", e));
    }, []);

    return (
        <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm animate-fade-in-bounce" style={{animationDuration: '0.5s'}}>
            <audio ref={audioRef} src="https://cdn.pixabay.com/audio/2022/01/21/audio_eb21b86cec.mp3" preload="auto" />
            <div className="flex flex-col items-center justify-center p-8 bg-white rounded-3xl shadow-2xl">
                <div className="relative">
                    <ClappingBearIcon className="w-48 h-48 md:w-64 md:h-64 animate-clap" />
                    <SparkleIcon className="absolute top-0 left-0 w-8 h-8 text-yellow-300 animate-sparkle" style={{animationDelay: '0.2s'}} />
                    <SparkleIcon className="absolute bottom-0 right-0 w-10 h-10 text-pink-300 animate-sparkle" style={{animationDelay: '0.5s'}} />
                    <SparkleIcon className="absolute top-10 right-0 w-6 h-6 text-blue-300 animate-sparkle" style={{animationDelay: '0.8s'}} />
                </div>
                <p className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500 mt-4">
                    You did it!
                </p>
            </div>
        </div>
    );
};

export default CongratulationsScreen;