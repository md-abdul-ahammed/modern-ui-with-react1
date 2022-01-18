import React from 'react';
import './OurGallery.css';
import borderImg from '../../../images/Group 739.png'

const OurGallery = () => {
    return (
        <div className='container gallery-container mb-5'>
            <div >
                <h2 className='text-center fz-6'>Get your favourite food from the best restaurants in your city</h2>
            </div>
            <div className='row m-0'>
                <div className='col-4 py-5 img-overlay p-0 m-0'>
                    <div className='h-100 img-overlay'>
                        <img className='w-100 h-100 ' src="https://i.imgur.com/GP32MIh.png" alt="" />
                        <div className='overlay'><p className='mb-2'>Frankfurt</p></div>
                    </div>
                </div>
                <div className='col-8 py-5 m-0'>
                    <div className="row g-3">
                        <div className='col-6 '>
                            <div className='h-100 img-overlay'>
                                <img className='w-100 h-100 ' src="https://i.imgur.com/Lw4zjls.png" alt="" />
                                <div className='overlay'><p className='mb-2'>Berlin</p></div>
                            </div>
                        </div>
                        <div className='col-6 '>
                            <div className='h-100 img-overlay'>
                                <img className='w-100 h-100 ' src="https://i.imgur.com/IEzRfCK.png" alt="" />
                                <div className='overlay'><p className='mb-2'>Cologne</p></div>
                            </div>
                        </div>
                        <div className='col-6 '>
                            <div className='h-100 img-overlay'>
                                <img className='w-100 h-100 ' src="https://i.imgur.com/CHI6FBf.png" alt="" />
                                <div className='overlay'><p className='mb-2'>Dresden</p></div>
                            </div>
                        </div>
                        <div className='col-6 '>
                            <div className='h-100 img-overlay'>
                                <img className='w-100 h-100 ' src="https://i.imgur.com/7rcihzv.png" alt="" />
                                <div className='overlay'><p className='mb-2'>Hamburg</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border-img'>
                <img className="img-fluid d-none d-lg-block" src={borderImg} alt="" />
            </div>
        </div>
    );
};

export default OurGallery;