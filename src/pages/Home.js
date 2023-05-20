import React from 'react'
import {Link} from 'react-router-dom';
import BannerImage from '../assets/barberHome.jpg'
import '../styles/Home.css';

function Home() {
    return (
        <div className='home' style={{ backgroundImage: `url(${BannerImage})` }}>
            <div className='headerContainer'>
                <h1> NORI's barber shop</h1>
                <p>Best barber in the world</p>
                <Link to='/book'>
                    <button> BOOK NOW </button>
                </Link>
            </div>
        </div>
    )
}

export default Home;