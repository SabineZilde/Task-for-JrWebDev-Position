import React from "react";
import "./socialicons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

function SocialIcons() {
  return (
    <div className="social_inline">
      <a className="circle circleFB" href="#">
        <div className="icon">
          <FontAwesomeIcon icon={faFacebookF} />
        </div>
      </a>
      <a className="circle circleIG" href="#">
        <div className="icon">
          <FontAwesomeIcon icon={faInstagram} />
        </div>
      </a>
      <a className="circle circleTW" href="#">
        <div className="icon">
          <FontAwesomeIcon icon={faTwitter} />
        </div>
      </a>
      <a className="circle circleYT" href="#">
        <div className="icon">
          <FontAwesomeIcon icon={faYoutube} />
        </div>
      </a>
    </div>
  );
}

export default SocialIcons;
