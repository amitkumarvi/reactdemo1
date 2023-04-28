import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Contact from './Pages/Contact';
import Products from './Pages/Products';
import SearchBarDemo from './Pages/SearchBarDemo';
import TicTacToe from './Pages/TicTacToe';


function App() {
  
  
  return (
    <BrowserRouter>    
           <Navbar/>
            <Routes>
                <Route path="/" exact element={<Home />}  />
                <Route path="/About" element={<About />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Signup" element={<Signup />} />
                <Route path="/Products" element={<Products />} />
                <Route path="/SearchBarDemo" element={<SearchBarDemo />} />
                <Route path="/TicTacToe" element={<TicTacToe />} />

            </Routes>
            
            
            

    </BrowserRouter>
  );
}

export default App;
