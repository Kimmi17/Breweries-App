import React from "react";
import SearchBar from "./SearchBar";
import { NavbarProps } from "../../miscs/types";
import { Link } from "react-router-dom";

const Navbar = ({ setSearchTerm, searchTerm }: NavbarProps) => {
  return (
    <nav
      className="navbar flex items-center justify-between"
      style={{
        background: "linear-gradient(to right, #c5eff7, #96d6e0)",
        padding: "40px",
        margin: "0",
      }}
    >
      <p className="ml-2 text-lg font-serif">
        Pouring perfection, crafting tradition!
      </p>

      <Link to="/" onClick={() => setSearchTerm("")}>
        <img src="/logo.svg" alt="Logo" />
      </Link>
      <SearchBar setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
    </nav>
  );
};

export default Navbar;
