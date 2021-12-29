import React from "react";
import { useMediaQuery } from "react-responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import "./inputfield.css";

function InputField({ inputFieldText }) {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 1000px)" });

  let inputStyle = "input_style_large input_style";
  let submitStyle = "submit_style submit_position_large";
  let wrapper = "wrapper wrapper_large";

  if (isSmallScreen) {
    inputStyle = "input_style_small input_style";
    submitStyle = "submit_style submit_position_small";
    wrapper = "wrapper wrapper_small";
  };

  let arrow = <FontAwesomeIcon icon={faArrowRightLong} />;

  return (
    <div className={wrapper}>
      <input type="text" placeholder={inputFieldText} className={inputStyle} />
      <button className={submitStyle}>{arrow}</button>
      {/* <input type="submit" className={submitStyle} value={arrow}/> */}
    </div>
  );
}

export default InputField;
