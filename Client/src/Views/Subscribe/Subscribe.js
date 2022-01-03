import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import "./subscribe.css";
import Heading from "../../Components/Heading/Heading";
import Subheading from "../../Components/Subheading/Subheading";
import InputField from "../../Components/InputFiield/InputField";
import Checkbox from "../../Components/Checkbox/Checkbox";
import Line from "../../Components/Line/Line";
import SocialIcons from "../../Components/SocialIcons/SocialIcons";
import SuccessCup from "../../Components/SuccessCup/SuccessCup";

function Subscribe() {
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
    const [isInputInFocus, setIsInputInFocus] = useState(false);
    const [isFormSubmited, setIsFormSubmited] = useState(false);

    const isSmallScreen = useMediaQuery({ query: "(max-width: 1000px)" });

    let subscribeStyle = "subscribe_large";

    if (isSmallScreen) {
        subscribeStyle = "subscribe_small";
    };

    const initialView = (
        <div className={subscribeStyle}>
            <Heading heading_text="Subscribe to newsletter" />
            <Subheading subheading_text="Subscribe to our newsletter and get 10% discount on pineapple glasses." />
            <InputField
                inputFieldText="Type your email address here…"
                isCheckboxChecked={isCheckboxChecked}
                setIsInputInFocus={setIsInputInFocus}
                setIsFormSubmited={setIsFormSubmited}
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

    const successView = (
        <div className={subscribeStyle}>
            <SuccessCup />
            <Heading heading_text="Thanks for subscribing!" />
            <Subheading subheading_text="You have successfully subscribed to our email listing. Check your email for the discount code." />
            <Line />
            <SocialIcons />
        </div>
    )

    if (isFormSubmited) {
        return successView;
    } else {
        return initialView;
    }

}

export default Subscribe;
