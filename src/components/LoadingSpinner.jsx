import React from 'react';
import loadingImg from '../assets/logoo.png'
const LoadingSpinner = () => {
    return (
        <div className='flex items-center text-nowrap mx-auto'> 
            <h1 className='font-bold  text-4xl md:text-7xl'>L</h1>
            <img className=' w-[60px] md:w-[120px] animate-spin ' src={loadingImg} alt="loading image" />
            <h1 className='font-bold text-4xl md:text-7xl'>Lading...</h1>
        </div>
    );
};

export default LoadingSpinner;