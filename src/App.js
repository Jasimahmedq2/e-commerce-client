import React from 'react';
import { Route, Routes } from 'react-router';
import Home from './Component/Home/Home';
import './app.css'
import CartDetails from './Component/Home/CartDetails';
import Navbar from './Component/shared/Navbar';
import CartScreen from './Component/Home/CartScreen';


const App = () => {
  return (
    <>
    <Navbar />
     <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='details/:id' element={<CartDetails />}/>
      <Route path='/cart' element={<CartScreen />}/>
      </Routes> 
    </>
  );
};

export default App;