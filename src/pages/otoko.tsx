import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import IconGrid from './components/IconGrid'
import Serifu from './components/Serifu'
import Tooltip from './components/Tooltip'

type IconKey =
  | 'icon1'
  | 'icon2'
  | 'icon3'
  | 'icon4'
  | 'icon5'
  | 'icon6'
  | 'icon7'
  | 'icon8'

export const Otoko = () => {
  const [count, setCount] = useState(0)
  const [hoveredIcon, setHoveredIcon] = useState<IconKey | null>(null)
  const [tooltipPosition, setTooltipPosition] = useState<{
    top: number
    left: number
  } | null>(null)
  const [currentSerifu, setCurrentSerifu] = useState('きょうも元気100％！')
  const [seiseki, setSeiseki] = useState(0)
  const [riajuu, setRiajuu] = useState(0)
  const [yami, setYami] = useState(0)
  const navigate = useNavigate()

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
  ]

  // アイコンごとのセリフ
  const serifuMap: Record<IconKey, string> = {
    icon1: '勉強頑張ってる男子はモテるよ(たぶん)',
    icon2: '運動部は元気が一番！',
    icon3: '文化部にも人権はある！',
    icon4: '恋愛は慎重にね。',
    icon5: 'いけないことしてない？',
    icon6: '男子も美容に気をつかおう！',
    icon7: '女子が映える写真撮ってあげられる？',
    icon8: '結局もどってきちゃうんだよね',
  }

  // アイコンごとのツールチップ表示情報
  const tooltipInfo: Record<IconKey, string> = {
    icon1: '勉強。',
    icon2: '部活(運動部)',
    icon3: '部活(文化部)',
    icon4: '恋愛',
    icon5: 'いけないこと♡',
    icon6: '美容',
    icon7: 'Instagram',
    icon8: 'Twitter',
  }

  useEffect(() => {
    setCurrentSerifu('よろしく！')
  }, [])

  const handleClick = (icon: IconKey) => {
    if (count === years.length - 1) return;

    switch (icon) {
      case 'icon1':
        setSeiseki(prevSeiseki => Math.min(prevSeiseki + 3, 10));
        setYami(prevYami => Math.min(prevYami + 1, 10));
        break;

      case 'icon2':
        setRiajuu(prevRiajuu => Math.min(prevRiajuu + 2, 10));
        break;

      case 'icon3':
        setRiajuu(prevRiajuu => Math.max(prevRiajuu - 1, 0));
        setSeiseki(prevSeiseki => Math.min(prevSeiseki + 1, 10));
        break;

      case 'icon4':
        setRiajuu(prevRiajuu => Math.min(prevRiajuu + 3, 10));
        setYami(prevYami => Math.min(prevYami + 1, 10));
        break;

      case 'icon5':
        setSeiseki(prevSeiseki => Math.max(prevSeiseki - 3, 0));
        setYami(prevYami => Math.min(prevYami + 1, 10));
        break;

      case 'icon6':
        setRiajuu(prevRiajuu => Math.min(prevRiajuu + 2, 10));
        setSeiseki(prevSeiseki => Math.max(prevSeiseki - 1, 0));
        setYami(prevYami => Math.max(prevYami - 1, 0));
        break;

      case 'icon7':
        setRiajuu(prevRiajuu => Math.min(prevRiajuu + 1, 10));
        setSeiseki(prevSeiseki => Math.max(prevSeiseki - 1, 0));
        break;

      case 'icon8':
        setRiajuu(prevRiajuu => Math.max(prevRiajuu - 2, 0));
        setSeiseki(prevSeiseki => Math.max(prevSeiseki - 1, 0));
        break;
    }

    setCount(prevCount => (prevCount < years.length - 1 ? prevCount + 1 : prevCount));
  };



  const handleMouseEnter = (
    icon: IconKey,
    event: React.MouseEvent<HTMLImageElement>,
  ) => {
    if (count === years.length - 1) return

    setHoveredIcon(icon)
    setCurrentSerifu(serifuMap[icon]) // セリフはセリフマップから設定
    const { top, left } = event.currentTarget.getBoundingClientRect()
    setTooltipPosition({ top: top - 50, left: left + 50 })
  }

  const handleMouseLeave = () => {
    setHoveredIcon(null)
    setTooltipPosition(null)
    setCurrentSerifu('よろしく！')
  }

  const renderHearts = (count: number) => {
    return '♥'.repeat(count) + '♡'.repeat(10 - count)
  }

  const getResult = () => {
    if (seiseki <= 0) return 'Riunen' // 5%
    if (yami >= 5 && seiseki >= 7) return 'majime'
    if (riajuu <= 2 && seiseki <= 4) return 'Wotaku_boy' // 25%
    if (riajuu >= 7 && yami <= 3) return 'youkya' // 15%
    return 'Default_boy'
  }

  interface StatusProps {
    riajuu: number
    seiseki: number
    yami: number
    renderHearts: (count: number) => string
  }

  const Status: React.FC<StatusProps> = ({
    riajuu,
    seiseki,
    yami,
    renderHearts,
  }) => {
    console.log('リア充度:', riajuu)
    console.log('せいせき:', seiseki)
    console.log('やみ度:', yami)

    return (
      <div className='absolute top-150 left-100 z-40 font-yomogi font-base text-xl'>
        <div>
          <p>
            リア充度{' '}
            <span className='text-red-500'>{renderHearts(riajuu)}</span>
          </p>
          <p>
            せいせき{' '}
            <span className='text-red-500'>{renderHearts(seiseki)}</span>
          </p>
          <p>
            やみ度 <span className='text-red-500'>{renderHearts(yami)}</span>
          </p>
        </div>
      </div>
    )
  }

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
          <p className='bg-yellow-100 p-2 rounded-lg text-3xl font-bold'>
            {years[count].grade}
          </p>
          <p className='bg-yellow-100 p-2 rounded-lg text-3xl'>
            {years[count].term}
          </p>
        </div>

        <Serifu currentSerifu={currentSerifu} />
        <img
          src='/serifu3.png'
          alt='serifu'
          className='w-280 h-auto  z-index 1 potision:relative; ml-240 -mt-70'
        />
        <div className='w-1/3 h-auto flex items-center '>
          <img
            src='/boy.png'
            alt='boy'
            className='w-460 h-auto object-contain potision:absolute -mt-45 ml-280'
          />
        </div>
      </div>

      <div className='w-1/2 h-screen z-20 relative '>
        <div className='relative ml-30'>
          <img
            src='/bluestatus.png'
            alt='status'
            className='w-480 h-auto object-cover '
          />
          <Status
            riajuu={riajuu}
            seiseki={seiseki}
            yami={yami}
            renderHearts={renderHearts}
          />
        </div>
        <div className='w-5/6 h-auto'>
          <img
            src='/blueframe.png'
            alt='cat'
            className='w-10/12 h-auto absolute ml-3 -mt-42'
          />
          <div className='w-5/6 h-auto flex flex-col px-20 py-20  ml-45 mt-30 relative'>
            <IconGrid
              handleClick={handleClick}
              handleMouseEnter={handleMouseEnter}
              handleMouseLeave={handleMouseLeave}
            />
          </div>
        </div>
        {count === years.length - 1 && (
          <div className='w-4/5 absolute flex justify-center'>
            <button
              className='px-11 py-5 mt-15 bg-blue-300 text-white text-4xl rounded-2xl shadow-lg hover:bg-blue-400 transition font-yomogi'
              onClick={() => navigate(`/sotugyou?resultType=${getResult()}`)}
            >
              卒業
            </button>
          </div>
        )}
      </div>

      {/* Tooltipにはアイコンごとのツールチップ情報を渡す */}
      <Tooltip
        hoveredIcon={hoveredIcon}
        tooltipPosition={tooltipPosition}
        iconInfo={tooltipInfo}
      />
    </div>
  )
}
