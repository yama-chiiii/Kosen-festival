import { useNavigate } from 'react-router-dom'

export const Seibetsu = () => {
  const navigate = useNavigate() // ページ遷移用のフック

  return (
    <div className="w-full h-screen flex flex-col items-center bg-pink-base ">
      {/* <div className="w-full h-auto absolute flex justify-end font-yomogi">
        <Audio />
      </div> */}
      <img
        src="/fukidasi.png"
        alt="Fukidasi"
        className="w-auto h-60 object-cover"
      ></img>
      <div className="flex flex-row">
        <img
          src="/onago.png"
          alt="onago"
          className="w-auto h-60 mx-12 object-cover"
        ></img>
        <img
          src="/oigo.png"
          alt="oigo"
          className="w-auto h-60 mx-12 object-cover"
        ></img>
      </div>
      <div className="w-full flex justify-center mt-12">
        <button
          className="w-1/12 h-200 mx-14 bg-yellow-300"
          onClick={() => navigate('/onna')}
        >
          おんなのこ決定
        </button>
        <button
          className="w-1/12 h-200 mx-14 bg-yellow-300"
          onClick={() => navigate('/otoko')}
        >
          おとこのこ決定
        </button>
      </div>
    </div>
  )
}
