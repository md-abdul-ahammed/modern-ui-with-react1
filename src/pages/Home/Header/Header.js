import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.css';
import Leaves1 from '../../../images/mint png 5.png'
import Leaves2 from '../../../images/mint png 2.png'
import Leaves3 from '../../../images/Group 989.png'
import Leaves4 from '../../../images/mint png 1.png'

const Header = () => {
    return (
        <div className='header-container px-5'>
            <Navbar></Navbar>
            <div className='d-flex flex-lg-nowrap flex-wrap-reverse header-content justify-content-lg-between justify-content-center align-items-center'>
                <div className="header-left">
                    <div className='d-flex flex-lg-column flex-column-reverse'>
                        <div>
                            <h1 className='fw-bolder primary-text-color'>Your Favourite Food <br />
                                Delivered To You</h1>
                            <p className='fw-bold fs-5'>Lorem ipsum dolor sit amet consectetuer adipiscing elit, <br /> sed diam nonummy nibh </p>
                        </div>
                        <div className="search-field my-4">
                            <input className='rounded' type="text" />
                            <i className="fas fs-4 fa-map-marker-alt"></i>
                            <button className='search-btn fw-bolder ms-3 rounded'>Find</button>
                        </div>
                    </div>
                    <img className='min1-img' src={Leaves1} alt="leaves1" />
                    <img className='min2-img' src={Leaves2} alt="leaves2" />
                    <img className='min3-img' src={Leaves3} alt="leaves3" />
                </div>
                <div className="header-right">
                    <img src="https://i.imgur.com/5MHUm9s.png" alt="" />
                    <img className='min4-img' src={Leaves4} alt="leaves2" />
                </div>
            </div>
        </div>
    );
};

export default Header;