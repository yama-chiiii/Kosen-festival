import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Sotugyou = () => {
  const [hearts, setHearts] = useState(['♡', '♡', '♡']);
  const navigate = useNavigate();

  useEffect(() => {
    // スクロールを禁止
    document.body.style.overflow = 'hidden';

    // ハートのアニメーション
    const heartTimer = setInterval(() => {
      setHearts((prevHearts) => {
        const nextHearts = [...prevHearts];
        const index = nextHearts.indexOf('♡');
        if (index !== -1) {
          nextHearts[index] = '♥';
        }
        return nextHearts;
      });
    }, 1000);

    // 3秒後にページ遷移
    const timer = setTimeout(() => {
      navigate('/kekka');
    }, 3500);

    // クリーンアップ処理
    return () => {
      clearTimeout(timer);
      clearInterval(heartTimer);
      document.body.style.overflow = 'auto'; // 元に戻す
    };
  }, [navigate]);

  return (
    <div className='w-full h-screen overflow-hidden flex flex-col justify-center items-center bg-pink-base relative'>
      <img
        src='/kumo.png'
        alt='kumo'
        className='w-full z-0 absolute bottom-0 left-0 opacity-70'
      ></img>
      <div className='w-full h-screen overflow-hidden z-0 absolute flex justify-end'>
        <img
          src='/sakura.png'
          alt='sakura'
          className='w-1/2  opacity-90'
        ></img>
      </div>
      <p className='text-7xl font-yomogi z-10'>卒業後…</p>
      <div className='flex space-x-4 text-4xl absolute bottom-80'>
        {hearts.map((heart, index) => (
          <p key={index} className='text-red-600'>
            {heart}
          </p>
        ))}
      </div>
    </div>
  );
};
