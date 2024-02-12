import React from "react";
import { BreweryListProps } from "../miscs/types";
import BreweryCard from "./BreweryCard";

const BreweryList: React.FC<BreweryListProps> = ({ breweries }) => {
  // Ensure breweries is an array before proceeding
  if (!Array.isArray(breweries)) {
    return <div>No breweries to display</div>;
  }

  const cardRows = [];
  for (let i = 0; i < breweries.length; i += 3) {
    const row = breweries.slice(i, i + 3);
    cardRows.push(
      <div key={i} className="flex justify-center gap-4">
        {row.map((brewery) => (
          <BreweryCard key={brewery.id} brewery={brewery} />
        ))}
      </div>
    );
  }

  return (
    <div className="brewery-list">
      <h2>List of Breweries</h2>
      {cardRows}
    </div>
  );
};

export default BreweryList;
