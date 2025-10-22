import React from 'react';
import Banner from './Banner';
import { Link, useLoaderData } from 'react-router';
import AppCard from '../components/appcard';

const Home = () => {
    const apps = useLoaderData();
    const featuredApps = apps.slice(0, 8)
    return (
        <div className='bg-gray-100'>
            <Banner></Banner>
            <div className='text-center pb-[40px] mt-[80px]'>
                <h1 className='font-bold text-[48px] mb-4'>Trending Apps</h1>
                <p>Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className=' flex flex-col justify-centery-'>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  px-2.5 py-[40px] md:px-[80px] gap-4'>
                    {
                        featuredApps.map(app => (
                            <AppCard key={app.id} app={app} />
                        ))
                    }
                </div>
                <Link to={'/app'} className="mx-auto mb-[80px] w-fit px-4 py-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white rounded-lg">Show All</Link>
            </div>
        </div>
    );
};

export default Home;