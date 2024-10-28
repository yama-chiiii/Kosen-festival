import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Asobikata: React.FC = () => {
  const navigate = useNavigate()
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 5

  // 各ページの説明文
  const explanations = [
    "このゲームは、とある高専生を育てて卒業まで導くゲームです。まずは育てる高専生を選びましょう。",
    "ここで高専生を育てていけます。アイコンを押して行動をきめてあげましょう。行動は1年生の前期～5年生の後期までの計10回です。",
    "計10回の行動のあと、育てた高専生が卒業します。",
    "卒業した後、あなたの選択次第で、成長した姿が変化します。ここからこの子のきせかえを行えます。",
    "着せ替えでは、すきな装飾を自分の育てた子をデコることができます。"
  ]

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <div className='w-full h-screen bg-pink-100 flex flex-col items-center justify-center relative font-yomogi'>
      <h1 className='text-3xl font-bold mb-4 text-gray-700'>あそびかた</h1>

      <div className='w-3/4 h-4/5 py-12 bg-white flex flex-col items-center justify-center mb-8 relative'>
        <img
          src={`/setumei${currentPage}.png`}
          alt={`説明ページ ${currentPage}`}
          className='w-4/5 h-full object-contain'
        />
        {/* 現在のページに応じた説明文 */}
        <p className='text-center text-gray-600 text-lg'>
          {explanations[currentPage - 1]}
        </p>
      </div>

      {/* ページ切り替えボタン */}
      <div className='flex items-center w-3/4 justify-between'>
        {currentPage > 1 && (
          <button
            onClick={prevPage}
            className='bg-blue-300 rounded-md text-3xl text-white p-2 font-bold mr-auto'
          >
            まえ
          </button>
        )}
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
        className='bg-pink-dark px-12 py-8 mt-8 rounded text-xl text-gray-700 font-bold hover:text-gray-500'
      >
        ほーむにもどる
      </button>
    </div>
  )
}

export default Asobikata
