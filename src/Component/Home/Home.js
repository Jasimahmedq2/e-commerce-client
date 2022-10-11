import React from 'react';
import Banner from './Banner';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Navbar from '../shared/Navbar';


const Home = () => {
  return (
    <>
    <Navbar />
     <Banner /> 
    </>
  );
};

export default Home;