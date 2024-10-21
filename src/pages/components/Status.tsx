import React from 'react';

interface StatusProps {
  riajuu: number;
  seiseki: number;
  yami: number;
  renderHearts: (count: number) => string;
}

const Status: React.FC<StatusProps> = ({ riajuu, seiseki, yami, renderHearts }) => {
  return (
    <div className='absolute top-150 left-100 z-40 font-yomogi font-base text-xl'>
      <div>
        <p>リア充度 <span className='text-red-500'>{renderHearts(riajuu)}</span></p>
        <p>せいせき <span className='text-red-500'>{renderHearts(seiseki)}</span></p>
        <p>やみ度 <span className='text-red-500'>{renderHearts(yami)}</span></p>
      </div>
    </div>
  );
};

export default Status;
