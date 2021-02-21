import '../../App.css';
import HomeTopSection from '../HomeTopSection' ;
import HomeBottomSection from '../HomeBottomSection' ;
import Footer from '../Footer'
import React from 'react';
import Particles, { ThemeMode } from 'react-particles-js';

function Home() {
    return (
        <>
                <HomeTopSection/>
                <HomeBottomSection/>
                <Footer/>
        </>
    )
}

export default Home;