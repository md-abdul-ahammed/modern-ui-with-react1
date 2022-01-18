import React from 'react';
import './OurPolicy.css'

const OurPolicy = () => {

    const allPolicy = [
        {
            img: 'https://i.imgur.com/qnJmI2u.png',
            title: 'More Money',
            desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna '
        },
        {
            img: 'https://i.imgur.com/cbYS2eo.png',
            title: '100% Risk Free',
            desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna '
        },
        {
            img: 'https://i.imgur.com/T1CgNmi.png',
            title: 'Home Delivery',
            desc: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna '
        },
    ]

    return (
        <div className='ourPolicy-container'>
            <div className="container">
                <div className="row text-center">
                    {
                        allPolicy.map(policy => (
                            <div className='col-md-4 py-5'>
                                <div>
                                    <img src={policy.img} className='img-fluid' alt="" />
                                </div>
                                <h3 className='policy-title mt-4 fw-bold'>{policy.title}</h3>
                                <p className='policy-desc fw-bold'>{policy.desc}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default OurPolicy;