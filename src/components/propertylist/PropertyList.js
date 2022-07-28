import './propertylist.css'

export default function PropertyList  () {
  return (
    <div className='plist'>
      <div className="plistitem">
        <img src="./images/kitchen.jpeg" alt="hotel" className='plistimg'/>
        <div className="plisttitles">
          <h1>Hotels</h1>
          <h2>253 hotels</h2>
        </div>
      </div>
      <div className="plistitem">
        <img src="./images/download.jpeg" alt="apartment" className='plistimg'/>
        <div className="plisttitles">
          <h1>Apartments</h1>
          <h2>173 Apartments</h2>
        </div>
      </div>      
      <div className="plistitem">
        <img src="./images/resort.jpeg" alt="resort" className='plistimg'/>
        <div className="plisttitles">
          <h1>Resorts</h1>
          <h2>67 Resorts</h2>
        </div>
      </div>
      <div className="plistitem">
        <img src="./images/villa.jpeg" alt="villa" className='plistimg'/>
        <div className="plisttitles">
          <h1>Villas</h1>
          <h2>53 Villas</h2>
        </div>
      </div>     
       <div className="plistitem">
        <img src="./images/cabin.jpeg" alt="cabin" className='plistimg'/>
        <div className="plisttitles">
          <h1>Cabins</h1>
          <h2>23 Cabins</h2>
        </div>
      </div>
    </div>
  )
}
