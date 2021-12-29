import React from "react";
import { useMediaQuery } from "react-responsive";
import "./success.css";
import SuccessCup from "../../Components/SuccessCup/SuccessCup";
import Heading from "../../Components/Heading/Heading";
import Subheading from "../../Components/Subheading/Subheading";
import Line from "../../Components/Line/Line";
import SocialIcons from "../../Components/SocialIcons/SocialIcons";

function Success() {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 1000px)" });

  let successStyle = "success_large";

  if (isSmallScreen) {
    successStyle = "success_small";
  }

  return (
    <div className={successStyle}>
      <SuccessCup />
      <Heading heading_text="Thanks for subscribing!" />
      <Subheading subheading_text="You have successfully subscribed to our email listing. Check your email for the discount code." />
      <Line />
      <SocialIcons />
    </div>
  );
}

export default Success;
