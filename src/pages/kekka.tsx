import { useEffect } from 'react';

export const Kekka = () => {
  useEffect(() => {
    // スクロールを禁止する
    document.body.style.overflow = 'hidden';

    // コンポーネントがアンマウントされた時にスクロールを元に戻す
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className='w-full h-screen flex bg-pink-base'>
      <img
        src='/flour.png'
        alt='hana'
        className='w-full z-0 absolute bottom-0 left-0 opacity-60'
      ></img>
      <div className='w-1/2 h-screen z-10'>
        <img
          src='/default_girl.png'
          alt='onago'
          className='w-1/2 h-auto ml-160 mt-160'
        ></img>
      </div>
      <div className='w-1/2 h-screen flex flex-col items-center z-10'>
        <div className='w-320 h-120 bg-white'></div>
        <img src='/haguruma.png' alt='haguruma' className='w-1/2 h-auto'></img>
      </div>
    </div>
  );
};
