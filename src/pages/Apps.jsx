import React, { useEffect, useState } from 'react';
import useApps from '../Hooks/useApps';
import AppCard from '../components/appcard';
import LoadingSpinner from '../components/LoadingSpinner';
import noFoundimg from '../assets/App-Error.png'
import { Link } from 'react-router';

const Apps = () => {
    const [apps, loading, error] = useApps();
    const [search, setSeach] = useState('')
    const [searchLoading, setSearchLoading] = useState(false)

    useEffect(() => {
        if (search) {
            setSearchLoading(true);
            const timer = setTimeout(() => {
                setSearchLoading(false);
            }, 500);
            return () => clearTimeout(timer);
        } else {
            setSearchLoading(false)
        }
    }, [search]);

    const term = search.trim().toLocaleLowerCase()
    const searchedApps = term ?
        apps.filter(app =>
            app.title.toLocaleLowerCase().includes(term))
        : apps;

    if (loading) {
        return (
            <div className='flex justify-center items-center h-screen'><LoadingSpinner /></div>
        )
    }

    return (
        <div className='bg-gray-100'>
            <div className='px-6 sm:px-[40px]  md:px-[80px]'>
                <h1 className='font-bold text-3xl mb-2.5 md:text-[48px] pt-3 sm:pt-6 md:pt-[80px] text-center'>Our All Applications</h1>
                <p className='text-[#627382] text-center'>Explore All Apps on the Market developed by us. We code for Millions</p>
                <div className='flex flex-col sm:flex-row items-center justify-between mt-10'>
                    <h1><span className='font-bold text-2xl lg:text-4xl'>All Apps:</span> <span className=' text-gray-500 text-xl font-semibold'>({searchedApps.length}) Apps Found </span></h1>
                    <label className="input mt-4 md:mt-0">
                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <g
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2.5"
                                fill="none"
                                stroke="currentColor"
                            >
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                            </g>
                        </svg>
                        <input value={search} onChange={(e) => setSeach(e.target.value)} type="search" required placeholder="Search Apps" />
                    </label>
                </div>
            </div>
            {searchLoading ? (
                <div className='flex justify-center items-center py-[130px]'>
                    <LoadingSpinner />
                </div>
            ) : (
                <div className=' flex flex-col justify-center'>
                    {
                        searchedApps.length === 0 ? (
                            <div className='flex flex-col space-y-4 py-2.5 items-center justify-center min-h-[40vh]'>
                                <img className='w-[300px] md:w-[400px] mx-auto' src={noFoundimg} alt="" />
                                <p className='text-gray-600 font-bold text-2xl text-center md:text-3xl mt-2'>Try searching with a different keyword.</p>
                                <Link
                                    to={'/'}
                                    className="mx-auto w-fit px-6 py-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white rounded-lg inline-block"
                                >
                                    Go Back!
                                </Link>
                            </div>
                        ) : (

                            <div className='grid sm:grid-cols-2 lg:grid-cols-4  px-6 py-[40px] md:px-[80px] gap-4'>
                                {
                                    searchedApps.map(app => (
                                        <AppCard key={app.id} app={app} />
                                    ))
                                }
                            </div>
                        )
                    }
                </div>
            )}
        </div>
    )
};

export default Apps;