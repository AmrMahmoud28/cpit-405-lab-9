import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="cpit-405-lab-9/">Home</Link>
          </li>
          <li>
            <Link to="cpit-405-lab-9/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
