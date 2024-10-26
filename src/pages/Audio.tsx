import { useAudio } from './AudioContext';

export const Audio = () => {
  const { isPlaying, handlePlay, handleStop } = useAudio();

  return (
    <div className="w-auto h-64 flex justify-center bg-transparent">
      <div className="flex space-x-4">
        <button
          className="w-64 px-6 py-2 rounded-full bg-pink-300 hover:bg-pink-400 transition-colors duration-300 text-3xl text-black"
          onClick={handlePlay}
          disabled={isPlaying} // 再生中は無効化
        >
          ♪
        </button>
        <button
          className="w-64 px-6 py-2 rounded-full bg-gray-300 hover:bg-gray-400 transition-colors duration-300 text-3xl text-black"
          onClick={handleStop}
          disabled={!isPlaying} // 停止中は無効化
        >
          ♪×
        </button>
      </div>
    </div>
  );
};
