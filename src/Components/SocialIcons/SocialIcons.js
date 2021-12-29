import React from "react";
import "./socialicons.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { useMediaQuery } from "react-responsive";

function SocialIcons() {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 1000px)" });

  let socialStyle = "social_inline social_large";
  let marginRight = {marginRight: '20px'};

  if (isSmallScreen) {
    socialStyle = "social_inline social_small";
    marginRight = {marginRight: '10px'};
  }

  return (
    <div className={socialStyle}>
      <a className="circle circleFB" style={marginRight} href="#">
        <div className="icon">
          <FontAwesomeIcon icon={faFacebookF} />
        </div>
      </a>
      <a className="circle circleIG" style={marginRight} href="#">
        <div className="icon">
          <FontAwesomeIcon icon={faInstagram} />
        </div>
      </a>
      <a className="circle circleTW"  style={marginRight} href="#">
        <div className="icon">
          <FontAwesomeIcon icon={faTwitter} />
        </div>
      </a>
      <a className="circle circleYT"  style={marginRight} href="#">
        <div className="icon">
          <FontAwesomeIcon icon={faYoutube} />
        </div>
      </a>
    </div>
  );
}

export default SocialIcons;
