import React from 'react';
import { Button } from '../ButtonElements';
import './Hero.css';

function Hero() {
    return (
        <div className='hero-container'>
            <h1>Travel Nore</h1>
            <p>Plan your next trip today</p>
            <div className='hero-btn'>
                <Button fontBig big primary>Get Started</Button>
            </div>
        </div>
    )
}

export default Hero

