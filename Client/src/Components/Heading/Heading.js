import React from "react";
import "./heading.css";
import { useMediaQuery } from "react-responsive";

function Heading({ heading_text }) {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 1000px)" });

  let headingStyle = 'heading heading_large';
  
  if (isSmallScreen) {
    headingStyle = "heading heading_small";
  };

  return <div className={headingStyle}>{heading_text}</div>;
}

export default Heading;
