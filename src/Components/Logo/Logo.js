import React from 'react';
import logo from '../../Assets/Images/logo_pineapple.svg';
import pineapple from '../../Assets/Images/pineapple..svg';
import { useMediaQuery } from 'react-responsive';

function Logo() {
    const isBigScreen = useMediaQuery({ query: '(min-width: 550px)' })

    return (
        <div>
            <img src={logo} alt="pineapple logo" style={{ marginTop: '50px', marginLeft: '50px' }} />
            {isBigScreen && <img src={pineapple} alt="pineapple" style={{ marginLeft: '10px' }} />}
        </div>
    )
}

export default Logo;
