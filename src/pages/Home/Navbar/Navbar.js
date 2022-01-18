import React from 'react';
import logo from '../../../images/logo.png';
import './Navbar.css'


const Navbar = () => {
    return (
        <div className='nav-container'>
            <div className='nav-items d-flex align-items-center justify-content-between py-4'>
                <div className='nav-item'>
                    <img className='img-fluid' src={logo} alt="" />
                </div>
                <div className='nav-item'>
                    <ul className='menu-items align-items-center d-flex'>
                        <li className='menu-item fw-bold'>English</li>
                        <li className='menu-item'>Sign In</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;