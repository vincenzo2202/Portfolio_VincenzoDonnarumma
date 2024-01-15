import React from 'react';
import './Home.css';
import image from '../../assets/vin1.png';
 
export const Home = () => {
    return (
        <div className='home-body'>
            <div className='title-home'>
                <div className='home'><img className=' home' src= {image} alt="home" />  </div> 
                <div className='title-name'>Vincenzo Donnarumma</div>
            </div>
        </div>
    );
};