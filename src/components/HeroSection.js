import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='/videos/v1.mp4' autoPlay loop muted />

            <h1 style={{color:'lightgray',fontFamily:'Mongolian Baiti',fontSize:'80px' }}>WELCOME TO BANGLADESH</h1>
            <p style={{fontFamily:'Bradley Hand, cursive',color:'whitesmoke'}}>LETS TRAVEL WITH
                <span style={{fontFamily:'Bradley Hand, cursive', fontWeight:'bold', color:'lightgreen'}}> TANVIR HOSSEN BAPPY</span> </p>
            <div className='hero-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    LETS VISIT
                </Button>
                <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                    onClick={console.log('hey')}
                >
                    WATCH NOW <i className='far fa-play-circle' />
                </Button>
            </div>
        </div>



    );
}

export default HeroSection;