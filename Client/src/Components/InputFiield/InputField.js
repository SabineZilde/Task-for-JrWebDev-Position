import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import Success from "../../Views/Success/Success";
import "./inputfield.css";

function InputField({ inputFieldText }) {
  const [email, setEmail] = useState('');

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
  let error = <div className={errorMessage} hidden></div>;
  let isDisabled = true;
  
  if (!email) {
    error = <div className={errorMessage}>Email address is required</div>;
  };
  
  function isEmailValid(email) {
    const emailRegexp = new RegExp(
      /^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{1,}$/i
    );
    return emailRegexp.test(email);
  };

  if (!isEmailValid(email)) {
    error = (
      <div className={errorMessage}>Please provide a valid e-mail address</div>
    );
  };

  function isFromColumbia(email) {
      const columbiaRegexp = new RegExp(
        /co$/i
      );
      return columbiaRegexp.test(email);
  };

  if (isFromColumbia(email)) {
      error = <div className={errorMessage}>We are not accepting subscriptions from Colombia emails</div>
  };


  if (isEmailValid(email) && !isFromColumbia(email)) {
    isDisabled = false;
  };

  return (
    <div className={wrapper}>
      <form>
        <input
          type="email"
          placeholder={inputFieldText}
          className={inputStyle}
          onChange={(event) => {
            setEmail(event.target.value);
            console.log(email);
          }}
        />
        <button className={submitStyle} type="submit" disabled={isDisabled}>
          {arrow}
        </button>
        {error}
      </form>
    </div>
  );
}

export default InputField;
