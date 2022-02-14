import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import github from '../images/github.png';
import email from '../images/email.png';
import classNames from "classnames";

function Navbar() {
  const location = useLocation();
  let constCurr = location.pathname;
  return (
    <div className="nav-wrapper">
      <div className="elements">
        <div className={classNames('text', { 'active': constCurr === "/" })}><NavLink to="/">Home</NavLink></div>
        <div className={classNames('text', { 'active': constCurr === "/about" })}><NavLink to="/about">About</NavLink></div>
        <div className={classNames('text', { 'active': constCurr === "/projects" })}><NavLink to="/projects">Projects</NavLink></div>
        <div className={classNames('text', { 'active': constCurr === "/contacts" })}><NavLink to="/contacts">Contacts</NavLink></div>
        <a href="https://github.com/theo110">
          <img className="socials" src={github} alt="Github"></img>
        </a>
        <a href="mailto:t3roh@uwaterloo.ca">
          <img className="socials" src={email} alt="Email"></img>
        </a>
      </div>
    </div>
  );
};

export default Navbar;

/*
      <Link to="/">Home </Link>
      <Link to="/about">About </Link>
      <Link to="/projects">Projects </Link>
      <Link to="/contacts">Contacts</Link>
*/