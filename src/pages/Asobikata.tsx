// pages/Asobikata.tsx
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Asobikata: React.FC = () => {
  const navigate = useNavigate()
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 5

  // ページを進める
  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  // ページを戻す
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <div className='w-full h-screen bg-pink-100 flex flex-col items-center justify-center relative font-yomogi'>
      <h1 className='text-3xl font-bold mb-4 text-gray-700'>あそびかた</h1>

      <div className='w-3/4 h-2/3 py-12 bg-white flex items-center justify-center mb-8 relative'>
        <img
          src={`/setumei${currentPage}.png`} // public内の画像を参照
          alt={`説明ページ ${currentPage}`}
          className='w-full h-full object-contain'
        />
      </div>

      {/* ページ切り替えボタン */}
      <div className='flex items-center w-3/4 justify-between'>
        {/* 前へボタン */}
        {currentPage > 1 && (
          <button
            onClick={prevPage}
            className='bg-blue-300 rounded-md text-3xl text-white p-2 font-bold mr-auto'
          >
            まえ
          </button>
        )}
        {/* 次へボタン */}
        {currentPage < totalPages && (
          <button
            onClick={nextPage}
            className='bg-blue-300 rounded-md text-3xl text-white p-2 font-bold ml-auto'
          >
            つぎ
          </button>
        )}
      </div>

      {/* ホームに戻るボタン */}
      <button
        onClick={() => navigate('/')}
        className='mt-8 text-xl text-gray-700 font-bold hover:text-gray-500'
      >
        ほーむにもどる
      </button>
    </div>
  )
}

export default Asobikata
