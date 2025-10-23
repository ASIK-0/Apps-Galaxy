import React, { useEffect, useState } from 'react';
import dwnldIcon from '../assets/icon-downloads.png'
import ratingIcon from '../assets/icon-ratings.png'
import revewIcon from '../assets/icon-review.png'
import { useParams } from 'react-router';
import useApps from '../Hooks/useApps';
import LoadingSpinner from '../components/LoadingSpinner';
// import { Bar, BarChart, CartesianGrid, Legend, Rectangle, Tooltip, XAxis, YAxis } from 'recharts';
import { Bar, BarChart, CartesianGrid, Legend, Rectangle, Tooltip, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)


const AppDetails = () => {
    const { id } = useParams()
    const [apps, loading] = useApps()
    const [alreadyInstalled, setalreadyInstalled] = useState(false)

    useEffect(() => {
        const savedlist = JSON.parse(localStorage.getItem('Installed')) || [];
        setalreadyInstalled(savedlist)
    }, [id]);

    const app = apps.find(app => String(app.id) === id)
    if (loading) {
        return (
            <div className='flex justify-center items-center h-screen'>
                <LoadingSpinner />
            </div>
        );
    }
    const { image, title, size, downloads, description, ratingAvg, reviews, companyName } = app


    const handleInstallBtn = (app) => {
        const excitingList = JSON.parse(localStorage.getItem('Installed'))
        let updateList = []
        if (excitingList) {
            const isInstalled = excitingList.some(a => a.id === app.id)
            if (isInstalled) return
            updateList = [...excitingList, app]
        }
        else {
            updateList.push(app)
        }
        localStorage.setItem('Installed', JSON.stringify(updateList))
        setalreadyInstalled(updateList)

        Swal.fire({
            title: "App Installed Successfully",
            text: `Enjoy our ${title}`,
            icon: "success"
        });


    }
    const chartData = app.ratings.map(r => ({
        name: r.name,
        count: r.count,
    })) || [];
    const maxValue = Math.max(...chartData.map(r => r.count));
    return (
        <div>
            <div className='flex flex-col md:flex-row w-full md:gap-[40px] px-6 md:px-[80px] pt-[30px] md:pt-[80px]'>
                <img className='mx-auto sm:w-[250px] sm:h-[250px] w-[350px] max-h-[350px]' src={image} alt="" />
                <div className='flex flex-col items-center md:items-start w-full'>
                    <h1 className=' text-center md:text-start font-bold text-[32px]'>{title}</h1>
                    <p className=' text-center md:text-start'>Developed by: <span className='text-[#632EE3]'>{companyName}</span></p>
                    <div className='border text-gray-500 opacity-10 w-full my-2 md:my-[40px]'></div>
                    <div className='flex flex-col md:flex-row justify-center items-center md:items-start md:justify-start gap-[50px] mb-[20px]'>
                        <div className='text-center'>
                            <img className='mx-auto w-[40px] h-[40px]' src={dwnldIcon} alt="icon" />
                            <p className='text-[#001931]'>Downloads</p>
                            <h1 className='font-extrabold sm:text-2xl text-[40px]'>{downloads}</h1>
                        </div>
                        <div className='text-center'>
                            <img className=' mx-auto w-[40px] h-[40px]' src={ratingIcon} alt="icon" />
                            <p className='text-[#001931]'>Average Ratings</p>
                            <h1 className='font-extrabold sm:text-2xl text-[40px]'>{ratingAvg}</h1>
                        </div>
                        <div className='text-center'>
                            <img className='mx-auto w-[40px] h-[40px]' src={revewIcon} alt="icon" />
                            <p className='text-[#001931]'>Total Reviews</p>
                            <h1 className='font-extrabold sm:text-2xl text-[40px]'>{reviews}</h1>
                        </div>
                    </div>
                    <button
                        onClick={() => handleInstallBtn(app)}
                        disabled={alreadyInstalled.some(a => a.id === app.id)}
                        className={`px-[20px] py-[14px] text-white font-medium rounded-sm 
                        ${alreadyInstalled.some(a => a.id === app.id) ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#00D390] cursor-pointer'}`}
                    >  {alreadyInstalled.some(a => a.id === app.id) ? 'Installed' : `Install Now (${size} MB)`}
                    </button>
                </div>
            </div>
            <div className='border text-gray-500 opacity-10 w-full my-[40px]'></div>

            {/* chart */}
            <div className='px-6 md:px-[80px]'>
                <h3 className="text-2xl font-semibold mb-4">Ratings</h3>
                <div className="bg-base-100 h-[350px] flex justify-center items-center">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            layout="vertical"
                            data={chartData}
                            margin={{ top: 10, right: 5, left: 5, bottom: 10 }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis type="number" domain={[0, maxValue + maxValue * 0.1]} />
                            <YAxis dataKey="name" type="category" width={50} />
                            <Tooltip formatter={(value) => [`${value.toLocaleString()} users`, 'Count']} />
                            <Legend />
                            <Bar
                                dataKey="count"
                                fill="orange"
                                name="Ratings Count"
                                activeBar={<Rectangle fill="gold" stroke="none" />}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
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