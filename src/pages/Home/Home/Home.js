import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import BecomeAPartner from '../BecomeAPartner/BecomeAPartner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import OurGallery from '../OurGallery/OurGallery';
import OurItems from '../OurItems/OurItems';
import OurPlatform from '../OurPlatform/OurPlatform';
import OurPolicy from '../OurPolicy/OurPolicy';

const Home = () => {
    return (
        <>
            <Header></Header>
            <OurItems></OurItems>
            <OurGallery></OurGallery>
            <AboutUs></AboutUs>
            <OurPolicy></OurPolicy>
            <BecomeAPartner></BecomeAPartner>
            <OurPlatform></OurPlatform>
            <Footer></Footer>
        </>
    );
};

export default Home;