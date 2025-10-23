import React, { useEffect, useState } from 'react';
import dwnldIcon from '../assets/icon-downloads.png'
import ratingIcon from '../assets/icon-ratings.png'
import { Link } from 'react-router';
import useApps from '../Hooks/useApps';
import LoadingSpinner from '../components/LoadingSpinner';

const InstallList = () => {
    const [installList, setInstallList] = useState([]);
    const [sort, setSort] = useState('none');
    const [loading] = useApps()
    useEffect(() => {
        const savedlist = JSON.parse(localStorage.getItem('Installed'))
        if (Array.isArray(savedlist)) {
            setInstallList(savedlist)
        } else {
            setInstallList([]);
        }
    }, []);


    const sortedItem = Array.isArray(installList) ? (() => {
        if (sort === "download-asc") {
            return [...installList].sort((a, b) => a.downloads - b.downloads)
        }
        else if (sort === "download-desc") {
            return [...installList].sort((a, b) => b.downloads - a.downloads)
        }
        else {
            return installList
        }
    })() : [];
    

    const handleUninstall = id => {
        const excitingList = JSON.parse(localStorage.getItem('Installed'))
        let updateList = excitingList.filter(a => a.id !== id)
        setInstallList(updateList)
        localStorage.setItem('Installed', JSON.stringify(updateList))
    }

    return (
        <div className='bg-gray-100 min-h-screen'>
            <div className='px-6 sm:px-[40px] md:px-[80px]'>
                <h1 className='font-bold text-4xl mb-2 md:text-[48px] pt-3 sm:pt-6 md:pt-[80px] text-center'>Your Installed Apps</h1>
                <p className='text-[#627382] text-center'>Explore All Apps on the Market developed by us. We code for Millions</p>
                <div className='flex flex-col sm:flex-row items-center justify-between mt-10'>
                    <h1><span className='font-bold text-2xl md:text-4xl'>Installed Apps</span>
                        <span className=' text-gray-500 text-2xl font-semibold'>({sortedItem.length}) Apps Found </span></h1>
                    <label className='form-control w-full max-w-[200px] mt-2'>
                        <select
                            value={sort}
                            onChange={e => setSort(e.target.value)}
                            className='select select-info'
                        >
                            <option value='none' disabled>Sort by Downloads</option>
                            <option value='download-asc' >Low To High</option>
                            <option value='download-desc'>High To Low</option>
                        </select>
                    </label>
                </div>
            </div>
            {!sortedItem.length ? (
                <div className="flex flex-col justify-center items-center space-y-6  text-center min-h-[40vh]">
                    <p className="font-bold text-3xl md:text-7xl">No App Installed Yet</p>
                    <p className="text-gray-600 text-xl font-semibold mb-4">Please Download Any App</p>
                    <Link
                        to={'/'}
                        className="mx-auto w-fit px-6 py-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white rounded-lg inline-block"
                    >
                        Go Back!
                    </Link>
                </div>
            ) : (
                <div>
                    {
                        sortedItem.map(install =>
                            <div key={install.id} className=' px-6 md:px-[80px] py-3 space-y-3'>
                                <div className='flex flex-col md:flex-row justify-between items-center p-4 rounded-lg shadow-sm bg-white w-full'>
                                    <div className='flex flex-col md:flex-row gap-4'>
                                        <img className='w-[350px] md:w-[80px] md:h-[80px]' src={install.image} alt="" />
                                        <div className='space-y-4 mt-1'>
                                            <h1 className=' font-medium text-4xl md:text-[24px]'>{install.title}</h1>
                                            <div className='flex gap-9 md:gap-7'>
                                                <div className='flex gap-1 items-center'>
                                                    <img className='w-[16px] h-[16px]' src={dwnldIcon} alt="icon" />
                                                    <h1 className='font-medium text-[20px] text-green-400 '>{install.downloads} M</h1>
                                                </div>
                                                <div className='flex gap-1 items-center'>
                                                    <img className='w-[16px] h-[16px]' src={ratingIcon} alt="icon" />
                                                    <h1 className='font-medium text-[20px] text-orange-400'>{install.ratingAvg}</h1>
                                                </div>
                                                <div className='flex text-center'>
                                                    <h1 className='text-gray-500 text-[16px]'>{install.size} MB</h1>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button onClick={() => handleUninstall(install.id)} className='w-full md:w-[120px]  py-[12px] text-xl font-medium btn-lg bg-[#00D390] text-white rounded-sm mt-3 md:mt-0' >Uninstall</button>
                                </div>
                            </div>
                        )
                    }
                </div>
            )}
        </div>
    );
};

export default InstallList;