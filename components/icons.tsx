import React from 'react';

interface IconProps {
    className?: string;
}

export const BackArrowIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path>
    </svg>
);

export const SmilingSunIcon: React.FC<IconProps & { colorClass?: string }> = ({ className, colorClass = "fill-[url(#sunGradient)]" }) => (
    <svg className={className} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <radialGradient id="sunGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" stopColor="#FFF7B3" />
                <stop offset="80%" stopColor="#FFDE03" />
                <stop offset="100%" stopColor="#F57C00" />
            </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="40" className={colorClass} style={{filter: 'drop-shadow(0px 4px 6px rgba(0,0,0,0.1))'}}/>
        
        {/* Rosy Cheeks */}
        <circle cx="32" cy="58" r="8" fill="#F48FB1" opacity="0.8"/>
        <circle cx="68" cy="58" r="8" fill="#F48FB1" opacity="0.8"/>

        {/* Happy Eyes (closed) */}
        <path d="M35 50 Q 40 58 45 50" stroke="#424242" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
        <path d="M65 50 Q 60 58 55 50" stroke="#424242" strokeWidth="3.5" fill="none" strokeLinecap="round"/>
        
        {/* Big Open Smile */}
        <path d="M40 68 Q 50 83 60 68" stroke="#424242" strokeWidth="3" fill="none" strokeLinecap="round"/>
    </svg>
);

export const SparkleIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 50 50" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M25,0 L32,18 L50,25 L32,32 L25,50 L18,32 L0,25 L18,18 Z" />
  </svg>
);

export const PuzzleIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M19,11h-2V9a1,1,0,0,0-2,0v2H13V9a1,1,0,0,0-2,0v2H9V9a1,1,0,0,0-2,0v2H5v2H7v2H5v2H7v2H9v-2h2v2h2v-2h2v2h2V17h-2V15h2V13h-2V11Zm-4,4H13V13h2Z"/>
    </svg>
);

export const UnicornIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="m16.82 13.9 1.48-1.48-2.3-2.3c-.2-.2-.2-.51 0-.71l2.83-2.83c.2-.2.51-.2.71 0l2.83 2.83c.2.2.2.51 0 .71l-2.83 2.83c-.2.2-.51.2-.71 0l-2.3-2.3-1.48 1.48c-1.33 1.33-3.54 1.33-4.88 0-1.33-1.33-1.33-3.54 0-4.88l1.06-1.06-2.12-2.12-2.47 2.47-2.12-2.12-1.06 1.06.35.35c.78.78.78 2.05 0 2.83l-1.41 1.41 2.12 2.12L6.1 14.9c-1.17 1.17-1.17 3.07 0 4.24l2.12 2.12 1.41-1.41-2.12-2.12 1.41-1.41c1.17-1.17 3.07-1.17 4.24 0l1.41 1.41-2.12 2.12 1.41 1.41 2.12-2.12 1.41 1.41c1.18 1.18 3.08 1.18 4.25 0l2.47-2.47-2.12-2.12-1.06 1.06-2.12-2.12 1.06-1.06z"/>
    </svg>
);

export const RocketIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.1,3.48,12,2,10.9,3.48A10,10,0,0,0,3.48,10.9L2,12,1.48,1.1A10,10,0,0,0,10.9,20.52L12,22,1.1-1.48A10,10,0,0,0,20.52,13.1L22,12l-1.48-1.1A10,10,0,0,0,13.1,3.48ZM7.13,15.44,12,12l3.44-1.57L12,7.13,8.56,8.56,7,12ZM12,18a6,6,0,1,1,6-6A6,6,0,0,1,12,18Z"/>
    </svg>
);

export const MusicNoteIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
    </svg>
);

export const PaletteIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-1.22-1.22-2-2.88-2-4.49s.78-3.27 2-4.49c.24-.27.39-.62.39-1.01C13.5 3.67 12.83 3 12 3zm-1.08 4.25c.29-.29.59-.56.9-.81-.31-.25-.61-.51-.9-.81-.29.29-.59.56-.9.81.31.25.61.51.9.81zm-1.84 1.84c.29-.29.59-.56.9-.81-.31-.25-.61-.51-.9-.81-.29.29-.59.56-.9.81.31.25.61.51.9.81zM12 19.5c-4.14 0-7.5-3.36-7.5-7.5S7.86 4.5 12 4.5c.64 0 1.25.08 1.84.23-.9.73-1.59 1.69-1.98 2.77H9v2h2.02c.06.33.1.66.1 1 0 .34-.04.67-.1 1H9v2h2.86c.39 1.08 1.08 2.04 1.98 2.77-.59.15-1.2.23-1.84.23z"/>
    </svg>
);

