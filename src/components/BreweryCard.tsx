import React from "react";
import { BreweryCardProps } from "../miscs/types";

const BreweryCard = ({ brewery }: BreweryCardProps) => {
  return (
    <div className="brewery-card">
      <h3>{brewery.name}</h3>
      <p>Type: {brewery.brewery_type}</p>
      <p>Address 1: {brewery.address_1}</p>
      {brewery.address_2 && <p>Address 2: {brewery.address_2}</p>}
      {brewery.address_3 && <p>Address 3: {brewery.address_3}</p>}
      <p>City: {brewery.city}</p>
      <p>State/Province: {brewery.state_province}</p>
      <p>Country: {brewery.country}</p>
      <p>
        Website: <a href={brewery.website_url}>{brewery.website_url}</a>
      </p>
    </div>
  );
};

export default BreweryCard;
