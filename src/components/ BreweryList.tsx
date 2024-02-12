import React from "react";
import { BreweryListProps } from "../miscs/types";
import BreweryCard from "./BreweryCard";

const BreweryList: React.FC<BreweryListProps> = ({ breweries }) => {
  // Ensure breweries is an array before proceeding
  if (!Array.isArray(breweries)) {
    return <div>No breweries to display</div>;
  }

  // Define the number of cards to show in each row
  const numCardsPerRow = 3;

  const cardRows = [];
  for (let i = 0; i < breweries.length; i += numCardsPerRow) {
    const row = breweries.slice(i, i + numCardsPerRow);
    cardRows.push(
      <div key={i} className="flex justify-center gap-4">
        {row.map((brewery) => (
          <BreweryCard key={brewery.id} brewery={brewery} />
        ))}
      </div>
    );
  }

  return <div className="brewery-list">{cardRows}</div>;
};

export default BreweryList;