export const ElephantIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.5 14.5c0-2.8-2.2-5-5-5h-1v-2c0-1.1-.9-2-2-2h-3c-1.1 0-2 .9-2 2v2H6.5c-2.8 0-5 2.2-5 5V18h3.3c.4 1.7 2 3 3.7 3s3.3-1.3 3.7-3h2.6c.4 1.7 2 3 3.7 3s3.3-1.3 3.7-3H22v-3.5h-1.5zM9.5 7.5h4v2h-4v-2zm-3 10c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm8 0c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z"/>
    </svg>
);

export const RainbowIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 12A10 10 0 0 1 22 12" stroke="#EF5350" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M4.5 12A7.5 7.5 0 0 1 19.5 12" stroke="#FFCA28" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M7 12A5 5 0 0 1 17 12" stroke="#66BB6A" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M9.5 12A2.5 2.5 0 0 1 14.5 12" stroke="#42A5F5" strokeWidth="2.5" strokeLinecap="round"/>
    </svg>
);

export const TrainIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15H9v-5h2v5zm4 0h-2v-5h2v5zm-4-7H9V7h2v3zm4 0h-2V7h2v3z"/>
    </svg>
);


export const BabyIcon: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
        <g>
            {/* Body */}
            <path d="M 100,190 C 70,190 60,160 60,140 L 140,140 C 140,160 130,190 100,190 Z" fill="#81D4FA"/>
            {/* Head */}
            <circle cx="100" cy="80" r="55" fill="#FFECB3"/>
            {/* Hair */}
            <path d="M 100,25 C 90,15 80,25 85,40 Q 100,30 115,40 C 120,25 110,15 100,25 Z" fill="#A1887F"/>
            {/* Eyes */}
            <circle cx="80" cy="80" r="8" fill="#424242"/>
            <circle cx="120" cy="80" r="8" fill="#424242"/>
            {/* Blush */}
            <circle cx="70" cy="95" r="7" fill="#F48FB1" opacity="0.7"/>
            <circle cx="130" cy="95" r="7" fill="#F48FB1" opacity="0.7"/>
            {/* Mouth */}
            <path d="M 95,105 Q 100,115 105,105" stroke="#C2185B" strokeWidth="3" fill="none" strokeLinecap="round"/>
             {/* Hands */}
            <circle cx="55" cy="145" r="15" fill="#FFECB3"/>
            <circle cx="145" cy="145" r="15" fill="#FFECB3"/>
        </g>
    </svg>
);

export const BunnyIcon: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
        <g>
            <path d="M68,40 C68,25 78,20 78,10 L78,5 L70,5 C70,15 63,25 63,40Z" fill="#FCE4EC"/>
            <path d="M32,40 C32,25 22,20 22,10 L22,5 L30,5 C30,15 37,25 37,40Z" fill="#FCE4EC"/>
            <path d="M68,40 C68,25 78,20 78,10 L78,5 L70,5 C70,15 63,25 63,40Z" fill="#FFFFFF" transform="translate(-1, -1)"/>
            <path d="M32,40 C32,25 22,20 22,10 L22,5 L30,5 C30,15 37,25 37,40Z" fill="#FFFFFF" transform="translate(1, -1)"/>
            <circle cx="50" cy="65" r="30" fill="#FFFFFF"/>
            <circle cx="43" cy="60" r="5" fill="#212121"/>
            <circle cx="57" cy="60" r="5" fill="#212121"/>
            <circle cx="35" cy="70" r="5" fill="#F8BBD0"/>
            <circle cx="65" cy="70" r="5" fill="#F8BBD0"/>
            <path d="M48 72 Q50 75 52 72" stroke="#E91E63" strokeWidth="2" fill="none"/>
        </g>
    </svg>
);

export const BearIcon: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
        <g>
            <circle cx="25" cy="25" r="18" fill="#D2B48C"/>
            <circle cx="75" cy="25" r="18" fill="#D2B48C"/>
            <circle cx="50" cy="60" r="40" fill="#D2B48C"/>
            <circle cx="50" cy="72" r="22" fill="#F5DEB3"/>
            <circle cx="42" cy="55" r="6" fill="#424242"/>
            <circle cx="58" cy="55" r="6" fill="#424242"/>
            <circle cx="50" cy="70" r="6" fill="#424242"/>
            <path d="M45 80 Q50 85 55 80" stroke="#424242" strokeWidth="3" fill="none" strokeLinecap="round"/>
        </g>
    </svg>
);

