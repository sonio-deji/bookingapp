import './hotel.css';
import NavBar from '../../components/navbar/NavBar';
import Header from '../../components/header/Header';
import { GoLocation } from 'react-icons/go';
import { GiCancel } from 'react-icons/gi'
import { BiRightArrowCircle, BiLeftArrowCircle} from 'react-icons/bi'
import MailList from '../../components/maillist/MailList';
import Footer from '../../components/footer/Footer';
import { useState } from 'react';


const Hotels = () => {

  const [slidernumber, setslidernumber] = useState(0);
  const [open, setopen] = useState(false);

  const handleOpen = (i) => {
    setslidernumber(i)
    setopen(true)
  }
  const photos = [
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1280x900/333547868.jpg?k=e24cdb7cb12a23879f23343099c32b27adea2481b244b2536c4e842d198f0348&o=&hp=1'
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/154497477.jpg?k=5a4c66878a32c151ae5666e97ce31e992dfbb9bacd11d294f145753dc086e072&o=&hp=1'
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/322892270.jpg?k=5942b843fd1b2e8e44b79f9c9e55d93b5577401996efa3eed1c0ea77629e4e45&o=&hp=1'
    },
    {
      src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/348139038.jpg?k=10df89615b7c4fb89efb55283441dcf810423e2f378c58e49ba55165892c9163&o=&hp=1'
    },
  ];
  const handleMove = (direction) => {
    let newSlideNumber;
    if(direction==='l') {
      newSlideNumber = slidernumber === 0 ? 3 : slidernumber - 1;
    }else {
      newSlideNumber = slidernumber === 3 ? 0 : slidernumber + 1;
    }
    setslidernumber(newSlideNumber)
  }
  return (
    <div>
      <NavBar />
      <Header type='list' />
      <div className="hotelcontainer">
        {open && <div className="slider">
          <GiCancel className='close' onClick={()=> setopen(false)}/>
          <BiLeftArrowCircle className='arrow' onClick={()=>handleMove('l')} />
          <div className="sliderwrapper">
            <img src={photos[slidernumber].src} alt='' className='sliderimg' />
          </div>
          <BiRightArrowCircle className='arrow' onClick={()=>handleMove('r')} />
        </div>}
        <div className="hotelwrapper">
          <button className="booknow">Reserve or Book Now!</button>
          <h1 className="hoteltitle">Grand hotel</h1>
          <div className="hoteladdress">
            <GoLocation />
            <span>Elton 25 st New York </span>
          </div>
          <span className="hoteldistance"> Excellent location 500m from center</span>
          <span className="hotelpricehighlight">
            Book a stay over $114 at this property and get a free airport taxi
          </span>
          <div className="hotelimages">
              {photos.map((photo, i) => (
                <div className="hotelimgwrapper">
                  <img onClick={() => handleOpen(i)} src={photo.src} alt="jyc" className="hotelimg" key={i}/>
                </div>
              ))}
          </div>
          <div className="hoteldetails">
            <div className="hoteldetailstexts">
              <h1 className="hoteltitle">Stay in the heart of krakow</h1>
              <p className="hoteldesc">
                Located a 5-minute walk from St. Florian's Gate in krakow, Tower Street Apartment has accomodations with air conditioning and free wi-fi. The units come with hardwood floors and feature a fully equipped kitchenette with a microwave, a flat-screen TV, and a private bathroom with shower and hair dryer, A fridge is also offered, as well as an electric tea pot and a coffee machine, popular points of interest near the apartment include Cloth Hall, main market square and town hall tower, the nearest airport is John Paul II international Krakow Balice, 16.1km from Tower Street Apartmnets, and the property offers a paid airport shuttle service.
              </p>
            </div>
            <div className="hoteldetailsprice">
              <h1>Perfect for a 9-night stay</h1>
              <span>
                Located in the real heart of krakow, this property has an excellent location score of 9.8!
              </span>
              <h2>
                <b>$945</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  )
}

export default Hotels;