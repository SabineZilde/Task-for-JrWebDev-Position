import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { emailSchema } from "../../Validations/emailValidation";
import img from '../../Assets/Images/ic_checkmark.svg';
import "./inputfield.css";

function InputField({ inputFieldText }) {
  const [email, setEmail] = useState("");

  const submitEmail = async (event) => {
      event.preventDefault();
      let formData = {
          email: event.target[0].value,
      };
      const isValid = await emailSchema.isValid(formData);
      console.log(isValid);
      console.log(formData);
  };

  const isSmallScreen = useMediaQuery({ query: "(max-width: 1000px)" });

  let inputStyle = "input_style_large input_style";
  let submitStyle = "submit_style submit_position_large";
  let wrapper = "wrapper wrapper_large";

  if (isSmallScreen) {
    inputStyle = "input_style_small input_style";
    submitStyle = "submit_style submit_position_small";
    wrapper = "wrapper wrapper_small";
  }

  let arrow = <FontAwesomeIcon icon={faArrowRightLong} />;

  return (
    <div className={wrapper}>
      <form onSubmit={submitEmail}>
        <input
          type="email"
          placeholder={inputFieldText}
          className={inputStyle}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <button type="submit">
          <Link className={submitStyle} to="/success">
            {arrow}
          </Link>
        </button>
        <input type="submit" value='->' style={{background: `url(${img})`}}/>
      </form>
    </div>
  );
}

export default InputField;
