import React from "react";
import "./subscribe.css";
import { useMediaQuery } from "react-responsive";
import Heading from "../../Components/Heading/Heading";
import Subheading from "../../Components/Subheading/Subheading"; 

function Subscribe() {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 1000px)" });

  let subscribeStyle = "subscribe_large";

  if (isSmallScreen) {
    subscribeStyle = "subscribe_small";
  }

  return (
    <div className={subscribeStyle}>
      <Heading heading_text="Subscribe to newsletter" />
      <Subheading subheading_text="Subscribe to our newsletter and get 10% discount on pineapple glasses." />
    </div>
  );
}

export default Subscribe;
