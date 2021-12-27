import React from "react";
import { useMediaQuery } from "react-responsive";
import "./inputfield.css";

function InputField({ inputFieldText }) {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 1000px)" });

  let inputStyle = "input_style_large input_style";

  if (isSmallScreen) {
    inputStyle = "input_style_small input_style";
  }
  return (
    <div className="inline">
      <input type="text" placeholder={inputFieldText} className={inputStyle} />
      <input type="submit" className="submit_style" value="->" />
    </div>
  );
}

export default InputField;
