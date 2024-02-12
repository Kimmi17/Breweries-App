// BreweryList.tsx

import { BreweryListProps } from "../miscs/types";
import BreweryCard from "./BreweryCard";

const BreweryList = ({ breweries }: BreweryListProps) => {
  return (
    <div className="brewery-list">
      <h2>List of Breweries</h2>
      {breweries.map((brewery) => (
        <BreweryCard key={brewery.id} brewery={brewery} />
      ))}
    </div>
  );
};

export default BreweryList;
