import { Key, useState } from 'react';
import Draggable from 'react-draggable';
import { useLocation, useNavigate } from 'react-router-dom';

export const Kansei = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedItems = [], imagePath = '/default_girl.png' } = location.state || {};
  const [adjustMode, setAdjustMode] = useState(false); // 調整モードの状態

  return (
    <div className='w-full h-screen overflow-hidden flex flex-col items-center justify-center bg-pink-base relative'>
      {/* 背景画像 */}
      <img src='/kumo.png' alt='kumo' className='w-full z-0 absolute bottom-0 left-0 opacity-70' />

      {/* かんせい！メッセージ */}
      <div className='text-center mb-8 z-10 mt-200'>
        <h1 className='text-5xl font-bold text-pink-600 mb-4 font-yomogi'>かんせい！</h1>
        <p className='text-2xl text-gray-700 font-yomogi'>あそんでくれてありがとう！</p>
      </div>

      {/* 「装飾がうまくいっていない場合」リンク */}
      <button
        onClick={() => setAdjustMode(!adjustMode)}
        className='text-blue-600 underline mb-4 z-10 text-lg'
      >
        ？装飾がうまくいっていない場合
      </button>

      {/* 調整モードメッセージ */}
      {adjustMode && (
        <p className='text-center text-xl text-gray-800 font-yomogi mb-8'>
          装飾の位置を調整してください
        </p>
      )}

      {/* メインキャラクターと装飾アイテム */}
      <div className='w-1/3 h-screen z-10 relative flex items-center justify-center'>
        <img src={imagePath} alt='onago' className='w-2/3 h-auto relative' style={{ zIndex: 1 }} />

        {/* 装飾アイテムを指定位置に配置 */}
        {selectedItems.map((item: { id: Key | null | undefined; x: any; y: any; width: any; height: any; src: string | undefined; }) => (
          <Draggable
            key={item.id}
            defaultPosition={{ x: item.x, y: item.y }}
            disabled={!adjustMode} // 調整モードのときのみドラッグ可能
            onStop={(e, data) => {
              if (adjustMode) {
                // ドラッグ終了時の位置を保存
                const updatedItems = selectedItems.map((i: { id: Key | null | undefined; }) =>
                  i.id === item.id ? { ...i, x: data.x, y: data.y } : i
                );
                location.state = { ...location.state, selectedItems: updatedItems };
              }
            }}
          >
            <div
              style={{
                position: 'absolute',
                width: `${item.width}px`,
                height: `${item.height}px`,
                zIndex: 2,
                cursor: adjustMode ? 'move' : 'default',
              }}
            >
              <img src={item.src} alt='装飾アイテム' style={{ width: '100%', height: '100%' }} />
            </div>
          </Draggable>
        ))}
      </div>

      {/* ホームにもどるボタン */}
      <button
        onClick={() => navigate('/')}
        className='fixed bottom-20 right-40 bg-pink-300 text-white text-2xl font-bold px-12 py-12 rounded shadow-lg hover:bg-pink-400 transition duration-300 font-yomogi z-10'
      >
        ホームにもどる
      </button>
    </div>
  );
};
