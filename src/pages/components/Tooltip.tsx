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
      className='absolute p-4 bg-yellow-200 rounded-lg shadow-lg w-64'
      style={{ top: `${tooltipPosition.top}px`, left: `${tooltipPosition.left}px`, zIndex: 9999 }}
    >
      <p className='text-lg font-bold'>{iconInfo[hoveredIcon]}</p>
    </div>
  );
};

export default Tooltip;
