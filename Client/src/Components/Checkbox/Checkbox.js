import React from "react";
import "./checkbox.css";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

function Checkbox({
  description,
  link,
  setIsCheckboxChecked,
  isCheckboxChecked,
  isInputInFocus,
}) {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 1000px)" });

  let checkboxStyle = "checkbox_style_large checkbox_style";
  let messageStyle = "message_large";

  if (isSmallScreen) {
    checkboxStyle = "checbox_style_small checkbox_style";
    messageStyle = "message_small";
  }

  const checkTheCheckbox = (e) => {
    const checked = e.target.checked;
    if (checked) {
      setIsCheckboxChecked(true);
    } else {
      setIsCheckboxChecked(false);
    }
  };

  let errorMessage;

  if (isInputInFocus && !isCheckboxChecked) {
    errorMessage = "You must accept the terms and conditions";
  }

  return (
    <div>
      <label className="label_style">
        <input
          type="checkbox"
          className={checkboxStyle}
          onClick={(e) => {
            checkTheCheckbox(e);
          }}
        />
        {description}
        <Link to="/" className="link">
          {link}
        </Link>
      </label>
      <div className={messageStyle}>{errorMessage}</div>
    </div>
  );
}

export default Checkbox;
