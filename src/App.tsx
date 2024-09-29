import React from 'react'
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useNavigate,
} from 'react-router-dom'
import { Seibetsu } from './components/seibetsu'

const Home: React.FC = () => {
  const navigate = useNavigate() // 遷移用のフック

  return (
    <div className="w-full h-screen bg-yellow-100 relative">
      <div className="flex h-full justify-center">
        <img
          src="/Hyousi.png"
          alt="Hyousi"
          className="w-auto h-full object-cover"
        />
        <div className="w-full h-auto absolute inset-0 flex flex-col justify-center items-center font-yomogi">
          <h1 className="pb-32 text-4xl text-black">
            ときめき☆彡高専だいあり～♡
          </h1>
          <div className="flex justify-center items-center px-12 h-20 rounded bg-pink-300 hover:bg-pink-400 transition-colors duration-300">
            {/* ボタンをクリックしたときにSeibetsu.tsxに遷移 */}
            <button
              className="text-3xl text-black"
              onClick={() => navigate('/seipetu')}
            >
              すたーと
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/seipetu" element={<Seibetsu />} />
      </Routes>
    </Router>
  )
}

export default App
