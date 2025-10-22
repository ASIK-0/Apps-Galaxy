import React from 'react';
import dwnldIcon from '../assets/icon-downloads.png'
import ratingIcon from '../assets/icon-ratings.png'

const AppCard = ({ app }) => {
    const { image, title, downloads, ratingAvg } = app
    return (
        <div>
            <div className="card bg-white p-[16px] hover:shadow-xl transition duration-300 ease-in-out hover:scale-102 cursor-pointer shadow-sm">
                <figure>
                    <img className='w-[350px] h-[350px]'
                        src={image}
                        alt="app image" />
                </figure>
                <div className="card-body">
                    <h2 className="py-[16px] card-title">{title}</h2>
                    <div className="card-actions justify-between">
                        <div className="badge bg-[#F1F5E8] p-4 text-[#00D390] "><img className='w-[16px]' src={dwnldIcon} alt="" />{downloads}</div>
                        <div className="badge bg-[#FFF0E1] p-4 text-[#FF8811]"><img className='w-[16px]' src={ratingIcon} alt="" />{ratingAvg}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppCard;