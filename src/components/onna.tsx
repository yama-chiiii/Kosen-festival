import React, { useState } from 'react';

// 各アイコンのキーをリテラル型で定義
type IconKey = 'icon1' | 'icon2' | 'icon3' | 'icon4' | 'icon5' | 'icon6' | 'icon7' | 'icon8';

export const Onna = () => {
  const [count, setCount] = useState(0);
  const [hoveredIcon, setHoveredIcon] = useState<IconKey | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState<{ top: number; left: number } | null>(null);
  const [currentSerifu, setCurrentSerifu] = useState(''); // 現在のセリフを保存

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

  const serifuList = [
    "今日はいい天気だね！",
    "宿題終わった？",
    "明日はどこに行こうか？",
    "ちょっと休憩しようよ。",
    "何か美味しいもの食べたい！",
    "一緒に勉強しよう！",
    "新しい映画を見に行こう！",
    "この服、似合ってるかな？",
  ];

  const handleClick = () => {
    setCount((prevCount) => (prevCount < years.length - 1 ? prevCount + 1 : prevCount));
    const randomSerifu = serifuList[Math.floor(Math.random() * serifuList.length)];
    setCurrentSerifu(randomSerifu);
  };

  const renderHoveredInfo = () => {
    if (!hoveredIcon || !tooltipPosition) return null;
    return (
      <div
        className='absolute p-4 bg-yellow-200 rounded-lg shadow-lg w-64'
        style={{ top: `${tooltipPosition.top}px`, left: `${tooltipPosition.left}px`, zIndex: 9999 }}
      >
        <p className='text-lg font-bold'>アイコンに関する情報がここに表示されます</p>
      </div>
    );
  };

  const handleMouseEnter = (icon: IconKey, event: React.MouseEvent<HTMLImageElement>) => {
    setHoveredIcon(icon);
    const { top, left } = event.currentTarget.getBoundingClientRect();
    setTooltipPosition({ top: top - 50, left: left + 50 });
  };

  const handleMouseLeave = () => {
    setHoveredIcon(null);
    setTooltipPosition(null);
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

        {/* 「○年生 前期」の部分を表示 */}
        <div className='absolute top-10 left-10 z-20'>
          <p className='bg-yellow-100 p-2 rounded-lg text-xl font-bold'>{years[count].grade}</p>
          <p className='bg-yellow-100 p-2 rounded-lg text-xl'>{years[count].term}</p>
        </div>

        {/* 女の子のセリフをserifu1の上に表示 */}
        <div className='absolute top-0 left-0 ml-52 mt-10 z-30'>
          <p className='bg-white p-2 rounded-lg shadow-lg text-xl font-yomogi'>{currentSerifu}</p>
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
              <p>リア充度 <span className='text-red-500'>♡♡♡♡♡♡♡♡♡♡</span></p>
              <p>せいせき <span className='text-red-500'>♥♥♥♡♡♡♡♡♡♡</span></p>
              <p>やみ度 <span className='text-red-500'>♥♥♥♥♡♡♡♡♡♡</span></p>
            </div>
          </div>
        </div>
        <div className='w-3/4 h-280 flex flex-col px-20 py-20 bg-white'>
          <div className="flex flex-row justify-around mb-32 mt-12">
            <img
              src='/icon1.png'
              alt='べんきょう'
              className='w-80 h-auto cursor-pointer'
              onClick={handleClick}
              onMouseEnter={(e) => handleMouseEnter('icon1', e)}
              onMouseLeave={handleMouseLeave}
            ></img>
            <img
              src='/icon2.png'
              alt='部活(うんどう)'
              className='w-80 h-auto cursor-pointer'
              onClick={handleClick}
              onMouseEnter={(e) => handleMouseEnter('icon2', e)}
              onMouseLeave={handleMouseLeave}
            ></img>
            <img
              src='/icon3.png'
              alt='部活(ぶんか)'
              className='w-80 h-auto cursor-pointer'
              onClick={handleClick}
              onMouseEnter={(e) => handleMouseEnter('icon3', e)}
              onMouseLeave={handleMouseLeave}
            ></img>
            <img
              src='/icon4.png'
              alt='れんあい'
              className='w-80 h-auto cursor-pointer'
              onClick={handleClick}
              onMouseEnter={(e) => handleMouseEnter('icon4', e)}
              onMouseLeave={handleMouseLeave}
            ></img>
          </div>
          <div className="flex flex-row justify-around">
            <img
              src='/icon5.png'
              alt='いけないこと♡'
              className='w-auto h-80 cursor-pointer'
              onClick={handleClick}
              onMouseEnter={(e) => handleMouseEnter('icon5', e)}
              onMouseLeave={handleMouseLeave}
            ></img>
            <img
              src='/icon6.png'
              alt='びよう'
              className='w-auto h-80 cursor-pointer'
              onClick={handleClick}
              onMouseEnter={(e) => handleMouseEnter('icon6', e)}
              onMouseLeave={handleMouseLeave}
            ></img>
            <img
              src='/icon7.png'
              alt='SNS(Twitter)'
              className='w-auto h-80 cursor-pointer'
              onClick={handleClick}
              onMouseEnter={(e) => handleMouseEnter('icon7', e)}
              onMouseLeave={handleMouseLeave}
            ></img>
            <img
              src='/icon8.png'
              alt='SNS(Instagram)'
              className='w-auto h-80 cursor-pointer'
              onClick={handleClick}
              onMouseEnter={(e) => handleMouseEnter('icon8', e)}
              onMouseLeave={handleMouseLeave}
            ></img>
          </div>
        </div>
      </div>

      {renderHoveredInfo()}
    </div>
  );
};
