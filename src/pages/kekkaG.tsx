import { useEffect } from 'react'

export const KekkaG = () => {
  useEffect(() => {
    // スクロールを禁止する
    document.body.style.overflow = 'hidden'

    // コンポーネントがアンマウントされた時にスクロールを元に戻す
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  return (
    <div className='w-full h-screen flex bg-pink-base relative'>
      <img
        src='/kumo.png'
        alt='kumo'
        className='w-full z-0 absolute bottom-0 left-0 opacity-70'
      />
      <img
        src='/flour.png'
        alt='hana'
        className='w-full z-0 absolute bottom-0 left-0 opacity-60'
      ></img>
      <div className='w-1/3 h-screen z-10'>
        <img
          src='/default_girl.png'
          alt='onago'
          className='w-2/3 h-auto ml-160 mt-100'
        ></img>
      </div>
      <div className='w-2/3 h-screen flex-col relative'>
        <div className='w-full h-2/3 flex justify-center z-10'>
          <div className='w-1/2 h-300 mt-140 flex justify-center bg-white'>
            <div className='w-1/2 flex flex-col ml-20'>
              <p className='mt-20 ml-12 text-2xl font-yomogi'>
                アイテムゲット！
              </p>
              <img
                src='/default_gitlItem.png'
                alt='haguruma'
                className='w-1/2 h-auto mt-32 ml-30'
              ></img>
            </div>
            <div className='w-1/2 flex justify-start items-center text-xl font-yomogi'>
              <p>ぎゃう</p>
              </div>
          </div>
        </div>
        <div className='w-full h-1/3 flex justify-center z-10 relative'>
          <img
            src='/haguruma.png'
            alt='haguruma'
            className='w-auto h-full'
          ></img>
          <div className='absolute inset-0 flex justify-center items-center z-20'>
            <p className='text-center text-black text-4xl font-yomogi mt-80 whitespace-pre-line'>
              大学生風高専生
              <br />
              完成!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
