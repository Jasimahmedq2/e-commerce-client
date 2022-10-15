import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Store } from './Store/Store';

const CartDetails = () => {
  const { id } = useParams()
  const [details, setDetails] = useState([])
  console.log(details)

  const { state, dispatch: ctxDispatch } = useContext(Store);
    const { cart } = state;
    const addToCartHandler = async () => {
      const existItem = cart.cartItems.find((x) => x._id === details._id);
      const quantity = existItem ? existItem.quantity + 1 : 1;
      const { data } = await axios.get(`http://localhost:5000/api/products/${details._id}`);
      if (data.countInStock < quantity) {
        window.alert('Sorry. Product is out of stock');
        return;
      }

      ctxDispatch({
        type: 'CART_ADD_ITEM',
        payload: { ...details, quantity },
      });
  };

  useEffect(() => {
    const fetchDetails = async () => {
      const { data } = await axios.get(`http://localhost:5000/api/products/${id}`)
      setDetails(data)
    }
    fetchDetails()
  }, [])
  return (
    <div className='flex justify-around items-center '>
      <div className='sm:w-1/3'>
        <img src={details.image} alt="" />
      </div>
      <div className='sm:w-1/2 relative'>
        <h2 className='text-xl text-primary font-bold'>{details.category}</h2>
        <h2 className='text-xl text-sky-400 font-bold'>price: {details.price}</h2>
        <h2 className='text-xl font-serif'>{details.title}</h2>
        <h2 className='text-xl text-orange-400'>rate: {details?.rating?.rate}</h2>
        <h2 className='text-natural font-medium mt-5'>{details.description}</h2>
        {
          details?.rating?.count >= 0 ? <h2 className='text-xl text-blue-600'>available: {details?.rating?.count}</h2>
          : <h2 className='text-xl text-red-600'>stock out</h2>
            
          
        }
        <button onClick={addToCartHandler} className='btn btn-outline absolute right-3 mt-5'>Add to Cart</button>
      </div>
    </div>
  );
};

export default CartDetails;