export const Onna = () => {
  return (
    <div className='w-full h-screen flex bg-pink-base'>
      <div className='w-1/2 h-screen'>
        <img
          src='/zikan.png'
          alt='zikan'
          className='w-240 h-auto mx-4 mt-4 mb-4 object-cover'
        ></img>
        <img
          src='/serifu1.png'
          alt='onag'
          className='w-320 h-auto ml-200 object-cover'
        ></img>
        <img
          src='/girl.png'
          alt='onago'
          className='w-200 h-auto ml-260 object-cover'
        ></img>
      </div>
      <div className='w-1/2 h-screen'>
        <div className='flex flex-row-reverse'>
          <img
            src='/status.png'
            alt='status'
            className='w-480 h-auto object-cover'
          ></img>
        </div>
        <div className='w-3/4 h-screen bg-white'></div>
      </div>
    </div>
  )
}
