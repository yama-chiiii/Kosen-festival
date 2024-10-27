import { Key } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const Kansei = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { selectedItems = [], imagePath = '/default_girl.png' } = location.state || {}

  return (
    <div className='w-full h-screen overflow-hidden flex flex-col items-center justify-center bg-pink-base relative'>
      {/* 背景画像 */}
      <img src='/kumo.png' alt='kumo' className='w-full z-0 absolute bottom-0 left-0 opacity-70' />

      {/* かんせい！メッセージ */}
      <div className='text-center mb-8 z-10 mt-52'>
        <h1 className='text-5xl font-bold text-pink-600 mb-4 font-yomogi'>かんせい！</h1>
        <p className='text-2xl text-gray-700 font-yomogi'>あそんでくれてありがとう！</p>
      </div>

      {/* メインキャラクターと装飾アイテム */}
      <div className='w-1/3 h-screen z-10 relative flex items-center justify-center'>
        <img src={imagePath} alt='onago' className='w-2/3 h-auto relative' style={{ zIndex: 1 }} />

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

      {/* ホームにもどるボタン */}
      <button
        onClick={() => navigate('/')}
        className='fixed bottom-8 right-8 bg-pink-300 text-white text-2xl font-bold px-6 py-3 rounded-full shadow-lg hover:bg-pink-400 transition duration-300 font-yomogi z-10'
      >
        ホームにもどる
      </button>
    </div>
  );
};
