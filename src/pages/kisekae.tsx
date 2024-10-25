export const Kisekae = () => {
  return (
    <div className='w-full h-screen flex bg-pink-base relative'>
      <img
        src='/kumo.png'
        alt='kumo'
        className='w-full z-0 absolute bottom-0 left-0'
      />
      <div className='w-1/3 h-screen z-10'>
        <img
          src='/default_girl.png'
          alt='onago'
          className='w-2/3 h-auto ml-160 mt-100'
        />
      </div>
      <div className='w-2/3 h-screen relative z-20 flex flex-col items-center'>
        <div className="w-full h-screen flex flex-row justify-center">
          <div className='w-200 h-200 p-20 mx-32 my-12 bg-white text-black text-3xl text-center'>
            myai
          </div>
          <div className='w-200 h-200 p-20 mx-32 my-12 bg-white text-black text-3xl text-center'>
            myai
          </div>
        </div>
        <div className="w-full h-screen flex flex-row justify-center">
          <div className='w-200 h-200 p-20 mx-32 my-12 bg-white text-black text-3xl text-center'>
            myai
          </div>
          <div className='w-200 h-200 p-20 mx-32 my-12 bg-white text-black text-3xl text-center'>
            myai
          </div>
        </div>
        <div className="w-full h-screen flex flex-row justify-center">
          <div className='w-200 h-200 p-20 mx-32 my-12 bg-white text-black text-3xl text-center'>
            myai
          </div>
          <div className='w-200 h-200 p-20 mx-32 my-12 bg-white text-black text-3xl text-center'>
            myai
          </div>
        </div>
      </div>
    </div>
  )
}
