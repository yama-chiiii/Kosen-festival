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
          className='w-3/4 h-auto ml-100 mt-30'
        ></img>
      </div>
      <div className='w-1/2 h-screen flex flex-col items-center z-10'>
        <div className='w-350 h-350 bg-white rounded-3xl mt-100 -ml-80'>アイテムゲット！</div>
        <img src='/haguruma.png' alt='haguruma' className='w-1/2 h-auto -ml-80 position:relative'></img>
        <p className='position:absolute  top-0 text-3xl'>ギャル系高専生のかんせい！</p>
        
      </div>
    </div>
  );
};
