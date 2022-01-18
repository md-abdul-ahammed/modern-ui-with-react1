import React from 'react';
import paltformBg from '../../../images/Group 991.png';
import platformImg from '../../../images/Layer 1-8.png'
import './OurPlatform.css';

const OurPlatform = () => {
    return (
        <div className='platform-container d-none d-lg-block'>
            <div className='platform-content row p-0 m-0'>
                <div className='col-md-8 p-0'>
                    <img className='img-fluid' src={platformImg} alt="" />
                </div>
                <div className='col-md-4'>
                    <div className="platform-title">
                        <h1>
                            Download <br /> the app!
                        </h1>
                        <img className='platform-title-bg img-fluid' src={paltformBg} alt="" />
                    </div>
                    <div className='platform-content-details'>
                        <p className='fs-5'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, consequat.  </p>
                        <div className='d-flex justify-content-between'>
                            <button className='d-flex justify-content-center px-4 border-0 rounded bg-dark text-white py-2 align-items-center'>
                                <i className="fab fs-3 fa-apple me-2"></i>
                                <div>
                                    <p className='m-0'>Available on</p>
                                    <p className='mb-0 n-mt ms-1'>the app store</p>
                                </div>
                            </button>
                            <button className='d-flex justify-content-center px-4 border-0 rounded bg-dark text-white py-2 align-items-center'>
                                <i className="fab fs-5 fa-google-play me-2"></i>
                                <div>
                                    <p className='m-0'>Available on</p>
                                    <p className='mb-0 n-mt ms-1'>the app store</p>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurPlatform;