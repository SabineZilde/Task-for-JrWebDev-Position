import React from "react";
import Logo from "../Logo/Logo";
import { NavLink, Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Link to="/">
        <Logo />
      </Link>
      <NavLink to="/">About</NavLink>
      <NavLink to="/">How it works</NavLink>
      <NavLink to="/">Contact</NavLink>
    </div>
  );
}

export default Header;
