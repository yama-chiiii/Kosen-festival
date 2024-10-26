
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
    icon1: "勉強頑張ってる男子はモテるよ(たぶん)",
    icon2: "運動部は元気が一番！",
    icon3: "文化部にも人権はある！",
    icon4: "恋愛は慎重にね。",
    icon5: "いけないことしてない？",
    icon6: "男子も美容に気をつかおう！",
    icon7: "女子が映える写真撮ってあげられる？",
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
    setCurrentSerifu("よろしく！");
  }, []);

  const handleClick = (icon: IconKey) => {
    if (count === years.length - 1) return;

    switch (icon) {
      case 'icon1':
        setSeiseki(prev => Math.min(Math.max(prev + 3, 0), 10));
        setYami(prev => Math.min(Math.max(prev - 1, 0), 10));
        break;
      case 'icon2':
        setRiajuu(prev => Math.min(Math.max(prev + 1, 0), 10));
        setYami(prev => Math.min(Math.max(prev + 1, 0), 10));
        break;
      case 'icon3':
        setRiajuu(prev => Math.min(Math.max(prev - 1, 0), 10));
        setSeiseki(prev => Math.min(Math.max(prev + 3, 0), 10));
        break;
      case 'icon4':
        setRiajuu(prev => Math.min(Math.max(prev + 3, 0), 10));
        setYami(prev => Math.min(Math.max(prev - 1, 0), 10));
        break;
      case 'icon5':
        setRiajuu(prev => Math.min(Math.max(prev + 3, 0), 10));
        setSeiseki(prev => Math.min(Math.max(prev - 1, 0), 10));
        break;
      case 'icon6':
        setSeiseki(prev => Math.min(Math.max(prev - 1, 0), 10));
        setYami(prev => Math.min(Math.max(prev + 3, 0), 10));
        break;
      case 'icon7':
        setRiajuu(prev => Math.min(Math.max(prev - 1, 0), 10));
        setYami(prev => Math.min(Math.max(prev + 3, 0), 10));
        break;
      case 'icon8':
        setRiajuu(prev => Math.min(Math.max(prev + 1, 0), 10));
        setSeiseki(prev => Math.min(Math.max(prev + 1, 0), 10));
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

  const getResult = () => {
    if (yami <= 0 && seiseki >= 6) return 'majime';
    if (riajuu >= 6 && yami >= 6) return 'Wotaku_boy';
    if (riajuu >= 6 && seiseki >= 4) return 'youkya';
    if (seiseki <= 2) return 'Riunen';
    return 'Default_boy';
  };

  interface StatusProps {
    riajuu: number;
    seiseki: number;
    yami: number;
    renderHearts: (count: number) => string;
  }

  const Status: React.FC<StatusProps> = ({ riajuu, seiseki, yami, renderHearts }) => {
    console.log('リア充度:', riajuu);
    console.log('せいせき:', seiseki);
    console.log('やみ度:', yami);

    return (
      <div className='absolute top-150 left-100 z-40 font-yomogi font-base text-xl'>
        <div>
          <p>リア充度 <span className='text-red-500'>{renderHearts(riajuu)}</span></p>
          <p>せいせき <span className='text-red-500'>{renderHearts(seiseki)}</span></p>
          <p>やみ度 <span className='text-red-500'>{renderHearts(yami)}</span></p>
        </div>
      </div>
    );
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
          className='w-240 h-auto mx-4 mt-4 object-cover potision:absolute'
        />
        <div className='absolute top-40 left-88 z-20 font-yomogi'>
          <p className='bg-yellow-100 p-2 rounded-lg text-3xl font-bold'>{years[count].grade}</p>
          <p className='bg-yellow-100 p-2 rounded-lg text-3xl'>{years[count].term}</p>
        </div>

        <Serifu currentSerifu={currentSerifu} />
        <img
          src='/serifu2.png'
          alt='serifu'
          className='w-280 h-auto  z-index 1 potision:relative; ml-350 -mt-70'
        />
        <div className='w-1/3 h-auto flex items-center '>
          <img 
            src='/boy.png'
            alt='boy'
            className='w-460 h-auto object-contain potision:absolute -mt-100 ml-200'
          />
        </div>
      </div>

      <div className='w-1/2 h-screen z-20 relative '>
        <div className='relative ml-30'>
          <img
            src='/status.png'
            alt='status'
            className='w-480 h-auto object-cover '
          />
          <Status riajuu={riajuu} seiseki={seiseki} yami={yami} renderHearts={renderHearts} />
        </div>
        <div className='w-3/4 h-auto flex flex-col px-20 py-20 bg-white ml-35'>
          <IconGrid
            handleClick={handleClick}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
          />
        </div>
        {count === years.length - 1 && (
          <div className='absolute bottom-30 left-230'>
            <button
              className='px-11 py-5 bg-blue-500 text-white text-4xl rounded-2xl shadow-lg hover:bg-blue-700 transition'
              onClick={() => navigate(`/sotugyou?resultType=${getResult()}`)}
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
