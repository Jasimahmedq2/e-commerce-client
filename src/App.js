import React from 'react';
import { Route, Routes } from 'react-router';
import Home from './Component/Home/Home';
import './app.css'
import CartDetails from './Component/Home/CartDetails';
import Navbar from './Component/shared/Navbar';


const App = () => {
  return (
    <>
    <Navbar />
     <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='details/:id' element={<CartDetails />}/>
      </Routes> 
    </>
  );
};

export default App;