import React from "react";
import "./checkbox.css";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

function Checkbox({ description, link }) {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 1000px)" });

  let checkboxStyle = "checkbox_style_large checkbox_style";

  if (isSmallScreen) {
    checkboxStyle = "checbox_style_small checkbox_style";
  }

  return (
    <label className="label_style">
      <input type="checkbox" className={checkboxStyle} />
      {description}
      <Link to="/" className="link">{link}</Link>
    </label>
  );
}

export default Checkbox;
