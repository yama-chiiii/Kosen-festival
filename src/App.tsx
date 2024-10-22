import React, { useEffect, useState } from 'react';
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useNavigate,
} from 'react-router-dom';
import { Audio } from './pages/Audio';
import { AudioProvider } from './pages/AudioContext';
import { Kekka } from './pages/kekka';
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
  const [isPcSize, setIsPcSize] = useState(true);

  const checkPcSize = () => {
    const isPcSize = window.innerWidth >= 1400 && window.innerHeight >= 600;
    setIsPcSize(isPcSize);
  };

  useEffect(() => {
    checkPcSize();
    window.addEventListener('resize', checkPcSize);
    return () => {
      window.removeEventListener('resize', checkPcSize);
    };
  }, []);

  return (
    <AudioProvider>
      <Router>
         {/* PC画面サイズでない場合、フィルターとメッセージを表示 */}
      {!isPcSize && (
        <div className="w-full h-screen absolute inset-0 bg-white bg-opacity-60 flex justify-center items-center z-20">
          <div className="bg-pink-200 rounded-lg p-8 shadow-lg text-center w-3/4 max-w-md border-4 border-pink-300">
            <h2 className="text-xl font-bold text-gray-800 mb-4">このゲームはPC画面サイズでのみ行えます</h2>
            <p className="text-sm text-gray-600">ブラウザのウィンドウを拡大して、再度アクセスしてください。</p>
          </div>
        </div>
        )}
        <div className={isPcSize ? '' : 'blur-sm'}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/seibetsu/*" element={<Seibetsu />} />
          <Route path="/onna" element={<Onna />} />
            <Route path="/otoko" element={<Otoko />} />
            <Route path="/sotugyou" element={<Sotugyou />} />
          <Route path="/kekka" element={<Kekka />} />
          </Routes>
          </div>
      </Router>
    </AudioProvider>
  );
};

export default App;
