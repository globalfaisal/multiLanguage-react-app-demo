import React, { useState } from "react";

import Navbar from "../navbar/navbar";
import "./header.css";

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="header">
      <h2 className="header__logo">NGDB</h2>

      <div className="header__menu-wrapper">
        <div
          className={`header__hamburger-menu ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </div>
        {open && <Navbar />}
      </div>
    </header>
  );
}

export default Header;
