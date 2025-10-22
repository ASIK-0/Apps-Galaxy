import React from 'react';
import Banner from './Banner';
import { Link } from 'react-router';
import AppCard from '../components/appcard';
import useApps from '../Hooks/useApps';

const Home = () => {
    const [ apps, loading, error ] = useApps()
    
    const featuredApps =  apps.slice(0, 8)
    return (
        <div className='bg-gray-100'>
            <Banner></Banner>
            <div className='text-center pb-[40px] mt-[80px]'>
                <h1 className='font-bold text-[48px] mb-4'>Trending Apps</h1>
                <p>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className=' flex flex-col justify-centery-'>
                <div className='grid md:grid-cols-2 lg:grid-cols-4  px-6  sm:px-[40px] py-[40px] lg:px-[80px] gap-4'>
                    {
                        featuredApps.map(app => (
                            <AppCard key={app.id} app={app} />
                        ))
                    }
                </div>
                <Link to={'/app'} className="mx-auto mb-[80px] w-fit px-6 py-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white rounded-lg">Show All</Link>
            </div>
        </div>
    );
};

export default Home;