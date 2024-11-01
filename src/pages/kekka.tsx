import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const Kekka = () => {
  const navigate = useNavigate()
  const { resultType = 'Default_girl' } = useParams()

  // 条件に基づいて表示テキストと画像パスを決定
  const getResultText = () => {
    const basePath = '/' // 画像ファイルのベースパス
    switch (resultType) {
      case 'Jirai':
        return {
          title: '地雷高専生',
          description:
            'まだ成人に満たない地雷系がストローさして飲んでいる。まいにち４本飲んでカフェイン過多でしのうとしているがしねない。口癖は「LINEの返信は30秒以内で」',
          imagePath: `${basePath}zirai.png`,
          itemsPath: `${basePath}ziraiItem.png`,
        }
      case 'Wotaku_girl':
        return {
          title: 'ヲタク女子高専生',
          description: '高専にいる子は大抵ヲタクだが、それ以外がなかったタイプの子。「腐女子」「夢女子」ともよばれるのがこの子たち。有名なソシャゲは網羅しており、絵を描ける子も多い。',
          imagePath: `${basePath}wotaku_girl.png`,
          itemsPath: `${basePath}wotaku_girlItem.png`,
        }
      case 'Gal':
        return {
          title: 'ギャル高専生',
          description: '「家が近いから」や「ここしかなかった」などよくわからない理由で入学してきたタイプ。そのためその辺にいる陽キャとあまり大差がなく、社会に出てもコミュ力で生きていける。',
          imagePath: `${basePath}gal_girl.png`,
          itemsPath: `${basePath}gal_girlItem.png`,
        }
      case 'Riunen':
        return {
          title: '留年生',
          description: 'すでに成人しているので飲んでいることを隠さない。学校を休んでいたらたぶん二日酔い。別の道に目覚めることが多い。口癖は「ちょっと相性悪かった」',
          imagePath: `${basePath}riunen.png`,
          itemsPath: `${basePath}riunenItem.png`,
        }
      case 'majime':
        return {
          title: '真面目系高専生',
          description: '小学校、中学校の頃から学級委員長をしていたタイプ。数学が得意なので高専に来たがヲタクが多いため戸惑っていた。真面目なので信頼できるしおそらく普通にいいやつではある。',
          imagePath: `${basePath}mazime_boy.png`,
          itemsPath: `${basePath}mazime_boyItem.png`,
        }
      case 'Wotaku_boy':
        return {
          title: 'ヲタク男子高専生',
          description: '学生のうちに味わえる青春を体験することなく成長してしまった哀れな人たち。そんな人たちを代表とするあの食べ物をよく食べている。口癖は「いや別に友達いるしwwww(早口で聞き取れない)」',
          imagePath: `${basePath}wotaku_boy.png`,
          itemsPath: `${basePath}wotaku_boyItem.png`,
        }
      case 'youkya':
        return {
          title: '陽キャ系高専生',
          description: '授業と授業の間で一服しているタイプのやつ。金髪にするが放置してプリンになる。必ず毎日遅刻してきて無言で席に着き寝る口癖は「ヤニたりねぇ」',
          imagePath: `${basePath}gal_boy.png`,
          itemsPath: `${basePath}gal_boyItem.png`,
        }
      case 'Default_boy':
        return {
          title: '大学生風高専生',
          description: '陽キャでも陰キャでもない普通の子。どんな高専人生を歩むのかは様々だが、いい意味でも悪い意味でも普通である。インスタにはス〇バの新作の写真がよくあがっている。',
          imagePath: `${basePath}default_boy.png`,
          itemsPath: `${basePath}default_boyItem.png`,
        }
      default:
        return {
          title: '大学生風高専生',
          description: '陽キャでも陰キャでもない普通の子。どんな高専人生を歩むのかは様々だが、いい意味でも悪い意味でも普通である。インスタにはス〇バの新作の写真がよくあがっている。',
          imagePath: `${basePath}default_girl.png`,
          itemsPath: `${basePath}default_girlItem.png`,
        }
    }
  }

  const { title, description, imagePath, itemsPath } = getResultText()

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  console.log('Result Type:', resultType) // デバッグ用

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
          className='w-auto h-full ml-200 mt-100 '
        />
      </div>

      <div className='w-full h-screen mt-90 flex-col relative'>
        <div className='h-2/3 flex justify-center z-10'>
          <div className='w-full h-auto flex flex-col items-center'>
            <div className='w-1/4 h-80 mt-48 flex flex-col items-center bg-white border-4 border-pink-300 shadow-lg p-8'>
              <p className='text-pink-600 text-3xl font-yomogi font-semibold mb-6'>
                アイテムゲット！
              </p>
            </div>
            <div className='w-1/2 flex flex-row justify-between mt-60'>
              <img
                src={itemsPath}
                alt='item_image'
                className='w-1/3 h-auto p-12 rounded-md bg-white'
              />
              <div className='flex items-center text-xl text-gray-700 font-yomogi mt-4 pl-64'>
                <p>{description}</p>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full h-1/3 flex -mt-100 justify-center z-10 relative'>
          <img src='/haguruma.png' alt='haguruma' className='w-auto h-full ml-100' />
          <div className='absolute inset-0 flex justify-center items-center z-20 mt-20'>
            <p className='text-center text-black text-4xl font-yomogi mt-80 mr-180 whitespace-pre-line'>
              {title}
              <br />
              完成!
            </p>
          </div>
          <div className='flex w-2/12 ml-10 h-auto flex-col-reverse mb-12'>
        <button
          className='bg-pink-300 p-12 text-white text-xl rounded shadow-lg hover:bg-pink-400 transition z-10 -ml-10 font-yomogi'
          onClick={() => navigate('/kisekae', { state: { imagePath, itemsPath } })}
        >
          きせかえ
        </button>
      </div>
        </div>
      </div>
    </div>
  )
}
