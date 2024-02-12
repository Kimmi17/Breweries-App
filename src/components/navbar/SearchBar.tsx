import React, { useState, useEffect, ChangeEvent } from "react";
import { SearchBarProps } from "../../miscs/types";

const SearchBar: React.FC<SearchBarProps> = ({ setSearchTerm, searchTerm }) => {
  const [searchQuery, setSearchQuery] = useState(searchTerm);
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [timer]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setSearchQuery(newValue);
    if (timer) {
      clearTimeout(timer);
    }
    const newTimer = setTimeout(() => {
      setSearchTerm(newValue);
    }, 1000);
    setTimer(newTimer);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchQuery}
        onChange={handleChange}
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBar;
