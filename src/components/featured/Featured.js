import './featured.css'

export default function Featured() {
  return (
    <div className='featured'>
        <div className="featureditem">
            <img loading='lazy' src="./images/43896.jpg" alt="dublin"className='featuredimg' />
            <div className="featuredtitles">
                <h1>Dubai</h1>
                <h2>123 properties</h2>
            </div>
        </div>
        <div className="featureditem">
            <img loading='lazy' src="./images/191353.jpg" alt="austin" className='featuredimg'/>
            <div className="featuredtitles">
                <h1>Austin</h1>
                <h2>532 properties</h2>
            </div>
        </div>
        <div className="featureditem">
            <img loading='lazy' src="./images/191361.jpg" alt="reno" className='featuredimg'/>
            <div className="featuredtitles">
                <h1>Reno</h1>
                <h2>533 properties</h2>
            </div>
        </div>
    </div>
  )
}
