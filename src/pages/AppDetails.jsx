import React from 'react';
import dwnldIcon from '../assets/icon-downloads.png'
import ratingIcon from '../assets/icon-ratings.png'
import revewIcon from '../assets/icon-review.png'

import { Link, useParams } from 'react-router';
import useApps from '../Hooks/useApps';

const AppDetails = () => {
    const { id } = useParams()
    const [apps, loading, error] = useApps()
    const app = apps.find(app => String(app.id) === id)
    if (loading) return <p>Loading....</p>
    const { image, title, size, downloads, description, ratingAvg, reviews, companyName } = app

    return (
        <div>
            <div className='flex flex-col md:flex-row w-full gap-[40px] px-6 md:px-[80px] pt-[80px]'>
                <img className='w-[350px] h-[350px]' src={image} alt="" />
                <div className='w-full'>
                    <h1 className='font-bold text-[32px]'>{title}</h1>
                    <p>Developed by: <span className='text-[#632EE3]'>{companyName}</span></p>
                    <div className='border text-gray-500 opacity-10 w-full my-[40px]'></div>
                    <div className='flex flex-col md:flex-row justify-center mx-auto items-center md:justify-start gap-[50px] mb-[30px]'>
                        <div className='text-center'>
                            <img className='mx-auto w-[40px] h-[40px]' src={dwnldIcon} alt="icon" />
                            <p className='text-[#001931]'>Downloads</p>
                            <h1 className='font-extrabold text-[40px]'>{downloads}</h1>
                        </div>
                        <div className='text-center'>
                            <img className=' mx-auto -[40px] h-[40px]' src={ratingIcon} alt="icon" />
                            <p className='text-[#001931]'>Average Ratings</p>
                            <h1 className='font-extrabold text-[40px]'>{ratingAvg}</h1>
                        </div>
                        <div className='text-center'>
                            <img className='mx-auto w-[40px] h-[40px]' src={revewIcon} alt="icon" />
                            <p className='text-[#001931]'>Total Reviews</p>
                            <h1 className='font-extrabold text-[40px]'>{reviews}</h1>
                        </div>
                    </div>
                    <Link className='bg-[#00D390] px-[20px] py-[14px] text-white rounded-sm' >Install Now ({size} MB)</Link>
                </div>
            </div>
            <div className='border text-gray-500 opacity-10 w-full my-[40px]'></div>
            <div>
                <h1>chart</h1>
            </div>
            <div className='border text-gray-500 opacity-10 w-full my-[40px]'></div>
            <div className='px-6 md:px-[80px] mb-[80px]'>
                <h1 className='text-[24px] font-semibold mb-[24px]'>Description</h1>
                <p>{description}</p>
            </div>
        </div>
    )
};

export default AppDetails;