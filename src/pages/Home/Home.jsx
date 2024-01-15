import React from 'react';
import './Home.css';
import image from '../../assets/vin1.png';
 
export const Home = () => {
    return (
        <> 
        <div className='home-body'>
            <div className='title-home'>
                <div className='home-image'><img className='home-image' src= {image} alt="home" />  </div> 
                <div className='title-name'>Vincenzo Donnarumma</div>
            </div>
        </div>
        <div className='about-me'>

        </div>
        <div className='projects'>

        </div>
        <div className='contact'>

        </div>

        </>
    );
};