import { useLocation } from 'react-router-dom';

export const Kansei = () => {
  const location = useLocation();
  const { imageDataUrl } = location.state || {};

  return (
    <div className='w-full h-screen flex bg-pink-base relative'>
      <img
        src='/kumo.png'
        alt='kumo'
        className='w-full z-0 absolute bottom-0 left-0 opacity-70'
      />

      <div className='w-1/3 h-screen z-10 relative'>
        {/* 生成された画像を表示 */}
        {imageDataUrl && (
          <img
            src={imageDataUrl}
            alt='完成した画像'
            className='w-2/3 h-auto ml-160 mt-100'
          />
        )}
      </div>
    </div>
  );
};
