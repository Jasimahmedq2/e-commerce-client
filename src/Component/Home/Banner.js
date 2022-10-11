import React from 'react';
import banner1 from '../../assest/image/banner1.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200">
        <div className="hero-content ">
     
          <div className='w-1/2'>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
          <div className='w-1/2'>
          <img src={banner1}  alt="banner" className="max-w-sm rounded-lg shadow-2xl" />
          </div>
        </div>
      </div>
    );
};

export default Banner;