import { useNavigate } from 'react-router-dom'

export const Seibetsu = () => {
  const navigate = useNavigate() // ページ遷移用のフック

  return (
    <div className='w-full h-screen overflow-hidden flex flex-col items-center bg-pink-base'>
      <img
        src='/fukidasi.png'
        alt='Fukidasi'
        className='w-auto h-1/3 mt-12 ml-8 object-cover'
      ></img>
      <div className='w-auto h-2/3 flex flex-row justify-center'>
        <div className='relative w-full flex flex-col justify-center items-center'>
          <img
            src='/girl.png'
            alt='onago'
            className='w-1/2 mt-20 object-cover relative'
          ></img>
          <img
            src='/frame1.png'
            alt='frame'
            className='w-2/3 absolute top-0 left-0 mx-40 object-cover pointer-events-none'
          ></img>
          <button
            className='absolute top-440 transform -translate-y-1/2 flex justify-center items-center rounded-xl mx-40 px-24 py-12 bg-pink-dark font-yomogi text-3xl'
            onClick={() => navigate('/onna')}
          >
            入学
          </button>
        </div>
        <div className='relative w-full flex flex-col justify-center items-center'>
        <img
            src='/boy.png'
            alt='onago'
            className='w-1/3 mt-20 object-cover relative'
          ></img>
          <img
            src='/frame2.png'
            alt='frame'
            className='w-2/3 absolute top-0 left-0 mx-40 object-cover pointer-events-none'
          ></img>
          <button
            className='absolute top-440 transform -translate-y-1/2 flex justify-center items-center rounded-xl mx-40 px-24 py-12 bg-blue-dark font-yomogi text-3xl'
            onClick={() => navigate('/otoko')}
          >
            入学
          </button>
        </div>
      </div>
    </div>
  )
}
