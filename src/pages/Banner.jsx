import React from 'react';
import playIcon from '../assets/playStore.png'
import appIcon from '../assets/appStore.png'
import { Link } from 'react-router';
import bannerImg from '../assets/hero.png'
const Banner = () => {
    return (
        <div>
            <div className='px-2.5 pt-[80px ] md:px-[80px]'>
                <div className='text-center'>
                    <h1 className='text-4xl md:text-7xl font-bold text-center'>We Build <br /> <span className='text-[#9F62F2]'>Productive</span> Apps</h1>
                    <p className='text-[#627382] mx-auto mt-3 md:w-2/4'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                </div>
                <div className='text-center my-[40px]'>
                    <Link to={'https://play.google.com/store/apps'} className='btn mr-3 font-semibold'><img className='w-[32px]' src={playIcon} alt="" />Google Play</Link>
                    <Link to={'https://www.apple.com/app-store/'} className='btn font-semibold'><img className='w-[32px]' src={appIcon} alt="" />App Store</Link>
                </div>
                <div>
                    <img className='mx-auto' src={bannerImg} alt="" />
                </div>
            </div>
            <div className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] mx-auto text-white py-[80px] px-8 md:px-[80px]'>
                <h1 className='text-3xl md:text-5xl text-center font-bold mb-[40px]'>Trusted by Millions, Built for You</h1>
                <div className='flex flex-col md:flex-row justify-center gap-19 '>
                    <div className='text-center'>
                        <p>Total Downloads</p>
                        <h1 className='text-[64px] font-extrabold'>29.6M</h1>
                        <p>21% more than last month</p>
                    </div>
                    <div className=' text-center'>
                        <p>Total Reviews</p>
                        <h1 className='text-[64px] font-extrabold'>906K</h1>
                        <p>21% more than last month</p>
                    </div>
                    <div className='text-center'>
                        <p>Active Apps</p>
                        <h1 className='text-[64px] font-extrabold'>132+</h1>
                        <p>31 more will Launch</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;