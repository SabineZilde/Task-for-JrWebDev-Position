import React from "react";
import Logo from "../Logo/Logo";
import "./header.css";
import { NavLink, Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

function Header() {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 1000px)" });

  let headerClass;
  let linkPosition;

  if (isSmallScreen) {
    headerClass = "header header_small";
    linkPosition = 'link_position_small';
  } else {
    headerClass = "header header_large";
    linkPosition = 'link_position_large'
  }

  return (
    <div className={headerClass}>
      <div>
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className={linkPosition} >
        <NavLink to="/" className='nav_link'>About</NavLink>
        <NavLink to="/" className='nav_link'>How it works</NavLink>
        <NavLink to="/" className='nav_link'>Contact</NavLink>
      </div>
    </div>
  );
}

export default Header;
