import React, { useState } from 'react';
import useApps from '../Hooks/useApps';
import AppCard from '../components/appcard';

const Apps = () => {
    const [apps] = useApps();
    const [search, setSeach] = useState('')

    const term = search.trim().toLocaleLowerCase()
    const searchedApps = term ?
        apps.filter(app =>
            app.title.toLocaleLowerCase().includes(term))
             : apps

    return (
        <div className='bg-gray-100'>
            <div className='px-6 sm:px-[40px]  md:px-[80px]'>
                <h1 className='font-bold text-[48px] pt-3 sm:pt-6 md:pt-[80px] text-center'>Our All Applications</h1>
                <p className='text-[#627382] text-center'>Explore All Apps on the Market developed by us. We code for Millions</p>
                <div className='flex flex-col sm:flex-row items-center justify-between mt-10'>
                    <h1><span className='font-bold text-3xl md:text-4xl'>All Apps:</span> <span className=' text-gray-500 text-2xl font-semibold'>({searchedApps.length}) Apps Found </span></h1>
                    <input type="search" name="Search Apps" id="" />
                    <label className="input">
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
            <div className=' flex flex-col justify-centery-'>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  px-6 py-[40px] md:px-[80px] gap-4'>
                    {
                        searchedApps.map(app => (
                            <AppCard key={app.id} app={app} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
};

export default Apps;