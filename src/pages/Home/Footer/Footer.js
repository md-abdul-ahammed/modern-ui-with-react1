import React from 'react';
import footerLogo from '../../../images/Group 741.png';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-container d-none d-lg-block pt-5'>
            <div className="row container-fluid text-white justify-content-between ">
                <div className="col-md-3">
                    <img className='img-fluid mb-3' src={footerLogo} alt="" />
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. </p>
                    <span className='d-flex align-items-center mb-3'><i className="far me-3 fs-4 fa-envelope"></i> mdabdulahammed1@gmail.com</span>
                    <span className='d-flex align-items-center mb-3'><i class="fas fs-4 me-3 fa-phone-alt"></i> mdabdulahammed1@gmail.com</span>
                </div>
                <div className="col-md-2 ">
                    <div className='pages border-start border-2 ps-3'>
                        <h3 className='mb-4'>Lorem ipsum</h3>
                        <p>About Us</p>
                        <p>Our Services</p>
                        <p>Contact Us</p>
                        <p>Lorem ipsum</p>
                    </div>
                </div>
                <div className="col-md-2">
                    <div className='valuable-links border-start border-2 ps-3'>
                        <h3 className='mb-4'>Lorem ipsum</h3>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                    </div>
                </div>
                <div className="col-md-2 d-flex pb-5 justify-content-end align-items-end">
                    <div className=''>
                        <p>Powered by <span className='c-name text-end'>Fleksa</span></p>
                        <div className='social-icon'>
                            <i class="fab fs-3 me-3 fa-facebook"></i>
                            <i class="fab fs-3 me-3 fa-instagram"></i>
                            <i class="fab fs-3 fa-twitter"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className='copyright-area text-center'>
                <span>Copyright <i class="far fa-copyright"></i> 2019 <span className='c-name'>Organic</span>. All rights reserved. Designed by <span className='c-name'>GraphicForest</span>. </span>
            </div>
        </div>
    );
};

export default Footer;