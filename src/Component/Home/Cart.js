import React from 'react';
import { useNavigate } from 'react-router';
import './Cart.css'

const Cart = ({ product }) => {
  const navigate = useNavigate()
  const { category, _id, price, rating, title, image } = product;

  const  handleDetails = (id) => {
    navigate(`details/${id}`)
  }
  return (
    <div className='cart-container shadow-lg rounded-lg'>
      <div className=" lg:max-w-lg image-container">
        <figure><img src={image} alt="car!" /></figure>
        </div>
        <div className=''>
          <h2 className='text-xl text-black font-bold text-center '>{category}</h2>
          <div className='flex justify-around'>
          <h2 className='text-xl text-natural text-left '>${price}</h2>
          <h2 className='text-orange-600 text-xl font-bold'>rating: {rating.rate}</h2>
          </div>
          <button className='btn btn-primary' onClick={() => handleDetails(_id)}>add</button>
        </div>
    </div>
  );
};

export default Cart;