export const KittenIcon: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 100 100" className={className} xmlns="http://www.w3.org/2000/svg">
        <g>
            <path d="M20 30 L10 10 L30 20 Z" fill="#E0E0E0" />
            <path d="M80 30 L90 10 L70 20 Z" fill="#E0E0E0" />
            <circle cx="50" cy="60" r="35" fill="#E0E0E0"/>
            <circle cx="40" cy="55" r="7" fill="#000000"/>
            <circle cx="60" cy="55" r="7" fill="#000000"/>
            <path d="M50 65 L48 70 L52 70 Z" fill="#FFCDD2"/>
            <path d="M30 65 L10 60 M30 70 L10 70 M30 75 L10 80" stroke="#BDBDBD" strokeWidth="2" strokeLinecap="round"/>
            <path d="M70 65 L90 60 M70 70 L90 70 M70 75 L90 80" stroke="#BDBDBD" strokeWidth="2" strokeLinecap="round"/>
        </g>
    </svg>
);

export const SmilingMoonIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <radialGradient id="moonGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FFFDE7"/>
                <stop offset="100%" stopColor="#FFF9C4"/>
            </radialGradient>
        </defs>
        <path
            d="M 50 0 A 50 50 0 1 0 50 100 A 40 40 0 1 1 50 0 Z"
            fill="url(#moonGradient)"
            style={{filter: 'drop-shadow(0px 0px 15px rgba(255,255,255,0.7))'}}
        />
        {/* Eye */}
        <circle cx="65" cy="35" r="4" fill="#616161" />
        {/* Smile */}
        <path d="M 60 50 Q 65 55 70 50" stroke="#616161" strokeWidth="2" fill="none" strokeLinecap="round"/>
    </svg>
);

export const ClappingBearIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">
        <g filter="drop-shadow(0px 5px 5px rgba(0,0,0,0.2))">
            {/* Body */}
            <circle cx="75" cy="100" r="45" fill="#A1887F"/>
            {/* Head */}
            <circle cx="75" cy="55" r="40" fill="#D2B48C"/>
            {/* Ears */}
            <circle cx="40" cy="25" r="15" fill="#A1887F"/>
            <circle cx="110" cy="25" r="15" fill="#A1887F"/>
            {/* Snout */}
            <ellipse cx="75" cy="65" rx="25" ry="20" fill="#F5DEB3"/>
            {/* Eyes */}
            <circle cx="60" cy="50" r="5" fill="#424242"/>
            <circle cx="90" cy="50" r="5" fill="#424242"/>
            {/* Nose */}
            <circle cx="75" cy="62" r="6" fill="#424242"/>
            {/* Mouth */}
            <path d="M70 72 Q 75 78 80 72" stroke="#424242" strokeWidth="2" fill="none" strokeLinecap="round"/>
            {/* Paws */}
            <circle cx="45" cy="90" r="20" fill="#D2B48C"/>
            <circle cx="105" cy="90" r="20" fill="#D2B48C"/>
        </g>
    </svg>
);

export const BushIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
        <g fill="#66BB6A">
            <circle cx="30" cy="50" r="25"/>
            <circle cx="50" cy="40" r="30"/>
            <circle cx="70" cy="50" r="25"/>
        </g>
        <g fill="#81C784">
            <circle cx="35" cy="50" r="15" />
            <circle cx="55" cy="45" r="20" />
            <circle cx="65" cy="50" r="15" />
        </g>
    </svg>
);

export const CuteElephantIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g fill="#B0BEC5">
            <circle cx="50" cy="50" r="40" />
            <path d="M 15 50 C -10 70, -10 90, 20 90 Q 25 70 30 50 Z" />
            <path d="M 85 50 C 110 70, 110 90, 80 90 Q 75 70 70 50 Z" />
            <rect x="40" y="70" width="20" height="30" rx="10" />
        </g>
        <circle cx="40" cy="45" r="5" fill="black" />
        <circle cx="60" cy="45" r="5" fill="black" />
        <path d="M45 55 Q 50 60 55 55" stroke="black" strokeWidth="2" fill="none" />
    </svg>
);

export const MonkeyIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g fill="#A1887F">
            <circle cx="50" cy="50" r="40"/>
            <circle cx="20" cy="40" r="15"/>
            <circle cx="80" cy="40" r="15"/>
        </g>
        <g fill="#D7CCC8">
            <path d="M50 30 C 70 30, 80 40, 80 60 C 80 80, 65 85, 50 85 C 35 85, 20 80, 20 60 C 20 40, 30 30, 50 30 Z" />
        </g>
        <circle cx="40" cy="50" r="6" fill="black" />
        <circle cx="60" cy="50" r="6" fill="black" />
        <path d="M45 65 Q 50 75 55 65" stroke="black" strokeWidth="3" fill="none" />
    </svg>
);

