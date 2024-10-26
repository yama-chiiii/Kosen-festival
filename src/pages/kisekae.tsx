import { useRef, useState } from 'react';
import Draggable from 'react-draggable';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';
import { useLocation, useNavigate } from 'react-router-dom';

// 各アイテムの型を定義
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

  const navigate = useNavigate(); // ページ遷移用のフック
  const canvasRef = useRef<HTMLCanvasElement | null>(null); // Canvas用のref

  // 状態に型を明示的に指定する
  const [selectedItems, setSelectedItems] = useState<Item[]>([]);

  // アイテムを追加する関数
  const addItem = (src: string) => {
    setSelectedItems([
      ...selectedItems,
      {
        id: Math.random().toString(),
        src,
        x: 150, // デフォルトのX位置を中央付近に調整
        y: 50,  // 初期Y位置（上部に表示されるよう調整）
        width: 100, // デフォルトの幅
        height: 100, // デフォルトの高さ
      },
    ]);
  };

  // Canvasに女の子の画像と装飾を描画して画像を生成
  const generateImage = async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Canvasサイズを設定（画像サイズに合わせる）
    canvas.width = 500; // 画像の幅（必要に応じて調整）
    canvas.height = 700; // 画像の高さ（必要に応じて調整）

    // 背景画像（女の子の画像）を描画
    const background = new Image();
    background.src = imagePath;
    await new Promise((resolve) => {
      background.onload = () => {
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height); // 女の子の画像をキャンバスに描画
        resolve(null);
      };
    });

    // 各装飾アイテムを描画
    for (const item of selectedItems) {
      const img = new Image();
      img.src = item.src;
      await new Promise((resolve) => {
        img.onload = () => {
          ctx.drawImage(img, item.x, item.y, item.width, item.height); // 各装飾アイテムを指定された位置とサイズで描画
          resolve(null);
        };
      });
    }

    // Canvasの内容を画像のData URLとして取得
    const imageDataUrl = canvas.toDataURL('image/png');
    return imageDataUrl;
  };

  const handleSave = async () => {
    const imageDataUrl = await generateImage();
    if (imageDataUrl) {
      navigate('/kansei', { state: { imageDataUrl } }); // 生成された画像をKanseiに渡す
    } else {
      alert("装飾アイテムを選択してください");
    }
  };

  return (
    <div className='w-full h-screen flex bg-pink-base relative'>
      <img
        src='/kumo.png'
        alt='kumo'
        className='w-full z-0 absolute bottom-0 left-0'
      />

      <div className='w-1/3 h-screen z-10 relative' style={{ position: 'relative' }}>
        {/* 女の子の画像 */}
        <img
          src={imagePath}
          alt='onago'
          className='w-2/3 h-auto ml-160 mt-100'
          style={{ zIndex: 1, position: 'relative' }} // 女の子の画像のpositionをrelativeに設定
        />

        {/* Canvas要素（見えない） */}
        <canvas ref={canvasRef} style={{ display: 'none' }} />

        {/* 選択されたアイテムをレンダリング */}
        {selectedItems.map((item, index) => (
          <Draggable
            key={item.id}
            defaultPosition={{ x: item.x, y: item.y }}
            onStop={(e, data) => {
              const updatedItems = [...selectedItems];
              updatedItems[index] = { ...item, x: data.x, y: data.y };
              setSelectedItems(updatedItems);
            }}
          >
            <ResizableBox
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
              style={{ zIndex: 2, position: 'absolute' }} // 装飾アイテムにz-indexを2、positionをabsoluteに設定
            >
              <img
                src={item.src}
                alt='item'
                style={{ width: '100%', height: '100%', zIndex: 2 }} // 画像のz-indexも2に設定
              />
            </ResizableBox>
          </Draggable>
        ))}
      </div>

      <div className='w-2/3 h-screen relative z-20 flex flex-col items-center'>
        {/* 装飾アイテムの選択 */}
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

        <div className='w-full h-screen flex flex-row justify-center'>
          <div
            className='w-200 h-200 flex justify-center items-center p-20 mx-32 my-12 bg-white rounded cursor-pointer'
            onClick={() => addItem('/sangurasu.png')}
          >
            <img src='/sangurasu.png' alt='sangurasu' className='w-120 h-120' />
          </div>
          <div
            className='w-200 h-200 flex justify-center items-center p-20 mx-32 my-12 bg-white rounded cursor-pointer'
            onClick={() => addItem('/asease.png')}
          >
            <img src='/asease.png' alt='asease' className='w-120 h-120' />
          </div>
        </div>

        {/* 保存ボタン */}
        <button onClick={handleSave} className='bg-pink-500 text-white p-4 rounded mt-4'>
          保存
        </button>
      </div>
    </div>
  );
};
