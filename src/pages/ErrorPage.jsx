import React from 'react';
import errorImage from '../assets/error-404.png'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <>
            <div className='flex flex-col min-h-screen'>
                <Navbar></Navbar>
                <div className='flex-1 text-center space-y-4 my-[40px]'>
                    <img className='mx-auto w-[450px]  items-center' src={errorImage} alt="404 error" />
                    <h1 className='font-bold text-5xl'>Oops, page not found!</h1>
                    <p className='text-[#627382]'>The page you are looking for is not available.</p>
                    <Link to={'/'} className="mx-auto w-fit px-6 py-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white rounded-lg">Go Back!</Link>
                </div>
                <Footer></Footer>
            </div>
        </>

    );
};

export default ErrorPage;