export const CuteLionIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g fill="#FFB74D">
            {[...Array(12)].map((_, i) => (
                 <circle key={i} cx="50" cy="50" r="45" transform={`rotate(${i * 30}, 50, 50) translate(30, 0) scale(0.6)`} />
            ))}
        </g>
        <circle cx="50" cy="50" r="30" fill="#FFD54F" />
        <circle cx="40" cy="45" r="5" fill="black" />
        <circle cx="60" cy="45" r="5" fill="black" />
        <path d="M50 55 L48 60 L52 60 Z" fill="#A1887F" />
        <path d="M45 65 Q 50 70 55 65" stroke="#A1887F" strokeWidth="2" fill="none" />
    </svg>
);

export const GiraffeIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 100 120" xmlns="http://www.w3.org/2000/svg">
        <g fill="#FFCA28">
            <rect x="40" y="0" width="20" height="60" rx="10" />
            <circle cx="50" cy="80" r="30" />
        </g>
        <g fill="#D2691E">
            <circle cx="45" cy="15" r="8" />
            <circle cx="60" cy="40" r="10" />
            <circle cx="40" cy="70" r="12" />
            <circle cx="65" cy="85" r="9" />
        </g>
        <circle cx="40" cy="75" r="4" fill="black" />
        <circle cx="60" cy="75" r="4" fill="black" />
        <path d="M45 90 Q 50 95 55 90" stroke="black" strokeWidth="2" fill="none"/>
        <path d="M45 5 L 45 -5 M 55 5 L 55 -5" stroke="#A1887F" strokeWidth="4" />
    </svg>
);

export const StarIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2l-2.81 6.63L2 9.24l5.46 4.73L5.82 21z" />
    </svg>
);

export const BalloonIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 100 150" xmlns="http://www.w3.org/2000/svg">
        <g>
            <path d="M50,0 C10,10 0,60 50,120 C100,60 90,10 50,0 Z" fill="currentColor"/>
            <path d="M45,120 L55,120 L50,150 Z" fill="currentColor" />
            <path d="M50,120 Q60,130 50,150" stroke="#000000" strokeOpacity="0.1" strokeWidth="1" fill="none" />
        </g>
    </svg>
);

export const TrainEngineIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 150 100" xmlns="http://www.w3.org/2000/svg">
        <g filter="drop-shadow(3px 3px 5px rgba(0,0,0,0.2))">
            {/* Cabin */}
            <rect x="60" y="10" width="60" height="50" fill="#42A5F5" rx="5" />
            <rect x="70" y="20" width="40" height="30" fill="#BBDEFB" />
            {/* Boiler */}
            <rect x="10" y="30" width="50" height="40" fill="#EF5350" rx="5" />
            {/* Smokestack */}
            <rect x="20" y="10" width="20" height="20" fill="#757575" />
            {/* Base */}
            <rect x="5" y="70" width="140" height="10" fill="#616161" />
            {/* Wheels */}
            <circle cx="30" cy="85" r="15" fill="#424242" />
            <circle cx="80" cy="85" r="15" fill="#424242" />
            <circle cx="120" cy="85" r="15" fill="#424242" />
            <circle cx="30" cy="85" r="8" fill="#9E9E9E" />
            <circle cx="80" cy="85" r="8" fill="#9E9E9E" />
            <circle cx="120" cy="85" r="8" fill="#9E9E9E" />
        </g>
    </svg>
);

export const TrainCarIcon: React.FC<IconProps & { color: string }> = ({ className, color }) => (
    <svg className={className} viewBox="0 0 120 100" xmlns="http://www.w3.org/2000/svg">
        <g filter="drop-shadow(3px 3px 5px rgba(0,0,0,0.2))">
            {/* Car body */}
            <rect x="10" y="20" width="100" height="50" fill={color} rx="5" />
            {/* Base */}
            <rect x="5" y="70" width="110" height="10" fill="#616161" />
            {/* Wheels */}
            <circle cx="35" cy="85" r="15" fill="#424242" />
            <circle cx="85" cy="85" r="15" fill="#424242" />
            <circle cx="35" cy="85" r="8" fill="#9E9E9E" />
            <circle cx="85" cy="85" r="8" fill="#9E9E9E" />
        </g>
    </svg>
);

export const SmokePuffIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g fill="#E0E0E0" opacity="0.8">
            <circle cx="50" cy="50" r="20" />
            <circle cx="35" cy="60" r="15" />
            <circle cx="65" cy="60" r="18" />
            <circle cx="50" cy="70" r="12" />
        </g>
    </svg>
);

