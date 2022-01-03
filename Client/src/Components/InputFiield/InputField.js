import React, { useState } from "react";
import Axios from "axios";
import { useMediaQuery } from "react-responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import "./inputfield.css";

function InputField({ inputFieldText, isCheckboxChecked, setIsInputInFocus, setIsFormSubmited }) {
  const [email, setEmail] = useState('');

  const addEmail = async (e) => {
    e.preventDefault();
    const url = "http://localhost:3002/emails";
    const data = {
      email: email,
    };
    try {
      await Axios.post(url, data);
      console.log("success");
      setIsFormSubmited(true);
    } catch (e) {
      alert("Somethig went wrong when talikng to the server");
    }
  };

  const isSmallScreen = useMediaQuery({ query: "(max-width: 1000px)" });

  let inputStyle = "input_style_large input_style";
  let submitStyle = "submit_style submit_position_large";
  let wrapper = "wrapper wrapper_large";
  let errorMessage = "error_message_large";

  if (isSmallScreen) {
    inputStyle = "input_style_small input_style";
    submitStyle = "submit_style submit_position_small";
    wrapper = "wrapper wrapper_small";
    errorMessage = "error_message_small";
  }

  let arrow = <FontAwesomeIcon icon={faArrowRightLong} />;
  let error;
  let isDisabled = true;

  if (!email) {
    error = "Email address is required";
  }

  function isEmailValid(email) {
    const emailRegexp = new RegExp(
      /^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{1,}$/i
    );
    return emailRegexp.test(email);
  }

  if (!isEmailValid(email)) {
    error = "Please provide a valid e-mail address";
  }

  function isFromColumbia(email) {
    const columbiaRegexp = new RegExp(/co$/i);
    return columbiaRegexp.test(email);
  }

  if (isFromColumbia(email)) {
    error = "We are not accepting subscriptions from Colombia emails";
  }

  if (isEmailValid(email) && !isFromColumbia(email) && isCheckboxChecked) {
    isDisabled = false;
  }

  return (
    <div className={wrapper}>
      <form>
        <input
          type="email"
          placeholder={inputFieldText}
          className={inputStyle}
          onChange={(event) => {
            setEmail(event.target.value);
            setIsInputInFocus(true);
          }}
        />
        <button
          className={submitStyle}
          disabled={isDisabled}
          onClick={addEmail}
          type="submit"
        >
          {arrow}
        </button>
        <div className={errorMessage}>{error}</div>
      </form>
    </div>
  );
}

export default InputField;
