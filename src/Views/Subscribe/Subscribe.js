import React from 'react';
import './subscribe.css';
import { useMediaQuery } from "react-responsive";

function Subscribe() {
    const isSmallScreen = useMediaQuery({ query: "(max-width: 1000px)" });

    let subscribeStyle;

    if (isSmallScreen) {
        subscribeStyle = "subscribe_small";
    } else {
        subscribeStyle = "subscribe_large";
    };

    return (
        <div className={subscribeStyle}>
        </div>
    )
}

export default Subscribe;
