import { useNavigate } from 'react-router-dom';

export const Seibetsu = () => {
  const navigate = useNavigate(); // ページ遷移用のフック

  return (
    <div className="w-full h-screen flex flex-col items-center bg-pink-base relative">
      {/* 背景画像 */}
      <img
        src="/kumo.png"
        alt="kumo"
        className="w-full h-full object-cover opacity-90 absolute bottom-0 left-0"
      />

      {/* 吹き出し */}
      <img
        src="/fukidasi.png"
        alt="Fukidasi"
        className="w-auto h-1/3 mt-12 object-contain z-10"
      />

      {/* キャラクター選択部分 */}
      <div className="w-full h-2/3 flex justify-center items-center z-10">
        {/* 女の子 */}
        <div className="relative flex flex-col justify-center items-center w-1/2">
          <img
            src="/girl.png"
            alt="onago"
            className="w-230 object-contain mt-40"
          />
          <img
            src="/frame1.png"
            alt="frame"
            className="absolute -top-10 left-0 w-full h-full object-contain pointer-events-none z-0"
          />
          <button
            className="absolute top-[77%] px-20 py-8 bg-pink-dark text-black rounded-xl font-yomogi text-3xl z-10"  // ボタンの位置を調整
            onClick={() => navigate('/onna')}
          >
            入学
          </button>
        </div>

        {/* 男の子 */}
        <div className="relative flex flex-col justify-center items-center w-1/2">
          <img
            src="/boy.png"
            alt="boy"
            className="w-230 object-contain mt-20"
          />
          <img
            src="/frame2.png"
            alt="frame"
            className="absolute -top-10 left-0 w-full h-full object-contain pointer-events-none"
          />
           <button
            className="absolute top-[77%] px-20 py-8 bg-blue-dark text-black rounded-xl font-yomogi text-3xl z-10"  // ボタンの位置を調整
            onClick={() => navigate('/otoko')}
          >
            入学
          </button>
        </div>
      </div>
    </div>
  );
};
