import React from "react";
import "./subscribe.css";
import { useMediaQuery } from "react-responsive";
import Heading from "../../Components/Heading/Heading";

function Subscribe() {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 1000px)" });

  let subscribeStyle = "subscribe_large";

  if (isSmallScreen) {
    subscribeStyle = "subscribe_small";
  }

  return (
    <div className={subscribeStyle}>
      <Heading heading_text="Subscribe to newsletter" />
    </div>
  );
}

export default Subscribe;
