import { Key } from 'react';
import { useLocation } from 'react-router-dom';

export const Kansei = () => {
  const location = useLocation();
  const { selectedItems = [], imagePath = '/default_girl.png' } = location.state || {};

  return (
    <div className='w-full h-screen flex bg-pink-base relative'>
      <img src='/kumo.png' alt='kumo' className='w-full z-0 absolute bottom-0 left-0 opacity-70' />

      <div className='w-1/3 h-screen z-10 relative'>
        <img src={imagePath} alt='onago' className='w-2/3 h-auto ml-160 mt-100' style={{ zIndex: 1, position: 'relative' }} />

        {/* 装飾アイテムを指定位置に配置 */}
        {selectedItems.map((item: { id: Key | null | undefined; x: any; y: any; width: any; height: any; src: string | undefined; }) => (
          <div
            key={item.id}
            style={{
              position: 'absolute',
              left: `${item.x}px`,
              top: `${item.y}px`,
              width: `${item.width}px`,
              height: `${item.height}px`,
              zIndex: 2,
            }}
          >
            <img src={item.src} alt='装飾アイテム' style={{ width: '100%', height: '100%' }} />
          </div>
        ))}
      </div>
      <div className='w-2/3'>
        <p>かんせい！</p>
      </div>
    </div>
  );
};
