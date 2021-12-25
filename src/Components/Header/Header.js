import React from "react";
import Logo from "../Logo/Logo";
import "./header.css";
import { NavLink, Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

function Header() {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 1000px)" });

  let headerClass;
  let linkPosition;
  let fontSize;

  if (isSmallScreen) {
    headerClass = "header header_small";
    linkPosition = 'link_position_small';
    fontSize = 'font_size_small nav_link'
  } else {
    headerClass = "header header_large";
    linkPosition = 'link_position_large'
    fontSize = 'font_size_large nav_link'
  }

  return (
    <div className={headerClass}>
      <div>
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className={linkPosition} >
        <NavLink to="/" className={fontSize}>About</NavLink>
        <NavLink to="/" className={fontSize}>How it works</NavLink>
        <NavLink to="/" className={fontSize}>Contact</NavLink>
      </div>
    </div>
  );
}

export default Header;
