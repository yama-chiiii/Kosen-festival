
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import IconGrid from './components/IconGrid';
import Serifu from './components/Serifu';
import Status from './components/Status';
import Tooltip from './components/Tooltip';

type IconKey = 'icon1' | 'icon2' | 'icon3' | 'icon4' | 'icon5' | 'icon6' | 'icon7' | 'icon8';

export const Otoko = () => {
  const [count, setCount] = useState(0);
  const [hoveredIcon, setHoveredIcon] = useState<IconKey | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState<{ top: number; left: number } | null>(null);
  const [currentSerifu, setCurrentSerifu] = useState('デフォルトのセリフです。');
  const [seiseki, setSeiseki] = useState(0);
  const [riajuu, setRiajuu] = useState(0);
  const [yami, setYami] = useState(0);
  const navigate = useNavigate();

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

  // アイコンごとのセリフ
  const serifuMap: Record<IconKey, string> = {
    icon1: "勉強頑張ろう！",
    icon2: "運動部は元気が一番！",
    icon3: "文化部も大切だよ！",
    icon4: "恋愛は慎重にね。",
    icon5: "いけないことしてない？",
    icon6: "美容は大事！",
    icon7: "インスタ映えだいじ",
    icon8: "結局もどってきちゃうんだよね",
  };

  // アイコンごとのツールチップ表示情報
  const tooltipInfo: Record<IconKey, string> = {
    icon1: "これは勉強アイコンです。",
    icon2: "これは運動部アイコンです。",
    icon3: "これは文化部アイコンです。",
    icon4: "これは恋愛アイコンです。",
    icon5: "これはいけないことアイコンです♡",
    icon6: "これは美容アイコンです。",
    icon7: "これはSNS(Twitter)アイコンです。",
    icon8: "これはSNS(Instagram)アイコンです。",
  };

  useEffect(() => {
    setCurrentSerifu("初めまして！");
  }, []);

  const handleClick = (icon: IconKey) => {
    if (count === years.length - 1) return;

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

  const handleMouseEnter = (icon: IconKey, event: React.MouseEvent<HTMLImageElement>) => {
    if (count === years.length - 1) return;

    setHoveredIcon(icon);
    setCurrentSerifu(serifuMap[icon]); // セリフはセリフマップから設定
    const { top, left } = event.currentTarget.getBoundingClientRect();
    setTooltipPosition({ top: top - 50, left: left + 50 });
  };

  const handleMouseLeave = () => {
    setHoveredIcon(null);
    setTooltipPosition(null);
    setCurrentSerifu("デフォルトのセリフです。");
  };

  const renderHearts = (count: number) => {
    return '♥'.repeat(count) + '♡'.repeat(10 - count);
  };

  return (
    <div className='w-full h-screen overflow-hidden flex bg-pink-base relative'>
      <img
        src='/kumo.png'
        alt='kumo'
        className='w-full z-0 absolute bottom-0 left-0 opacity-70'
      />
      <div className='w-1/2 h-screen z-10 relative'>
        <img
          src='/zikan.png'
          alt='zikan'
          className='w-240 h-auto mx-4 mt-4 object-cover'
        />
        <div className='absolute top-40 left-88 z-20 font-yomogi'>
          <p className='bg-yellow-100 p-2 rounded-lg text-3xl font-bold'>{years[count].grade}</p>
          <p className='bg-yellow-100 p-2 rounded-lg text-3xl'>{years[count].term}</p>
        </div>

        <Serifu currentSerifu={currentSerifu} />
        <img
          src='/fukidasi2.png'
          alt='serifu'
          className='w-280 h-auto ml-200 -mt-12 object-cover'
        />
        <div className='w-1/2 h-auto ml-150 -mt-48 flex items-center'>
          <img
            src='/girl.png'
            alt='girl'
            className='w-460 h-auto object-cover'
          />
        </div>
      </div>

      <div className='w-1/2 h-screen z-20 relative'>
        <div className='relative'>
          <img
            src='/status.png'
            alt='status'
            className='w-480 h-auto object-cover'
          />
          <Status riajuu={riajuu} seiseki={seiseki} yami={yami} renderHearts={renderHearts} />
        </div>
        <div className='w-3/4 h-auto flex flex-col px-20 py-20 bg-white'>
          <IconGrid
            handleClick={handleClick}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
          />
        </div>
        {count === years.length - 1 && (
          <div className='absolute bottom-10 left-300'>
            <button
              className='px-6 py-3 bg-green-500 text-white text-xl rounded-full shadow-lg hover:bg-green-700 transition'
              onClick={() => navigate('/sotugyou')}
            >
              卒業
            </button>
          </div>
        )}
      </div>

      {/* Tooltipにはアイコンごとのツールチップ情報を渡す */}
      <Tooltip hoveredIcon={hoveredIcon} tooltipPosition={tooltipPosition} iconInfo={tooltipInfo} />
    </div>
  );
};

