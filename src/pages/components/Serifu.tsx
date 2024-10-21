import React from 'react';

interface SerifuProps {
  currentSerifu: string;
}

const Serifu: React.FC<SerifuProps> = ({ currentSerifu }) => {
  return (
    <div className='absolute w-220 top-200 left-180 ml-52 mt-10 z-30'>
      <p className='p-2 text-xl font-yomogi'>{currentSerifu}</p>
    </div>
  );
};

export default Serifu;
