import './searchitem.css'

function SearchItem() {
  return (
    <div className='searchitem'>
        <img src="./images/apartment room2.jpeg" alt="" className="siimg" />
        <div className="siDesc">
            <h1 className="siTitle">Tower Street Apartment </h1>
            <span className="siDistance">500m from center</span>
            <span className="sitaxiop">Free airport taxi</span>
            <span className="sisubtitle">Studio Apartment with air conditioning</span>
            <span className="sifeatures">Entire studio, 1 bathroom, 21m2 1 full bed</span>
            <span className="sicancelop">free cancellation</span>
            <span className="sicancelopsubtitle">
                You can cancel later, so lock in this great price today!
            </span>
            </div>
        <div className="siDetails">
            <div className="sirating">
                <span>Excellent</span>
                <button>8.9</button>
            </div>
            <div className="sidetailtext">
                <span className="siprice">$123</span>
                <span className="sitaxop">Includes taxes and fees</span>
                <button className="sicheckbutton">See availability</button>
            </div>
        </div>
    </div>
  )
}
export default SearchItem