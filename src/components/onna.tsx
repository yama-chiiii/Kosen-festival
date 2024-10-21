import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // React Router v6を使用している場合

type IconKey = 'icon1' | 'icon2' | 'icon3' | 'icon4' | 'icon5' | 'icon6' | 'icon7' | 'icon8';

export const Onna = () => {
  const [count, setCount] = useState(0);
  const [hoveredIcon, setHoveredIcon] = useState<IconKey | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState<{ top: number; left: number } | null>(null);
  const [currentSerifu, setCurrentSerifu] = useState('デフォルトのセリフです。'); // デフォルトのセリフを設定
  const [seiseki, setSeiseki] = useState(0); // せいせき
  const [riajuu, setRiajuu] = useState(0); // リア充度
  const [yami, setYami] = useState(0); // やみ度
  const navigate = useNavigate(); // ページ遷移用

  const years = [
    { grade: '1年生', term: '前期' },
    { grade: '1年生', term: '後期' },
    { grade: '2年生', term: '前期' },
    { grade: '2年生', term: '後期' },
    { grade: '3年生', term: '前期' },
    { grade: '3年生', term: '後期' },
    { grade: '4年生', term: '前期' },
    { grade: '4年生', term: '後期' },
    { grade: '5年生', term: '前期' },
    { grade: '5年生', term: '後期' },
  ];

  const serifuMap: Record<IconKey, string> = {
    icon1: "勉強頑張ろう！",
    icon2: "運動部は元気が一番！",
    icon3: "文化部も大切だよ！",
    icon4: "恋愛は慎重にね。",
    icon5: "いけないことしてない？",
    icon6: "美容は大事！",
    icon7: "SNSで何してるの？",
    icon8: "インスタ映え大事だよね！",
  };

  // 初期表示時にデフォルトのセリフを設定
  useEffect(() => {
    setCurrentSerifu("初めまして！"); // 初期表示時のデフォルトセリフ
  }, []);

  const handleClick = (icon: IconKey) => {
    if (count === years.length - 1) return; // 卒業後はクリックを無効化

    switch (icon) {
      case 'icon1':
        setSeiseki(prev => Math.min(prev + 1, 10));
        break;
      case 'icon2':
        setRiajuu(prev => Math.min(prev + 1, 10));
        break;
      case 'icon3':
        setSeiseki(prev => Math.min(prev + 1, 10));
        break;
      case 'icon4':
        setRiajuu(prev => Math.min(prev + 2, 10));
        setYami(prev => Math.min(prev + 1, 10));
        break;
      case 'icon5':
        setYami(prev => Math.min(prev + 1, 10));
        setSeiseki(prev => Math.max(prev - 2, 0));
        break;
      case 'icon6':
        setRiajuu(prev => Math.min(prev + 1, 10));
        setYami(prev => Math.max(prev - 1, 0));
        break;
      case 'icon7':
        setRiajuu(prev => Math.min(prev + 1, 10));
        setSeiseki(prev => Math.max(prev - 1, 0));
        break;
      case 'icon8':
        setYami(prev => Math.min(prev + 1, 10));
        setSeiseki(prev => Math.max(prev - 1, 0));
        break;
    }
    setCount((prevCount) => (prevCount < years.length - 1 ? prevCount + 1 : prevCount));
  };

  const handleGraduation = () => {
    navigate('/kekka'); // '/kekka'ページに遷移
  };

  const renderHearts = (count: number) => {
    return '♥'.repeat(count) + '♡'.repeat(10 - count);
  };

  const handleMouseEnter = (icon: IconKey, event: React.MouseEvent<HTMLImageElement>) => {
    if (count === years.length - 1) return; // 卒業後はホバーを無効化

    setHoveredIcon(icon);
    setCurrentSerifu(serifuMap[icon]); // アイコンに応じたセリフを設定
    const { top, left } = event.currentTarget.getBoundingClientRect();
    setTooltipPosition({ top: top - 50, left: left + 50 });
  };

  const handleMouseLeave = () => {
    setHoveredIcon(null);
    setTooltipPosition(null);
    setCurrentSerifu("デフォルトのセリフです。"); // マウスが離れた時にデフォルトセリフを設定
  };

  const renderHoveredInfo = () => {
    if (!hoveredIcon || !tooltipPosition) return null;

    const iconInfo = {
      icon1: "これは勉強アイコンです。",
      icon2: "これは運動部アイコンです。",
      icon3: "これは文化部アイコンです。",
      icon4: "これは恋愛アイコンです。",
      icon5: "これはいけないことアイコンです♡",
      icon6: "これは美容アイコンです。",
      icon7: "これはSNS(Twitter)アイコンです。",
      icon8: "これはSNS(Instagram)アイコンです。"
    };

    return (
      <div
        className='absolute p-4 bg-yellow-200 rounded-lg shadow-lg w-64'
        style={{ top: `${tooltipPosition.top}px`, left: `${tooltipPosition.left}px`, zIndex: 9999 }}
      >
        <p className='text-lg font-bold'>{iconInfo[hoveredIcon]}</p>
      </div>
    );
  };

  return (
    <div className='w-full h-screen overflow-hidden flex bg-pink-base relative'>
      <img
        src='/kumo.png'
        alt='kumo'
        className='w-full z-0 absolute bottom-0 left-0 opacity-70'
      ></img>
      <div className='w-1/2 h-screen z-10 relative'>
        <img
          src='/zikan.png'
          alt='zikan'
          className='w-240 h-auto mx-4 mt-4 object-cover'
        ></img>

        <div className='absolute top-40 left-88 z-20 font-yomogi'>
          <p className='bg-yellow-100 p-2 rounded-lg text-3xl font-bold'>{years[count].grade}</p>
          <p className='bg-yellow-100 p-2 rounded-lg text-3xl'>{years[count].term}</p>
        </div>

        <div className='absolute w-220 top-200 left-180 ml-52 mt-10 z-30'>
          <p className='p-2 text-xl font-yomogi'>{currentSerifu}</p> {/* 現在のセリフを表示 */}
        </div>

        <img
          src='/serifu1.png'
          alt='serifu'
          className='w-280 h-auto ml-200 -mt-12 object-cover'
        ></img>
        <div className='w-1/2 h-auto ml-150 -mt-48 flex items-center'>
          <img
            src='/girl.png'
            alt='girl'
            className='w-460 h-auto object-cover'
          ></img>
        </div>
      </div>

      <div className='w-1/2 h-screen z-20 relative'>
        <div className='relative'>
          <img
            src='/status.png'
            alt='status'
            className='w-480 h-auto object-cover'
          />
          <div className='absolute top-150 left-100 z-40 font-yomogi font-base text-xl'>
            <div>
              <p>リア充度 <span className='text-red-500'>{renderHearts(riajuu)}</span></p>
              <p>せいせき <span className='text-red-500'>{renderHearts(seiseki)}</span></p>
              <p>やみ度 <span className='text-red-500'>{renderHearts(yami)}</span></p>
            </div>
          </div>
        </div>
        <div className='w-3/4 h-auto flex flex-col px-20 py-20 bg-white'>
          <div className="flex flex-row justify-around mb-32 mt-12">
            {['icon1', 'icon2', 'icon3', 'icon4'].map((icon) => (
              <img
                key={icon}
                src={`/${icon}.png`}
                alt={icon}
                className='w-80 h-auto cursor-pointer'
                onClick={() => handleClick(icon as IconKey)}
                onMouseEnter={(e) => handleMouseEnter(icon as IconKey, e)}
                onMouseLeave={handleMouseLeave}
              />
            ))}
          </div>
          <div className="flex flex-row justify-around">
            {['icon5', 'icon6', 'icon7', 'icon8'].map((icon) => (
              <img
                key={icon}
                src={`/${icon}.png`}
                alt={icon}
                className='w-auto h-80 cursor-pointer'
                onClick={() => handleClick(icon as IconKey)}
                onMouseEnter={(e) => handleMouseEnter(icon as IconKey, e)}
                onMouseLeave={handleMouseLeave}
              />
            ))}
          </div>
        </div>
        {count === years.length - 1 && (
          <div className='absolute bottom-10 left-300'>
            <button
              className='px-6 py-3 bg-green-500 text-white text-xl rounded-full shadow-lg hover:bg-green-700 transition'
              onClick={handleGraduation}
            >
              卒業
            </button>
          </div>
        )}
      </div>

      {renderHoveredInfo()}
    </div>
  );
};
