import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src="/logo.svg" alt="Logo" />
      </Link>

      <p>Pouring perfection, crafting tradition</p>
    </div>
  );
};

export default Header;