export const FlowerPotIcon: React.FC<IconProps & { children?: React.ReactNode }> = ({ className, children }) => (
    <svg className={className} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g filter="drop-shadow(2px 2px 3px rgba(0,0,0,0.2))">
            <path d="M10 20 H90 L80 100 H20 Z" fill="#D2691E" />
            <rect x="5" y="10" width="90" height="15" rx="5" fill="#A0522D" />
            <foreignObject x="25" y="35" width="50" height="50">
                {children}
            </foreignObject>
        </g>
    </svg>
);

export const CircleShapeIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
        <circle cx="25" cy="25" r="24" fill="currentColor" stroke="#fff" strokeWidth="2"/>
    </svg>
);

export const SquareShapeIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="48" height="48" rx="5" fill="currentColor" stroke="#fff" strokeWidth="2"/>
    </svg>
);

export const TriangleShapeIcon: React.FC<IconProps> = ({ className }) => (
    <svg className={className} viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
        <path d="M25 1 L49 49 H1 Z" fill="currentColor" stroke="#fff" strokeWidth="2"/>
    </svg>
);

export const GardenFlowerIcon: React.FC<IconProps & { color: string }> = ({ className, color }) => (
    <svg className={className} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g>
            <circle cx="50" cy="50" r="15" fill="#FFEB3B"/>
            <path d="M50 65 L50 100" stroke="#66BB6A" strokeWidth="5"/>
            <circle cx="50" cy="28" r="18" fill={color}/>
            <circle cx="50" cy="72" r="18" fill={color}/>
            <circle cx="28" cy="50" r="18" fill={color}/>
            <circle cx="72" cy="50" r="18" fill={color}/>
        </g>
    </svg>
);

export const SortingBasketIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 20 L20 80 H80 L95 20 H5 Z" stroke="#A1887F" strokeWidth="4" fill="#D7CCC8" />
    <path d="M30 20 A 20 20 0 0 1 70 20" stroke="#A1887F" strokeWidth="4" fill="none" />
  </svg>
);

export const AppleIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="#F44336" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="60" r="35"/>
    <path d="M50 25 Q 60 10, 70 25" stroke="#6D4C41" strokeWidth="6" fill="none"/>
  </svg>
);

export const BananaIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="#FFEB3B" xmlns="http://www.w3.org/2000/svg">
    <path d="M30 70 Q 50 20, 80 60 Q 60 90, 30 70 Z"/>
  </svg>
);

export const CarrotIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="#FF9800" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 10 L30 90 L70 90 Z"/>
    <path d="M40 10 L50 0 L60 10" stroke="#4CAF50" strokeWidth="6" fill="none"/>
  </svg>
);

export const BroccoliIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <rect x="45" y="60" width="10" height="30" fill="#A5D6A7"/>
    <circle cx="50" cy="40" r="25" fill="#4CAF50"/>
    <circle cx="30" cy="50" r="20" fill="#66BB6A"/>
    <circle cx="70" cy="50" r="20" fill="#66BB6A"/>
  </svg>
);

export const BreadIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="#D2B48C" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 80 H 80 V 50 A 30 30 0 0 0 20 50 V 80 Z"/>
  </svg>
);

export const CroissantIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" fill="#D2B48C" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 70 Q 50 30, 80 70 Q 60 80, 50 60 Q 40 80, 20 70 Z"/>
  </svg>
);

export const CoralIcon: React.FC<IconProps & {color: string}> = ({ className, color }) => (
  <svg className={className} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g fill={color}>
      <path d="M50 100 V 30 Q 50 10, 70 10" stroke={color} strokeWidth="12" fill="none" strokeLinecap="round"/>
      <path d="M50 60 Q 30 60, 20 50" stroke={color} strokeWidth="10" fill="none" strokeLinecap="round"/>
      <path d="M50 40 Q 70 40, 80 50" stroke={color} strokeWidth="10" fill="none" strokeLinecap="round"/>
    </g>
  </svg>
);

export const FishIcon: React.FC<IconProps & {color: string}> = ({ className, color }) => (
  <svg className={className} viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg">
    <g fill={color}>
      <path d="M 0 25 Q 50 0, 80 25 Q 50 50, 0 25 Z" />
      <path d="M 80 25 L 100 10 L 100 40 Z" />
      <circle cx="20" cy="20" r="4" fill="black"/>
    </g>
  </svg>
);

export const OceanBubbleIcon: React.FC<IconProps> = ({ className }) => (
  <svg className={className} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="48" fill="currentColor" opacity="0.2" stroke="white" strokeWidth="3" strokeOpacity="0.5"/>
  </svg>
);