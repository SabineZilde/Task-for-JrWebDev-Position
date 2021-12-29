import React from 'react';
import cup from '../../Assets/Images/ic_success.svg';
import './successcup.css';
import { useMediaQuery } from 'react-responsive';

function SuccessCup() {
    const isSmallScreen = useMediaQuery({ query: '(max-width: 1000px)' });

    let cupStyle = 'cup_large';
    
    if (isSmallScreen) {
        cupStyle = 'cup_small';
    };

    return (
        <div>
            <img src={cup} alt="success cup" className={cupStyle} />
        </div>
    )
}

export default SuccessCup;
