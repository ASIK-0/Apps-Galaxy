import React from 'react';
import errorImage from '../assets/error-404.png'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ErrorPage = () => {
    return (
        <>
            <Navbar></Navbar>
            <div>
                <img className='mx-auto items-center' src={errorImage} alt="404 error" />
                <button>Go Back</button>
            </div>
            <Footer></Footer>
        </>

    );
};

export default ErrorPage;