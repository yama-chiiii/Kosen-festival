import React from 'react';

type IconKey = 'icon1' | 'icon2' | 'icon3' | 'icon4' | 'icon5' | 'icon6' | 'icon7' | 'icon8';

interface IconGridProps {
  handleClick: (icon: IconKey) => void;
  handleMouseEnter: (icon: IconKey, event: React.MouseEvent<HTMLImageElement>) => void;
  handleMouseLeave: () => void;
}

const IconGrid: React.FC<IconGridProps> = ({ handleClick, handleMouseEnter, handleMouseLeave }) => {
  const iconsTopRow: IconKey[] = ['icon1', 'icon2', 'icon3', 'icon4'];
  const iconsBottomRow: IconKey[] = ['icon5', 'icon6', 'icon7', 'icon8'];

  return (
    <div>
      <div className="flex flex-row justify-around mb-32 mt-12">
        
        {iconsTopRow.map((icon) => (
          <img
            key={icon}
            src={`/${icon}.png`}
            alt={icon}
            className='w-80 h-auto cursor-pointer bg-pink-200 p-5 rounded'
            onClick={() => handleClick(icon)}
            onMouseEnter={(e) => handleMouseEnter(icon, e)}
            onMouseLeave={handleMouseLeave}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around">
        {iconsBottomRow.map((icon) => (
          <img
            key={icon}
            src={`/${icon}.png`}
            alt={icon}
            className='w-auto h-80 cursor-pointer bg-pink-200 p-5 rounded'
            onClick={() => handleClick(icon)}
            onMouseEnter={(e) => handleMouseEnter(icon, e)}
            onMouseLeave={handleMouseLeave}
          />
        ))}
      </div>
    </div>
  );
};

export default IconGrid;
