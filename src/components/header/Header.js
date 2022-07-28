import './header.css'
import { useState } from 'react'
import { FaBed, FaPlane, FaCar, FaCalendarDay } from 'react-icons/fa'
import { GiPerson } from 'react-icons/gi';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css';
import { format } from 'date-fns'
import { useNavigate } from 'react-router-dom';

function Header({ type} ) {
    const [destination, setDestination] = useState('');
    const [openDate, setopenDate] = useState(false);
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [openOptions, setopenOptions] = useState(false)
    const [options, setoptions] = useState({
        adult: 1,
        children: 0, 
        room: 1
    });
    const handleOption = (name, operation) => {
        setoptions(prev => {
            return {
                ...prev, [name]: operation === 'i' ? options[name] + 1 : options[name] - 1
            }
        })
    }
    const navigate = useNavigate()
    const handleSearch = ()=> {
        navigate('/hotels', {state: {destination, date, options}})
    }
  return (
    <div className='header'>
        <div className={type === 'list' ? 'headerContainer listmode' : 'headerContainer'}>
            <div className="headerList">
            <div className="headerListItem active">
                <FaBed />
                <span>Stays</span>
            </div>         
            <div className="headerListItem">
                <FaPlane />
                <span>Flights</span>
            </div>            
            <div className="headerListItem">
                <FaCar />
                <span>Car rentals</span>
            </div>
            <div className="headerListItem">
                <FaBed />
                <span>Attractions</span>
            </div>           
             <div className="headerListItem">
                <FaCar />
                <span>Airport Taxis</span>
            </div>
            </div>
            {  type !== 'list' && 
            <>  
                <h1 className="headerTitle">A lifetime of discounts? It's Genius</h1>
                <p className="headerDesc">Get rewarded for your travels - unlock instant savings of 10% or more with soniobooking account</p>
                <button className="headerbtn">Sign in / Register</button>
            <div className="headerSearch">
                <div className="headerSearchItem">
                    <FaBed className='headerIcon' />
                    <input type='text' 
                    placeholder='where are you going?' className='headerSearchInput'
                    onChange={e=>setDestination(e.target.value)}
                    />
                </div>
                <div className="headerSearchItem">
                    <FaCalendarDay className='headerIcon' />
                    <span onClick={()=> setopenDate(!openDate)} className='headerSearchText'>{`${format(date[0].startDate, 'dd/MM/yyyy')} to ${format(date[0].endDate, 'dd/MM/yyyy')}`} </span>
                    {openDate && <DateRange 
                    editableDateInputs={true}
                    onChange={item => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className='date'
                    minDate={new Date()}
                    />
                    }

                </div>                
                <div className="headerSearchItem">
                    <GiPerson className='headerIcon' />
                    <span onClick={() => setopenOptions(!openOptions)} className='headerSearchText'>{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
                    {openOptions && <div className="options">
                        <div className="optionitem">
                            <span className="optiontext">Adult</span>
                            <div className="optioncounter">
                            <button 
                            
                            className='optioncounterbutton'
                            onClick={()=> handleOption('adult', 'i')}>+</button>
                            <span className="optioncounternumber">{options.adult}</span>
                            <button
                            disabled={options.adult <= 1}className="optioncounterbutton"onClick={()=> handleOption('adult', 'd')}>-</button>
                            </div>
                        </div>
                        <div className="optionitem">
                            <span className="optiontext">Children</span>
                            <div className="optioncounter">
                            <button 
                            className='optioncounterbutton'onClick={()=> handleOption('children', 'i')}>+</button>
                            <span className="optioncounternumber">{options.children}</span>
                            <button 
                            disabled={options.children <= 0}className="optioncounterbutton" onClick={()=> handleOption('children', 'd')}>-</button>
                            </div>
                        </div>                      
                        <div className="optionitem">
                            <span className="optiontext">Rooms</span>
                            <div className="optioncounter">
                            <button className='optioncounterbutton' onClick={()=> handleOption('room', 'i')}>+</button>
                            <span className="optioncounternumber">{options.room}</span>
                            <button
                            disabled={options.room <= 1}
                             className="optioncounterbutton"onClick={()=> handleOption('room', 'd')}>-</button>
                            </div>
                        </div>
                    </div>}
                </div>
                <div className="headerSearchItem">
                   <button className="headerbtn" onClick={handleSearch}>Search</button>
                </div>
            </div>
            </> 
                }
            </div>
    </div>
  )
}

export default Header