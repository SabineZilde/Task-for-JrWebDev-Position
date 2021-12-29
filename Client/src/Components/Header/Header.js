import React from "react";
import Logo from "../Logo/Logo";
import "./header.css";
import { NavLink, Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

function Header() {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 1000px)" });

  let headerClass = "header header_large";
  let linkPosition = "link_position_large";
  let linkStyle = "font_size_large nav_link_large link_style";

  if (isSmallScreen) {
    headerClass = "header header_small";
    linkPosition = "link_position_small";
    linkStyle = "font_size_small nav_link_small link_style";
  }

  return (
    <div className={headerClass}>
      <div>
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className={linkPosition}>
        <NavLink to="/" className={linkStyle}>
          About
        </NavLink>
        <NavLink to="/" className={linkStyle}>
          How it works
        </NavLink>
        <NavLink to="/" className={linkStyle}>
          Contact
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
