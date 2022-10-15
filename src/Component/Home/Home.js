import React from 'react';
import Banner from './Banner';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Carts from './Carts';


const Home = () => {
  return (
    <>
     <Banner /> 
     <Carts />
    </>
  );
};

export default Home;