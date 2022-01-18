import React from 'react';
import './AboutUs.css';
import titleBg from '../../../images/Ellipse 117.png'

const AboutUs = () => {
    return (
        <div className='about-us-container'>
            <div className="about-us-title">
                <h1 className='text-start fz-6 ms-5'>About Us</h1>
                <img className='about-us-title-bg' src={titleBg} alt="" />
            </div>
            <div className="container about-us-text">
                <p className='fw-bold'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
            </div>
        </div>
    );
};

export default AboutUs;