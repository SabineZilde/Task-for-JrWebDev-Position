import React from "react";
import { useMediaQuery } from "react-responsive";
import "./inputfield.css";

function InputField({ inputFieldText }) {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 1000px)" });

  let inputStyle = "input_style_large input_style";
  let submitStyle = "submit_style submit_position_large";

  if (isSmallScreen) {
    inputStyle = "input_style_small input_style";
    submitStyle = "submit_style submit_position_small";
  };

  return (
    <div className="wrapper">
      <input type="text" placeholder={inputFieldText} className={inputStyle} />
      <input type="submit" className={submitStyle} value="->" />
    </div>
  );
}

export default InputField;
