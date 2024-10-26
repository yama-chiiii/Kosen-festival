import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { CustomDraggable, CustomResizableBox } from './components/CustomDraggable';

interface Item {
  id: string;
  src: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

export const Kisekae = () => {
  const location = useLocation();
  const { imagePath = '/default_girl.png' } = location.state || {};
  const navigate = useNavigate();
  const [selectedItems, setSelectedItems] = useState<Item[]>([]);

  const yOffset = 1000; // Y座標の調整分

  // 装飾アイテムの追加
  const addItem = (src: string) => {
    setSelectedItems([
      ...selectedItems,
      {
        id: Math.random().toString(),
        src,
        x: 200,
        y: -860, // 初期位置でKisekae内の調整を考慮
        width: 100,
        height: 100,
      },
    ]);
  };

  // 保存処理で座標を調整して送信
  const handleSave = () => {
    const adjustedItems = selectedItems.map(item => ({
      ...item,
      y: item.y + yOffset, // Y座標をKansei向けに調整
    }));
    navigate('/kansei', { state: { selectedItems: adjustedItems, imagePath } });
  };

  return (
    <div className='w-full h-screen flex bg-pink-base relative'>
      <img src='/kumo.png' alt='kumo' className='w-full z-0 absolute bottom-0 left-0' />

      <div className='w-1/3 h-screen z-10 relative'>
        <img src={imagePath} alt='onago' className='w-2/3 h-auto relative ml-160 mt-100 z-0 ' />

        {/* 装飾アイテムのレンダリング */}
        {selectedItems.map((item, index) => (
          <CustomDraggable
            key={item.id}
            defaultPosition={{ x: item.x, y: item.y }}
            onStop={(e, data) => {
              const updatedItems = [...selectedItems];
              updatedItems[index] = { ...item, x: data.x, y: data.y };
              setSelectedItems(updatedItems);
            }}
          >
            <CustomResizableBox
              width={item.width}
              height={item.height}
              lockAspectRatio
              onResizeStop={(e, data) => {
                const updatedItems = [...selectedItems];
                updatedItems[index] = {
                  ...item,
                  width: data.size.width,
                  height: data.size.height,
                };
                setSelectedItems(updatedItems);
              }}
              style={{ zIndex: 10, position: 'absolute' }}
            >
              <img src={item.src} alt='item' style={{ width: '100%', height: '100%' }} />
            </CustomResizableBox>
          </CustomDraggable>
        ))}
      </div>

      <div className='w-2/3 h-screen relative z-20 flex flex-col items-center'>
        <div className='w-full h-screen flex flex-row justify-center items-center'>
          <div
            className='w-200 h-200 flex justify-center items-center p-20 mx-32 my-12 bg-white rounded cursor-pointer'
            onClick={() => addItem('/ribon.png')}
          >
            <img src='/ribon.png' alt='ribon' className='w-120 h-120' />
          </div>
          <div
            className='w-200 h-200 flex justify-center items-center p-20 mx-32 my-12 bg-white rounded cursor-pointer'
            onClick={() => addItem('/oko.png')}
          >
            <img src='/oko.png' alt='oko' className='w-120 h-120' />
          </div>
        </div>

        <button onClick={handleSave} className='bg-pink-500 text-white p-4 rounded mt-4'>
          保存
        </button>
      </div>
    </div>
  );
};
