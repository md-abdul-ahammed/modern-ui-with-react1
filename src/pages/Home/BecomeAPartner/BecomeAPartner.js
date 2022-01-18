import React from 'react';
import './BecomeAPartner.css';

const BecomeAPartner = () => {
    return (
        <div className='partner-container'>
            <div className='content-area'>
                <div className="partner-img-area">
                    <img className='img-fluid' src="https://i.imgur.com/rLoGZDD.png" alt="" />
                </div>
                <div className='partner-content-area'>
                    <div className='partner-content-details'>
                        <p className='fw-bold'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum </p>
                        <button className='px-5 py-2 d-flex justify-content-center m-auto border-0 btn-p fw-bold rounded'>Sign up your store</button>
                    </div>
                    <div className='content-border '>
                        <img className='d-none d-lg-block' style={{ width: '143%' }} src="https://i.imgur.com/ofcwJxN.png" alt="" />
                    </div>
                </div>
                <button className='px-5 py-2 border-0 btn-p btn-p-add fw-bold'>Become a partner</button>
            </div>
        </div>
    );
};

export default BecomeAPartner;