import React from "react";

export default function Header() {
  return (
    <div>
      <div className="top"></div>
      <nav className="flexX">
        <ul className="navlinks flexX">
          <li>
            <a href="">HOME</a>
          </li>
          <li>
            <a href="">ABOUT</a>
          </li>
          <li>
            <a href="">DEMO</a>
          </li>
          <li>
            <a href="">CONTACT</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
