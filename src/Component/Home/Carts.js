import axios from 'axios';
import React, { useEffect, useReducer, useState } from 'react';
import logger from 'use-reducer-logger'
import Cart from './Cart';

// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'FETCH_REQUEST':
//       return { ...state, loading: true };
//     case 'FETCH_SUCCESS':
//       return { ...state, products: action.payload, loading: false };
//     case 'FETCH_FAIL':
//       return { ...state, loading: false, error: action.payload }
//     default:
//       return state;

//   }
// }

const Carts = () => {
  const [products, setProducts] = useState([])
  // const [{loading, error, products}, dispatch] = useReducer(logger(reducer), {
  //   products: [],
  //   loading: true,
  //   error: '',
  // })


  useEffect(() => {
    const fetchProduct = async () => {

      const { data } = await axios.get('http://localhost:5000/api/products')
      setProducts(data)

      //    dispatch({type: 'PATCH_REQUEST'})
      //   try{
      //     const { data } = await axios.get('http://localhost:5000/api/products')
      //      dispatch({type: 'PATH_SUCCESS', payload: data})
      //   }catch (err){
      //  dispatch({type: 'PATCH_FAIL', payload: err.message})
      //   }

    }

    fetchProduct()
  }, [])

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-8'>
      {
        products.map(product => <Cart
          key={product._id}
          product={product}
        />)
      }
    </div>
  );
};

export default Carts;