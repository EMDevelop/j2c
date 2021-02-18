import '../../App.css';
import HomeTopSection from '../HomeTopSection' ;
import HomeBottomSection from '../HomeBottomSection' ;
import React from 'react';
import Particles, { ThemeMode } from 'react-particles-js';

function Home() {
    return (
        <>
                <HomeTopSection/>
                <HomeBottomSection/>
        </>
    )
}

export default Home;