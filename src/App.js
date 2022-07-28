import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import  Hotels  from './pages/hotel/Hotels';
import Hotellist from './pages/hotellist/HotelList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/hotels' element={<Hotellist/>}/>
        <Route path='/hotels/:id' element={<Hotels/>}/>

      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
