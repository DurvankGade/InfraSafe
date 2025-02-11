import React from "react";

export default function Header() {
  return (
    <div>
      <div className="top"></div>
      <nav className="flexX">
        <ul className="navlinks flexX">
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#demo">DEMO</a>
          </li>
          <li>
            <a href="#futer">CONTACT</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
