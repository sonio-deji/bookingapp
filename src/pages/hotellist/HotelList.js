import './hotellist.css';
import Header from '../../components/header/Header';
import NavBar from '../../components/navbar/NavBar'
import { useLocation } from 'react-router-dom';
import { useState } from 'react'
import { format } from 'date-fns'
import { DateRange } from 'react-date-range';
import SearchItem from '../../components/searchitem/SearchItem';

const Hotellist = () => {
    const location = useLocation();
    //eslint-disable-next-line
    const [destination, setdestination] = useState(location.state.destination);
    const [date, setdate] = useState(location.state.date)
    const [opendate, setopendate] = useState(false)
        //eslint-disable-next-line
 const [options, setoptions] = useState(location.state.options)
    return (
        <div>
            <NavBar />
            <Header type='list'/>
            <div className="listcontainer">
                <div className="listwrapper">
                   <div className="listsearch">
                       <h1 className="lstitle">Search</h1>
                       <div className="lsitem">
                           <label htmlFor="">Destination</label><br></br>
                           <input type="text" placeholder={destination}/>
                       </div>
                       <div className="lsitem">
                           <label htmlFor="">Check-in Date</label>
                           <span onClick={()=>setopendate(!opendate)}>{`${format(date[0].startDate, 'dd/MM/yyyy')} to ${format(date[0].endDate, 'dd/MM/yyyy')}`}
                           </span>
                          {opendate &&( <DateRange onChange={(item) => setdate([item.selection])} minDate={new Date()}
                           ranges={date} />)}
                       </div>
                       <div className="lsitem">
                           <label htmlFor="">Options</label>
                            <div className="lsoptionsitems">
                                <span className="lsoptiontext">
                                    Min Price <small>per night</small>
                                </span>
                                <input type="number" className="lsopotioninput" />
                            </div>
                            <div className="lsoptionsitems">
                                <span className="lsoptiontext">
                                    Max Price <small>per night</small>
                                </span>
                                <input type="number" className="lsopotioninput" />
                            </div>
                            <div className="lsoptionsitems">
                                <span className="lsoptiontext">
                                    Adult 
                                </span>
                                <input type="number" className="lsopotioninput" placeholder={options.adult}
                                min={1}/>
                            </div>
                            <div className="lsoptionsitems">
                                <span className="lsoptiontext">
                                    Children 
                                </span>
                                <input type="number" className="lsopotioninput" 
                                placeholder={options.children}
                                min={0}/>
                            </div>
                            <div className="lsoptionsitems">
                                <span className="lsoptiontext">
                                    Room 
                                </span>
                                <input type="number" className="lsopotioninput" 
                                placeholder={options.room}
                                min={1}/>
                            </div>
                       </div>
                       <button>Search</button>
                       </div> 
                   <div className="listresult">
                       <SearchItem />
                       <SearchItem />
                       <SearchItem />
                       <SearchItem />
                       <SearchItem />
                       <SearchItem />
                       <SearchItem />
                       <SearchItem />
                   </div>
                </div>
            </div>
        </div>
    );
}

export default Hotellist;
