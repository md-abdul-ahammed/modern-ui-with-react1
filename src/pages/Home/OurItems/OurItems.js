import React from 'react';
import './OurItems.css';
import flabours from '../../../images/Group2.png';
import lol from '../../../images/Group2.png';

const OurItems = () => {

    const items = [
        {
            img: 'https://i.imgur.com/8E2It1l.png'
        },
        {
            img: 'https://i.imgur.com/FpgujU1.png'
        },
        {
            img: 'https://i.imgur.com/ymVOrNm.png'
        },
        {
            img: 'https://i.imgur.com/XT5d5mT.png'
        },
        {
            img: 'https://i.imgur.com/w7UoRKm.png'
        },
        {
            img: 'https://i.imgur.com/d6QJPhC.png'
        },
        {
            img: 'https://i.imgur.com/KmHx4TA.png'
        },
        {
            img: 'https://i.imgur.com/xomRQFM.png'
        },
    ]

    return (
        <div className='ourItems'>
            <div className='our-item'>
                <div className='nothing'>
                    <h1 className='text-end item-container-title pe-5'>The flavours <br /> of your wish</h1>
                    <img className='doing' src={lol} alt="" />
                </div>
                <div className='row container-lg container-fluid mx-auto gy-4'>
                    {
                        items.map(item => (
                            <div className='col-lg-3 col-3'>
                                <img className='img-fluid mw-188' src={item.img} alt="" />
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    );
};

export default OurItems;
