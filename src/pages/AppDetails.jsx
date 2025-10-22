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
            {/* app details */}
        </div>
    )
};

export default AppDetails;