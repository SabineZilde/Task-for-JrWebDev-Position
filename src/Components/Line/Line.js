import React from "react";
import "./line.css";
import { useMediaQuery } from "react-responsive";

function Line() {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 1000px)" });

  let lineStyle = 'line line_large';

  if (isSmallScreen) {
      lineStyle = 'line line_small';
  };

  return <div className={lineStyle} />;
}

export default Line;
