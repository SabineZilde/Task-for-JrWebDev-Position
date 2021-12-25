import React from 'react';
import logo from '../../Assets/Images/logo_pineapple.svg';
import pineapple from '../../Assets/Images/pineapple..svg';
import { useMediaQuery } from 'react-responsive';
import './logo.css';

function Logo() {
    const isSmallScreen = useMediaQuery({ query: '(max-width: 550px)' })
    const isLargeScreen = useMediaQuery({ query: '(min-width: 550px' })

    return (
        <div>
            {isLargeScreen &&
                <div>
                    <img src={logo} alt="pineapple logo" className="logo" />
                    <img src={pineapple} alt="pineapple" className="pineapple" />
                </div>}
            {isSmallScreen && <img src={logo} alt="pineapple logo" className="logo_small" />}
        </div>
    )
}

export default Logo;
