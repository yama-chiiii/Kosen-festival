import React from 'react';

interface SerifuProps {
  currentSerifu: string;
}

const Serifu: React.FC<SerifuProps> = ({ currentSerifu }) => {
  return (
    <div className='absolute w-220  ml-275 mt-6 z-30'>
      <p className='p-2 text-xl font-yomogi '>{currentSerifu}</p>
    </div>
  );
};

export default Serifu;
