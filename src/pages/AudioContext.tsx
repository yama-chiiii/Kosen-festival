import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'

type AudioContextType = {
  isPlaying: boolean
  handlePlay: () => void
  handleStop: () => void
}

const AudioContext = createContext<AudioContextType | undefined>(undefined)

export const AudioProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  // audioRefの参照状態を確認するためのuseEffect
  useEffect(() => {
    if (audioRef.current) {
      console.log('audioRef is correctly set:', audioRef.current)
    } else {
      console.error('audioRef is not correctly set')
    }
  }, [])

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play()
      setIsPlaying(true)
    }
  }

  const handleStop = () => {
    if (audioRef.current) {
      audioRef.current.pause()
      setIsPlaying(false)
    }
  }

  return (
    <AudioContext.Provider value={{ isPlaying, handlePlay, handleStop }}>
      {children}
      {/* グローバルにオーディオ要素を配置 */}
      <audio ref={audioRef} src="/music.mp3" loop />
    </AudioContext.Provider>
  )
}

export const useAudio = () => {
  const context = useContext(AudioContext)
  if (!context) {
    throw new Error('useAudio must be used within an AudioProvider')
  }
  return context
}
