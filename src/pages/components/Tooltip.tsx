import React from 'react';

interface TooltipProps {
  hoveredIcon: string | null;
  tooltipPosition: { top: number; left: number } | null;
  iconInfo: { [key: string]: string };
}

const Tooltip: React.FC<TooltipProps> = ({ hoveredIcon, tooltipPosition, iconInfo }) => {
  if (!hoveredIcon || !tooltipPosition) return null;

  return (
    <div
      className='absolute p-4 bg-pink-200 rounded-lg shadow-lg'
      style={{ top: `${tooltipPosition.top}px`, left: `${tooltipPosition.left}px`, zIndex: 9999 }}
    >
      <p className='text-lg font-yomogi font-bold'>{iconInfo[hoveredIcon]}</p>
    </div>
  );
};

export default Tooltip;
