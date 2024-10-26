import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


export const Kekka = () => {
  const navigate = useNavigate();
  const { resultType = 'Default_girl' } = useParams();

  // 条件に基づいて表示テキストと画像パスを決定
  const getResultText = () => {
    switch (resultType) {
      case 'Jirai':
        return { title: '地雷高専生', description: 'じらいじょしです', imagePath: '/zirai.png' };
      case 'Wotaku_girl':
        return { title: 'ヲタク女子高専生', description: 'をたくです', imagePath: '/wotaku_girl.png' };
      case 'Gal':
        return { title: 'ギャル高専生', description: 'ぎゃう', imagePath: '/gal_girl.png' };
      case 'Riunen':
        return { title: '留年生', description: 'りうねん', imagePath: '/riunen.png' };
      case 'majime':
        return { title: '真面目系高専生', description: 'まじめだんしです', imagePath: '/mazime_boy.png'};
      case 'Wotaku_boy':
        return { title: 'ヲタク男子高専生', description: 'めがねかけてる高専生は8割なにかのオタクそのため人権はあるし、なんならクラスで無双してたりするしかし社会にでたときに高専とのギャップにやられることも多い<br/>口癖は「え、 君もそのゲームやってんのwwどゅふwこんど語ろうよwちなみに語りだすとながいよ？ww」', imagePath: '/wotaku_boy.png'};
      case 'youkya':
        return { title: '陽キャ系高専生', description: 'ようきゃです', imagePath: '/gal_boy.png'};
      case 'Default_boy' :
        return { title: '大学生風高専生', description: 'でふぉです', imagePath: '/default_boy.png'};
      default:
        return { title: '大学生風高専生', description: 'でふぉです', imagePath: '/default_girl.png' };
    }
  };

  const { title, description, imagePath } = getResultText();

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  console.log("Result Type:", resultType); // デバッグ用

  return (
    <div className='w-full h-screen flex bg-pink-base relative'>
      <img
        src='/kumo.png'
        alt='kumo'
        className='w-full z-0 absolute bottom-0 left-0 opacity-70'
      />
      <img
        src='/flour.png'
        alt='hana'
        className='w-full z-0 absolute bottom-0 left-0 opacity-60'
      />
      <div className='w-4/12 h-screen flex flex-row z-10'>
        <img
          src={imagePath}
          alt='result_image'
          className='w-auto h-full ml-160 mt-100'
        />
      </div>
      <div className='flex w-1/12 h-auto flex-col-reverse mb-12'>
        <button
          className='bg-pink-300 p-12 text-white text-xl rounded shadow-lg hover:bg-pink-400 transition z-10'
          onClick={() => navigate('/kisekae', { state: { imagePath } })}
        >
          きせかえ
        </button>
      </div>
      <div className='w-6/12 h-screen flex-col relative'>
        <div className='w-full h-2/3 flex justify-center z-10'>
          <div className='w-1/2 h-300 mt-140 flex justify-center bg-white'>
            <div className='w-full flex flex-col ml-20'>
              <p className='mt-20  ml-40 text-2xl font-yomogi'>
                アイテムゲット！
              </p>
            </div>
            <div className='w-300 mt-100 -ml-300 flex flex-row'>
            <img
                src='/default_gitlItem.png'
                alt='default_gitlItem'
                className='w-1/3 h-auto object-contain -mt-40 -ml-10'
              />
            <div className='w-1/2 flex justify-start items-center text-xl font-yomogi ml-20 -mt-30'>
              <p>{description}</p>
            </div>
            </div>
          </div>
        </div>
        <div className='w-full h-1/3 flex justify-center z-10 relative'>
          <img
            src='/haguruma.png'
            alt='haguruma'
            className='w-auto h-full'
          />
          <div className='absolute inset-0 flex justify-center items-center z-20'>
            <p className='text-center text-black text-4xl font-yomogi mt-80 whitespace-pre-line'>
              {title}
              <br />
              完成!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
