import React from 'react';
import Navbar from './Navbar';
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Booking from './pages/Booking';
import Menu from './pages/Menu';
import FooterInfo from './FooterInfo';

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Routes> 
        <Route path='/' element={<Home/>}></Route>
        <Route path='/menu' element={<Menu/>}></Route>
        <Route path='/booking' element={<Booking/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        </Routes>
      </main>
      <footer><FooterInfo/></footer>
      
     
    </div>
  );
}

export default App;
