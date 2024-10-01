import React from 'react'
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useNavigate,
} from 'react-router-dom'
import { Audio } from './components/Audio'
import { AudioProvider } from './components/AudioContext'
import { Onna } from './components/onna'
import { Otoko } from './components/otoko'
import { Seibetsu } from './components/seibetsu'

const Home: React.FC = () => {
  const navigate = useNavigate() // 遷移用のフック

  return (
    <div className="w-full h-screen bg-yellow-100 relative">
      <div className="flex h-full justify-center">
        <img
          src="/hyousi.png"
          alt="Hyousi"
          className="w-auto h-full object-cover"
        />
        <div className="w-full h-auto absolute flex justify-end font-yomogi inset-0 z-10">
          <Audio />
        </div>
        <div className="w-full h-auto absolute inset-0 font-yomogi">
          <div className="w-full h-screen flex flex-col justify-center items-center ">
            <h1 className="mt-32 pb-32 text-4xl text-black">
              ときめき☆彡高専だいあり～♡
            </h1>
            <div className="flex justify-center items-center px-12 h-20 rounded bg-pink-300 hover:bg-pink-400 transition-colors duration-300">
              {/* ボタンをクリックしたときにSeibetsu.tsxに遷移 */}
              <button
                className="text-3xl text-black z-10"
                onClick={() => {
                  navigate('/seibetsu') // ページ遷移
                }}
              >
                すたーと
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const App: React.FC = () => {
  return (
    <AudioProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/seibetsu/*" element={<Seibetsu />} />
          <Route path="/onna" element={<Onna />} />
          <Route path="/otoko" element={<Otoko />} />
        </Routes>
      </Router>
    </AudioProvider>
  )
}

export default App
