import React from "react";
import { Link } from "react-router-dom";
import { BreweryCardProps } from "../miscs/types";

const BreweryCard = ({ brewery }: BreweryCardProps) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/4 p-4">
      <div className="border rounded-lg p-4 h-full">
        <h3 className="text-xl font-semibold mb-2">{brewery.name}</h3>
        <p className="mb-1">
          <span className="font-semibold">Type:</span> {brewery.brewery_type}
        </p>
        <p className="mb-1">
          <span className="font-semibold">Address:</span> {brewery.address_1},{" "}
          {brewery.city}, {brewery.state_province}, {brewery.country}
        </p>
        {brewery.website_url && (
          <p className="mb-1">
            <span className="font-semibold">Website:</span>{" "}
            <a
              href={brewery.website_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {brewery.website_url}
            </a>
          </p>
        )}
        <Link
          to={`/breweries/${brewery.id}`}
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg inline-block mt-2"
        >
          View Detail
        </Link>
      </div>
    </div>
  );
};

export default BreweryCard;
