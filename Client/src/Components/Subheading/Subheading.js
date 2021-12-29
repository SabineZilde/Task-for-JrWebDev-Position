import React from "react";
import "./subheading.css";
import { useMediaQuery } from "react-responsive";

function Subheading({ subheading_text }) {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 1000px)" });

  let subheadingStyle = 'subheading subheading_large';
  
  if (isSmallScreen) {
    subheadingStyle = "subheading subheading_small";
  };

  return <div className={subheadingStyle}>{subheading_text}</div>;
}

export default Subheading;
