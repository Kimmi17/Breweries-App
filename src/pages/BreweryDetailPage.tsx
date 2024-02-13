import React from "react";
import { useParams } from "react-router-dom";
import useFetchDetail from "../hooks/useFetchDetail";
import { Brewery } from "../miscs/types";

const BreweryDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const url = `https://api.openbrewerydb.org/v1/breweries/${id}`;
  const { data: brewery, loading, error } = useFetchDetail<Brewery>(url);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !brewery) {
    return <div>{error || "Brewery not found."}</div>;
  }

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md mt-14">
      <h1 className="text-xl font-bold mb-4">{brewery.name}</h1>
      <p>
        <strong className="font-serif font-bold">Type:</strong>
        {brewery.brewery_type}
      </p>
      <p>
        <strong className="font-serif font-bold">Address:</strong>
        {brewery.address_1}
      </p>
      <p>
        <strong className="font-serif font-bold">City:</strong> {brewery.city}
      </p>
      <p>
        <strong className="font-serif font-bold">State/Province:</strong>
        {brewery.state_province}
      </p>
      <p>
        <strong className="font-serif font-bold">Country:</strong>
        {brewery.country}
      </p>
      <p className="mt-4">
        <a
          href={brewery.website_url}
          target="_blank"
          rel="noopener noreferrer"
          className=" text-black font-serif font-bold py-2 px-4 rounded-lg transition duration-300 hover:bg-gray-700"
          style={{
            background: "linear-gradient(to right, #c5eff7, #96d6e0)",
          }}
        >
          Visit Website
        </a>
      </p>
    </div>
  );
};

export default BreweryDetailPage;
