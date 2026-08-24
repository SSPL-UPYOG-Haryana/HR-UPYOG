import React from 'react';
import haryanaLogo from '../assets/Haryanalogo.jpeg';

interface HaryanaLogoProps {
  className?: string;
  size?: number;
}

export const HaryanaLogo: React.FC<HaryanaLogoProps> = ({
  className = 'w-10 h-10',
  size = 40,
}) => {
  return (
    <div
      className={`relative flex items-center justify-center flex-shrink-0 ${className}`}
    >
      <img
        src={haryanaLogo}
        alt="Government of Haryana Official Emblem"
        className="w-full h-full object-contain drop-shadow-xs"
        style={{
          width: size,
          height: 'auto',
          maxHeight: size * 1.25,
        }}
        loading="eager"
      />
    </div>
  );
};