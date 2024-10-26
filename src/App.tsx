import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter as Router, Routes, useNavigate } from 'react-router-dom';
import { Audio } from './pages/Audio';
import { AudioProvider } from './pages/AudioContext';
import { Kansei } from './pages/kansei';
import { Kekka } from './pages/kekka';
import { Kisekae } from './pages/kisekae';
import { Onna } from './pages/onna';
import { Otoko } from './pages/otoko';
import { Seibetsu } from './pages/seibetsu';
import { Sotugyou } from './pages/sotugyou';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className='w-full h-screen bg-yellow-100 relative'>
      <div className={`flex h-full justify-center`}>
        <img
          src='/hyousi.png'
          alt='Hyousi'
          className='w-auto h-full object-cover'
        />
        <div className='w-full h-auto absolute flex justify-end font-yomogi inset-0 z-10'>
          <Audio />
        </div>
        <div className='w-full h-auto absolute inset-0 font-yomogi'>
          <div className='w-full h-screen flex flex-col justify-center items-center '>
            <h1 className='mt-32 pb-32 text-4xl text-black'>
              ときめき☆彡高専だいあり～♡
            </h1>
            <div className='flex justify-center items-center px-12 h-56 rounded bg-pink-300 hover:bg-pink-400 transition-colors duration-300'>
              <button
                className='text-3xl text-black z-10'
                onClick={() => {
                  navigate('/seibetsu');
                }}
              >
                すたーと
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [isPlayable, setIsPlayable] = useState(true);

  const checkAspectRatio = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const aspectRatio = width / height;

    // 横:縦の比率が1.2:1以上でないとプレイ不可
    const minAspectRatio = 1.2;

    if (aspectRatio < minAspectRatio) {
      setIsPlayable(false);
    } else {
      setIsPlayable(true);
    }
  };

  useEffect(() => {
    // 初期チェック
    checkAspectRatio();
    // リサイズ時のチェック
    window.addEventListener('resize', checkAspectRatio);

    return () => {
      window.removeEventListener('resize', checkAspectRatio);
    };
  }, []);

  return (
    <AudioProvider>
      <Router>
        {!isPlayable && (
          <div className="w-full h-screen absolute inset-0 bg-white bg-opacity-80 flex justify-center items-center z-20">
            <div className="bg-pink-200 rounded-lg p-8 shadow-lg text-center w-3/4 max-w-md border-4 border-pink-300">
              <h2 className="text-xl font-bold text-gray-800 mb-4">画面の比率が適切ではありません</h2>
              <p className="text-sm text-gray-600">このゲームは横幅が縦幅より十分に大きい場合にのみプレイ可能です。ウィンドウサイズを調整してください。</p>
            </div>
          </div>
        )}
        <div className={isPlayable ? '' : 'blur-sm'}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/seibetsu/*" element={<Seibetsu />} />
            <Route path="/onna" element={<Onna />} />
            <Route path="/otoko" element={<Otoko />} />
            <Route path="/sotugyou" element={<Sotugyou />} />
            <Route path="/kekka/:resultType" element={<Kekka />} />
            <Route path="/kisekae" element={<Kisekae />} />
            <Route path="/kansei" element={<Kansei />} />
          </Routes>
        </div>
      </Router>
    </AudioProvider>
  );
};

export default App;
