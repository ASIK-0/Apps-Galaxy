import React from 'react';
import Banner from './Banner';
import { Link } from 'react-router';
import AppCard from '../components/appcard';
import useApps from '../Hooks/useApps';
import LoadingSpinner from '../components/LoadingSpinner';

const Home = () => {
    const [apps, loading] = useApps()
    const featuredApps = apps.slice(0, 8)
    if (loading) {
        return (
            <div className='flex justify-center items-center h-screen'>
                <LoadingSpinner />
            </div>
        );
    }
    return (
        <div className='bg-gray-100 pb-8 md:pb-[80px]'>
            <Banner></Banner>
            <div className='text-center md:pb-[40px] mt-4 md:mt-[80px] px-4 md:px-[80px]'>
                <h1 className='font-bold text-[48px] mb-4'>Trending Apps</h1>
                <p>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-4  px-6  sm:px-[40px] py-[40px] lg:px-[80px] gap-3'>
                {
                    featuredApps.map(app => (
                        <AppCard key={app.id} app={app} />
                    ))
                }
            </div>
            <div className='flex justify-center'>
                <Link to={'/app'} className="w-fit px-6 py-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white rounded-lg">Show All</Link>
            </div>
        </div>
    );
};

export default Home;