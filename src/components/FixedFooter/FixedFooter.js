import React from 'react';
import './FixedFooter.scss';

const FixedFooter = () => {
    return (
        <div className='fixed-footer-container font-size-3'>
            Copy right @2020 BayFay
            <span className='powered-by-label'>
                <span className='silver-text mr-1'>powered by</span>
                <span className='color-black font-weight-bold'>PickZy</span>
            </span>
        </div>
    );
};

export default FixedFooter;
