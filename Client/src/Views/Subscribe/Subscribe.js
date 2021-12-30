import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import "./subscribe.css";
import Heading from "../../Components/Heading/Heading";
import Subheading from "../../Components/Subheading/Subheading";
import InputField from "../../Components/InputFiield/InputField";
import Checkbox from "../../Components/Checkbox/Checkbox";
import Line from "../../Components/Line/Line";
import SocialIcons from "../../Components/SocialIcons/SocialIcons";

function Subscribe() {
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
    const [isInputInFocus, setIsInputInFocus] = useState(false);

    const isSmallScreen = useMediaQuery({ query: "(max-width: 1000px)" });

    let subscribeStyle = "subscribe_large";

    if (isSmallScreen) {
        subscribeStyle = "subscribe_small";
    };

    return (
        <div className={subscribeStyle}>
            <Heading heading_text="Subscribe to newsletter" />
            <Subheading subheading_text="Subscribe to our newsletter and get 10% discount on pineapple glasses." />
            <InputField 
                inputFieldText="Type your email address here…" 
                isCheckboxChecked={isCheckboxChecked}
                setIsInputInFocus={setIsInputInFocus}
            />
            <Checkbox
                description="I agree to "
                link="terms of service"
                setIsCheckboxChecked={setIsCheckboxChecked}
                isCheckboxChecked={isCheckboxChecked}
                isInputInFocus={isInputInFocus}
            />
            <Line />
            <SocialIcons />
        </div>
    );
}

export default Subscribe;
