import React from "react";
import Header from "./Header";
import SearchBar from "./SearchBar"; // Assuming this is the correct path to your SearchBar component
import { NavbarProps } from "../../miscs/types"; // Import the interface for NavbarProps

const Navbar = ({ setSearchTerm, searchTerm }: NavbarProps) => {
  return (
    <nav className="navbar">
      <Header />
      <SearchBar setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
    </nav>
  );
};

export default Navbar;
