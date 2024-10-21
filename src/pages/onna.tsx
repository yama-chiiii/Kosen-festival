import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import IconGrid from './components/IconGrid';
import Serifu from './components/Serifu';
import Tooltip from './components/Tooltip';

type IconKey = 'icon1' | 'icon2' | 'icon3' | 'icon4' | 'icon5' | 'icon6' | 'icon7' | 'icon8';

export const Onna = () => {
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
        // 勉強
        setRiajuu(prevRiajuu => Math.max(prevRiajuu - 1, 0));  // リア充度は0未満にならない
        setSeiseki(prevSeiseki => Math.min(prevSeiseki + 2, 10));  // せいせきは10を超えない
        setYami(prevYami => Math.min(prevYami + 1, 10));  // やみ度は10を超えない
        break;

      case 'icon2':
        // 運動部
        setRiajuu(prevRiajuu => Math.min(prevRiajuu + 1, 10));  // リア充度は10を超えない
        setSeiseki(prevSeiseki => Math.min(prevSeiseki + 1, 10));  // せいせきは10を超えない
        setYami(prevYami => Math.max(prevYami - 1, 0));  // やみ度は0未満にならない（修正）
        break;

      case 'icon3':
        // 文化部
        setRiajuu(prevRiajuu => Math.max(prevRiajuu - 1, 0));  // リア充度は0未満にならない（修正）
        setSeiseki(prevSeiseki => Math.min(prevSeiseki + 1, 10));  // せいせきは10を超えない
        break;

      case 'icon4':
        // 恋愛
        setRiajuu(prevRiajuu => Math.min(prevRiajuu + 2, 10));  // リア充度は10を超えない
        setSeiseki(prevSeiseki => Math.min(prevSeiseki + 1, 10));  // せいせきは10を超えない
        setYami(prevYami => Math.min(prevYami + 1, 10));  // やみ度は10を超えない
        break;

      case 'icon5':
        // よからぬこと
        setRiajuu(prevRiajuu => Math.min(prevRiajuu + 1, 10));  // リア充度は10を超えない
        setSeiseki(prevSeiseki => Math.max(prevSeiseki - 3, 0));  // せいせきは0未満にならない（修正）
        setYami(prevYami => Math.min(prevYami + 1, 10));  // やみ度は10を超えない
        break;

      case 'icon6':
        // 美容
        setRiajuu(prevRiajuu => Math.min(prevRiajuu + 1, 10));  // リア充度は10を超えない
        setSeiseki(prevSeiseki => Math.max(prevSeiseki - 1, 0));  // せいせきは10を超えない（修正）
        setYami(prevYami => Math.max(prevYami - 1, 0));  // やみ度は10を超えない
        break;

      case 'icon7':
        // Instagram
        setRiajuu(prevRiajuu => Math.min(prevRiajuu + 1, 10));  // リア充度は10を超えない
        setSeiseki(prevSeiseki => Math.max(prevSeiseki - 1, 0));  // せいせきは0未満にならない（修正）
        setYami(prevYami => Math.min(prevYami + 1, 10));  // やみ度は10を超えない
        break;

      case 'icon8':
        // Twitter
        setRiajuu(prevRiajuu => Math.max(prevRiajuu - 1, 0));  // リア充度は0未満にならない
        setSeiseki(prevSeiseki => Math.max(prevSeiseki - 1, 0));  // せいせきは0未満にならない
        setYami(prevYami => Math.min(prevYami + 1, 10));  // やみ度は10を超えない
        break;
    }

    setCount(prevCount => (prevCount < years.length - 1 ? prevCount + 1 : prevCount));
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
    const validCount = Math.max(count, 0);  // countが負の値の場合、0に制限する
    return '♥'.repeat(validCount) + '♡'.repeat(10 - validCount);
  };

  const getResult = () => {
    if (yami >= 7 && seiseki <= 4) return 'Jirai';
    if (riajuu <= 5 && yami <= 7) return 'Wotaku_girl';
    if (riajuu >= 7 && yami >= 5) return 'Gal';
    if (seiseki <= 2) return 'Riunen';
    return 'Default_girl';
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
          className='w-240 h-auto mx-4 mt-4 object-cover'
        />
        <div className='absolute top-40 left-88 z-20 font-yomogi'>
          <p className='bg-yellow-100 p-2 rounded-lg text-3xl font-bold'>{years[count].grade}</p>
          <p className='bg-yellow-100 p-2 rounded-lg text-3xl'>{years[count].term}</p>
        </div>

        <Serifu currentSerifu={currentSerifu} />
        <img
          src='/serifu1.png'
          alt='serifu'
          className='w-280 h-auto ml-240 -mt-70 z-index relative'
        />
        <div className='w-1/3 h-5/6  flex items-center'>
          <img
            src='/girl.png'
            alt='girl'
            className='w-460 h-5/6 object-contain absolute -mt-100 ml-150'
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
          <div className='absolute bottom-100 left-220'>
            <button
              className='w-120 h-40 p-8 bg-pink-300 text-white text-xl rounded shadow-lg hover:bg-pink-400 transition z-10'
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
