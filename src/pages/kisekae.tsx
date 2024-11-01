import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  CustomDraggable,
  CustomResizableBox,
} from './components/CustomDraggable'

interface Item {
  id: string
  src: string
  x: number
  y: number
  width: number
  height: number
}

export const Kisekae = () => {
  const location = useLocation()
  const {
    imagePath = '/default_girl.png',
    itemsPath = '/default_girlItem.png',
  } = location.state || {}
  const navigate = useNavigate()
  const [selectedItems, setSelectedItems] = useState<Item[]>([])
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null)

  const xOffset = -350 // Y座標の調整分
  const yOffset = 80 // Y座標の調整分

  // 装飾アイテムの追加
  const addItem = (src: string) => {
    setSelectedItems([
      ...selectedItems,
      {
        id: Math.random().toString(),
        src,
        x: 200,
        y: -200, // 初期位置でKisekae内の調整を考慮
        width: 100,
        height: 100,
      },
    ])
  }

  const changeItemSize = (itemId: string, increment: number) => {
    setSelectedItems((items) =>
      items.map((item) =>
        item.id === itemId
          ? {
              ...item,
              width: Math.max(50, item.width + increment), // 最小サイズ50を保持
              height: Math.max(50, item.height + increment),
            }
          : item,
      ),
    )
  }

  const deleteItem = (itemId: string) => {
    setSelectedItems((items) => items.filter((item) => item.id !== itemId))
    setSelectedItemId(null)
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Backspace' && selectedItemId) {
        setSelectedItems((items) =>
          items.filter((item) => item.id !== selectedItemId),
        )
        setSelectedItemId(null)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [selectedItemId])

  // 保存処理で座標を調整して送信
  const handleSave = () => {
    const adjustedItems = selectedItems.map((item) => ({
      ...item,
      x: item.x + xOffset,
      y: item.y + yOffset, // Y座標をKansei向けに調整
    }))
    navigate('/kansei', { state: { selectedItems: adjustedItems, imagePath } })
  }

  return (
    <div className='w-full h-screen flex bg-pink-base relative'>
      <img
        src='/kumo.png'
        alt='kumo'
        className='w-full z-0 absolute bottom-0 left-0'
      />

      <div className='w-1/3 h-screen flex flex-col z-0 relative'>
        <p className='w-full flex justify-center ml-90 mt-100 font-yomogi text-2xl'>
          この枠の中に自由に装飾をつけてね～
        </p>
        <img
          src={imagePath}
          alt='onago'
          className='w-2/3 h-auto relative ml-160 z-0 bg-blue-100 border-4 border-red-500'
        />

        {/* 装飾アイテムのレンダリング */}
        {selectedItems.map((item, index) => (
          <CustomDraggable
            key={item.id}
            defaultPosition={{ x: item.x, y: item.y }}
            onStop={(e, data) => {
              const updatedItems = [...selectedItems]
              updatedItems[index] = { ...item, x: data.x, y: data.y }
              setSelectedItems(updatedItems)
              console.log(`ID: ${item.id}, New X: ${data.x}, New Y: ${data.y}`) // 座標を表示
            }}
          >
            <div
              onClick={() => {
                setSelectedItemId(item.id)
                console.log(`ID: ${item.id}, X: ${item.x}, Y: ${item.y}`) // アイテム選択時に座標を表示
              }}
              className='relative'
              style={{ pointerEvents: 'auto' }}
            >
              <CustomResizableBox
                tabIndex={0}
                className={`absolute z-20 ${
                  selectedItemId === item.id ? 'border border-blue-500' : ''
                }`}
                width={item.width}
                height={item.height}
                lockAspectRatio
                onResizeStop={(e, data) => {
                  const updatedItems = [...selectedItems]
                  updatedItems[index] = {
                    ...item,
                    width: data.size.width,
                    height: data.size.height,
                  }
                  setSelectedItems(updatedItems)
                }}
              >
                <img
                  src={item.src}
                  alt='item'
                  style={{
                    width: '100%',
                    height: '100%',
                    pointerEvents: 'auto',
                  }}
                />
              </CustomResizableBox>

              {/* 選択時に表示する操作ボタン */}
              {selectedItemId === item.id && (
                <div className='absolute -top-12 left-0 flex space-x-2'>
                  <button
                    onClick={() => changeItemSize(item.id, 10)}
                    className='bg-green-500 text-white p-1 rounded'
                  >
                    ＋
                  </button>
                  <button
                    onClick={() => changeItemSize(item.id, -10)}
                    className='bg-red-500 text-white p-1 rounded'
                  >
                    －
                  </button>
                  <button
                    onClick={() => deleteItem(item.id)}
                    className='bg-gray-500 text-white p-1 rounded'
                  >
                    消す
                  </button>
                </div>
              )}
            </div>
          </CustomDraggable>
        ))}
      </div>

      <div className='w-2/3 h-screen relative z-20 flex flex-col items-center'>
        <div className='w-full h-screen overflow-hidden flex flex-col'>
          <div className='w-full h-screen flex flex-row justify-center items-center'>
            <div
              className='w-180 h-180 flex justify-center items-center p-20 mx-32 my-12 bg-white rounded-lg border-4 cursor-pointer'
              onClick={() => addItem('/ribon.png')}
            >
              <img src='/ribon.png' alt='ribon' className='w-120 h-120' />
            </div>
            <div
              className='w-180 h-180 flex justify-center items-center p-20 mx-32 my-12 bg-white rounded-lg border-4 cursor-pointer'
              onClick={() => addItem('/oko.png')}
            >
              <img src='/oko.png' alt='oko' className='w-120 h-120' />
            </div>
          </div>
          <div className='w-full h-screen flex flex-row justify-center items-center'>
            <div
              className='w-180 h-180 flex justify-center items-center p-12 mx-32 my-12 bg-white rounded-lg border-4 cursor-pointer'
              onClick={() => addItem('/harguruma_head.png')}
            >
              <img
                src='/harguruma_head.png'
                alt='ribon'
                className='w-180 h-auto'
              />
            </div>
            <div
              className='w-180 h-180 flex justify-center items-center p-12 mx-32 my-20 bg-white rounded-lg border-4 cursor-pointer'
              onClick={() => addItem('/NG.png')}
            >
              <img src='/NG.png' alt='oko' className='w-120 h-120' />
            </div>
          </div>
          <div className='w-full h-screen flex flex-row justify-center items-center'>
            <div
              className='w-180 h-180 flex justify-center items-center p-12 mx-32 my-12 bg-white rounded-lg border-4 cursor-pointer'
              onClick={() => addItem('/sangurasu.png')}
            >
              <img src='/sangurasu.png' alt='ribon' className='w-120 h-120' />
            </div>
            <div
              className='w-180 h-180 flex justify-center items-center p-20 mx-32 my-12 bg-white rounded-lg border-4 cursor-pointer'
              onClick={() => addItem(itemsPath)} // 結果に応じたアイテム画像を追加
            >
              <img src={itemsPath} alt='item' className='w-120 h-120' />
            </div>
          </div>
        </div>

        <button
          onClick={handleSave}
          className='text-white p-4 rounded mt-4 mb-8 px-11 py-5 bg-pink-300 text-4xl shadow-lg hover:bg-pink-400 transition font-yomogi'
        >
          保存
        </button>
      </div>
    </div>
  )
}
