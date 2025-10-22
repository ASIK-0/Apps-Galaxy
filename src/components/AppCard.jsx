import React from 'react';
import dwnldIcon from '../assets/icon-downloads.png'
import ratingIcon from '../assets/icon-ratings.png'
import { Link } from 'react-router';

const AppCard = ({ app }) => {
    const { image, title, downloads, ratingAvg, id } = app
    return (
        <div>
            <Link to={`/appDetails/${id}`}>
                <div className="card bg-white p-[16px]  hover:shadow-xl transition duration-300 ease-in-out hover:scale-102 cursor-pointer shadow-sm">
                    <figure>
                        <img className='w-[350px] h-[350px]'
                            src={image}
                            alt="app image" />
                    </figure>
                    <div className="card-body">
                        <h2 className="py-[16px] card-title">{title}</h2>
                        <div className="card-actions justify-between">
                            <div className="badge bg-[#F1F5E8] p-4 text-xl text-[#00D390] font-bold "><img className='w-[16px]' src={dwnldIcon} alt="" />{downloads}</div>
                            <div className="badge bg-[#FFF0E1] p-4 text-xl text-[#FF8811] font-semibold"><img className='w-[16px]' src={ratingIcon} alt="" />{ratingAvg}</div>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default AppCard;